import RestaurantCard, {withPromotedLabel} from "./RestaurantCard.jsx";
import resList from "../utils/mockjData.js";
import {useState, useEffect, useContext} from "react";
import Shimmer from "./Shimmer.jsx";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UseContext from "../utils/UseContext.js";

const Body = () => {

    const {loggedInUser,setUserName} = useContext(UseContext);
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredList,setFilteredList] = useState([]);

    const [searchText,setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
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

    if(onlineStatus === false) return <h1>Oop's, You are Offline.</h1>;

    return listOfRestaurants.length === 0 ? <Shimmer/> : (
    
        <div className="body bg-pink-100">
            <div className="flex justify-around">
                <div className="search m-2 p-2 ">
            
                    <input type="text" className="border border-solid border-black  focus:border-blue-500 focus:ring-2 focus:ring-blue-500" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
        
                    }}/>
                    <button className="m-2 px-4 bg-yellow-300 rounded-4xl" onClick={()=>{
                       const filteredRestaurants = listOfRestaurants.filter((res)=> res.info.name.includes(searchText));
                       setFilteredList(filteredRestaurants);
                    }}>Search</button>
                </div>

                <button className="m-4 px-4 bg-yellow-300 rounded-4xl" onClick={()=>{
                    const filterList = listOfRestaurants.filter((res)=>Number(res.info.avgRating)>4.3);
                    setFilteredList(filterList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="search m-4 p-4 flex items-center">
                <label>UserName:</label>
                <input className="border border-black p-2" value={loggedInUser} onChange={()=> setUserName(e.target.value)} />
            </div>
            <div className="flex flex-wrap">
            {
                filteredList.map((restaurant) => (
                    <Link  key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                {
                    restaurant.info.avgRating >= 4.3? <RestaurantCardPromoted resObj={restaurant} /> : <RestaurantCard  resObj={restaurant} />
                }
                </Link>
                ))
            }
            </div>
        </div>
    )
}

export default Body;
