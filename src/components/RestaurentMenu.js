import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { cloudinaryImageUrl } from "../constants";
import { addItem } from "../utils/cartSlice";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
const RestaurentMenu = () => {
    const {resId} = useParams();

    const restaurent = useRestaurant(resId);
    console.log(restaurent);
    const dispatch = useDispatch();

    const handleAddItem = () => {
        dispatch(addItem("grapes"));
    }
    return restaurent == null ? <Shimmer/> : (
        <div className="menu">
            <h1>{restaurent?.cards[0]?.card?.card.info?.name} Menu</h1>
            <img src={cloudinaryImageUrl+restaurent?.cards[0]?.card?.card.info?.cloudinaryImageId} />  
            <button className="bg-green-100 p-3 m-4" onClick={() => {
                handleAddItem();
            }}>Add Item</button>
            </div>
    )
}

export default RestaurentMenu;