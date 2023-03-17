import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cloudinaryImageUrl } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
const RestaurentMenu = () => {
    const {resId} = useParams();

    const restaurent = useRestaurant(resId);

    return restaurent == null ? <Shimmer/> : (
        <div className="menu">
            <h1>{restaurent?.cards[0]?.card?.card.info?.name} Menu</h1>
            <img src={cloudinaryImageUrl+restaurent?.cards[0]?.card?.card.info?.cloudinaryImageId} />  
            </div>
    )
}

export default RestaurentMenu;