import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer.jsx";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const IMG_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [info, setInfo] = useRestaurantMenu(resId);

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