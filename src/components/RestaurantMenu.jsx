import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer.jsx";
import { RESTAURANT_LIST_API } from "../utils/constants";

const IMG_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [info, setInfo] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setInfo(null);
    setNotFound(false);
    fetchRestaurant();
  }, [resId]);

  const fetchRestaurant = async () => {
    try {
      const data = await fetch(RESTAURANT_LIST_API); // no + resId
      const json = await data.json();

      const restaurants =
        json?.data?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ?? [];

      const match = restaurants.find((r) => r.info.id === resId);

      if (match) setInfo(match.info);
      else setNotFound(true);
    } catch (err) {
      console.error("Fetch failed:", err);
      setNotFound(true);
    }
  };

  if (notFound) return <h2>Restaurant not found</h2>;
  if (!info) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwo,
    avgRating,
    totalRatingsString,
    areaName,
    locality,
    sla,
    cloudinaryImageId,
  } = info;

  return (
    <div className="menu">
      <img src={IMG_URL + cloudinaryImageId} alt={name} width="300" />
      <h1>{name}</h1>
      <p>{cuisines?.join(", ")}</p>
      <p>
        ⭐ {avgRating} ({totalRatingsString}) • {costForTwo}
      </p>
      <p>
        {locality}, {areaName}
      </p>
      <p>Delivery in {sla?.deliveryTime} mins</p>
    </div>
  );
};

export default RestaurantMenu;