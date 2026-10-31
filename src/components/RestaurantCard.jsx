const RestaurantCard = ({resObj}) => {
    const { info: { name, cloudinaryImageId, cuisines, avgRating, costForTwo, areaName } } = resObj;
    return (
        <div className="m-4 p-4 w-50 hover:border-2 border-blue-400 shadow-2xl rounded-4xl" style={{backgroundColor: "#f0f0f0"}}>
                <img
                className="rounded-4xl"
                alt={name}
                src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}
            />

        <h3 className="font-bold">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{areaName}</h4>
        </div>
    );
};

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="relative m-4">
            <label className="absolute top-2 left-6 z-10 font-bold font-sans bg-black text-white rounded-4xl m-2 p-1">Recommended</label>
            <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;