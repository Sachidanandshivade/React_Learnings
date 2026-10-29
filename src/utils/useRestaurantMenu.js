import {useState,useEffect} from "react";
import {RESTAURANT_LIST_API} from "./constants";

const useRestaurantMenu = (resId) => {
    const [info,setInfo] = useState(null);
    const [notFound,setNotFound] = useState(false);

    useEffect(()=> {
        let ignore = false;

        setInfo(null);
        setNotFound(false);

        const fetchRestaurant = async () => {
            try {
                const res = await fetch(RESTAURANT_LIST_API);
                const json = await res.json();

                const restaurants = json?.data?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants ?? [];

            const match = restaurants.find((r) => r.info.id === resId);

            if(ignore) return;
            if(match) setInfo(match.info);
            else setNotFound(true);
            }catch(err) {
                console.error("Fetch failed:", err);
        if (!ignore) setNotFound(true);
            }
        };

        fetchRestaurant();

        return () => {
            ignore = true;
        };
    },[resId]);
    return {info,notFound};
};
export default useRestaurantMenu;