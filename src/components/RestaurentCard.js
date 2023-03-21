import { cloudinaryImageUrl } from "../constants";

const RestaurentCard = ({ name, cuisines, avgRating, cloudinaryImageId}) => {
  //{restaurent}
  //   const { name, cuisines, stars } = restaurent;
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-400">
      <img src={cloudinaryImageUrl + cloudinaryImageId} />
      <h3 className="font-bold text-xl">{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h5>{avgRating} stars</h5>
    </div>
  );
};

export default RestaurentCard;
