import RestaurentCard from "./RestaurentCard";
import { RestaurentList } from "../constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
function filterData(searchInput, restaurents) {
  return restaurents.filter((restaurent) =>{
  return restaurent?.data?.name?.toLowerCase().includes(searchInput.toLowerCase());
    }  );
}

const Body = () => {
  //This is how we create variable in React
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurents, setAllRestaurents] = useState([]);
  
  const [filteredRestaurents, setFilteredRestaurents] = useState([]);

  useEffect(()=>{
      getRestaurents();
  },[]);

  async function getRestaurents(){
    let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6862738&lng=77.2217831&page_type=DESKTOP_WEB_LISTING");
    data = await data.json();
    setAllRestaurents(data?.data?.cards[2].data?.data?.cards);
    setFilteredRestaurents(data?.data?.cards[2].data?.data?.cards);
  }

  //  Early Return
  if(!allRestaurents) return null;

  return (allRestaurents.length === 0) ? <Shimmer /> : (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            let data = filterData(searchInput, allRestaurents);
            console.log(data);
            setFilteredRestaurents(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurent-list">
        {
        filteredRestaurents.length === 0 ? <h1>No restaurent matched your filter</h1> :
        filteredRestaurents.map((restaurent) => {
          return <Link to={"/restaurent/" + restaurent.data.id} key={restaurent.data.uuid}>
            <RestaurentCard  {...restaurent.data} />
            </Link>;
        })}
      </div>
    </>
  );
};

export default Body;
