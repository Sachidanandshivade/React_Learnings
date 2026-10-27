import RestaurantCard from "./RestaurantCard.jsx";
import resList from "../utils/mockjData.js";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer.jsx";


const Body = () => {

    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredList,setFilteredList] = useState([]);

    const [searchText,setSearchText] = useState("");
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.198909&lng=77.7068926&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setListOfRestaurant(json?.data?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? []);
        setFilteredList(json?.data?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? []);
    };


    return listOfRestaurants.length === 0 ? <Shimmer/> : (
    
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
        
                    }}/>
                    <button onClick={()=>{
                       const filteredRestaurants = listOfRestaurants.filter((res)=> res.info.name.includes(searchText));
                       setFilteredList(filteredRestaurants);
                    }}>Search</button>
                </div>

                <button className="filter-btn" onClick={()=>{
                    const filterList = listOfRestaurants.filter((res)=>Number(res.info.avgRating)>4.3);
                    setFilteredList(filterList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
            {
                filteredList.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resObj={restaurant} />))
            }
            </div>
        </div>
    )
}

export default Body;
