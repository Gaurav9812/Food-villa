import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cloudinaryImageUrl } from "../constants";
import Shimmer from "./Shimmer";
const RestaurentMenu = () => {
    const {resId} = useParams();
    const [restaurent, setRestaurent] = useState(null);
    useEffect(()=>{
        getRestaurentMenu();
    },[]);
    
    async function getRestaurentMenu() {
       let data = await  fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6862738&lng=77.2217831&restaurantId="+resId)
         data = await data.json();
         setRestaurent(data?.data);
         console.log(data?.data?.cards[0]?.card);
         
    }

    return restaurent == null ? <Shimmer/> : (
        <div className="menu">
            <h1>{restaurent?.cards[0]?.card?.card.info?.name} Menu</h1>
            <img src={cloudinaryImageUrl+restaurent?.cards[0]?.card?.card.info?.cloudinaryImageId} />
          
            </div>
    )
}

export default RestaurentMenu;