
import { useContext } from "react";
import { cloudinaryImageUrl } from "../constants";
import UserContext from "../utils/UserContext";

const RestaurentCard = ({ name, cuisines, avgRating, cloudinaryImageId}) => {
  //{restaurent}
  //   const { name, cuisines, stars } = restaurent;
 const {user} = useContext(UserContext);

  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-400">
      <img src={cloudinaryImageUrl + cloudinaryImageId} />
      <h3 className="font-bold text-xl">{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h5>{avgRating} stars</h5>
      <h3 className="font-bold text-xl">{user.name +"-" +user.email }</h3>
    </div>
  );
};

export default RestaurentCard;
