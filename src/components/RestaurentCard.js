import { cloudinaryImageUrl } from "../constants";

const RestaurentCard = ({ name, cuisines, avgRating, cloudinaryImageId}) => {
  //{restaurent}
  //   const { name, cuisines, stars } = restaurent;
  return (
    <div className="card">
      <img src={cloudinaryImageUrl + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating} stars</h5>
    </div>
  );
};

export default RestaurentCard;
