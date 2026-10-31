
import { useState, useEffect } from "react";
import { RESTAURANT_LIST_API } from "./constants";

const MENU_API =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.198909&lng=77.7068926&restaurantId=";

const useRestaurantMenu = (resId) => {

    const [info, setInfo] = useState(null);
    const [menuCards, setMenuCards] = useState([]);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {

        let ignore = false;

        setInfo(null);
        setMenuCards([]);
        setNotFound(false);

        const fetchRestaurant = async () => {

            try {
                // 1. Fetch restaurant listing
                const res = await fetch(RESTAURANT_LIST_API);
                const json = await res.json();

                const restaurants =
                    json?.data?.cards?.[3]?.card?.card
                        ?.gridElements?.infoWithStyle?.restaurants ?? [];

                const match = restaurants.find(
                    (r) => r.info.id === resId
                );

                if (ignore) return;

                if (!match) {
                    setNotFound(true);
                    return;
                }

                setInfo(match.info);

                // 2. Fetch specific restaurant menu
                const menuRes = await fetch(MENU_API + resId);

                if (!menuRes.ok) {
                    throw new Error("Failed to fetch menu");
                }

                const menuJson = await menuRes.json();

                // 3. Extract menu cards
                const cards =
                    menuJson?.data?.cards?.find(
                        (card) => card?.groupedCard
                    )?.groupedCard?.cardGroupMap?.REGULAR?.cards ?? [];

                if (ignore) return;

                setMenuCards(cards);

            } catch (err) {
                console.error("Fetch failed:", err);
            }
        };

        fetchRestaurant();

        return () => {
            ignore = true;
        };

    }, [resId]);

    return { info, menuCards, notFound };
};

export default useRestaurantMenu;
