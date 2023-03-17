import { useEffect, useState } from "react";
import { restaurantMenuUrl } from "../constants";

const useRestaurant = (resId) => {

    const [restaurent, setRestaurent] = useState(null);
    useEffect(()=>{
        getRestaurentMenu();
    },[]);
    
    async function getRestaurentMenu() {
       let data = await  fetch(restaurantMenuUrl+resId)
         data = await data.json();
         setRestaurent(data?.data);
         console.log(data?.data?.cards[0]?.card);
         
    }
    return restaurent;

}

export default useRestaurant;