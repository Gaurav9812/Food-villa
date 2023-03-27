import RestaurentCard from "./RestaurentCard";
import { RestaurentList } from "../constants";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  //This is how we create variable in React
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurents, setAllRestaurents] = useState([]);
  const [filteredRestaurents, setFilteredRestaurents] = useState([]);

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getRestaurents();
  }, []);

  async function getRestaurents() {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6862738&lng=77.2217831&page_type=DESKTOP_WEB_LISTING"
    );
    data = await data.json();
    let len = data.data.cards.length;
    setAllRestaurents(data?.data?.cards[len - 1].data?.data?.cards);
    setFilteredRestaurents(data?.data?.cards[len - 1].data?.data?.cards);
  }

  const online = useOnline();

  if (!online) {
    return <h1>offline, Please check your Internet Connection</h1>;
  }

  //  Early Return
  if (!allRestaurents) return null;

  return allRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-pink-50 my-5">
        <input
          type="text"
          data-testid="search-btn"
          placeholder="Search"
          value={searchInput}
          className="p-2 m-3 focus:bg-gray-600"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="bg-pink-400 p-2 rounded-lg hover:bg-gray-400"
          onClick={() => {
            let data = filterData(searchInput, allRestaurents);
            console.log(data);
            setFilteredRestaurents(data);
          }}
        >
          Search
        </button>
        <input
          value={user.name}
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
        />
        <input
          value={user.email}
          onChange={(e) => {
            setUser({
              ...user,
              email: e.target.value,
            });
          }}
        />
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurents.length === 0 ? (
          <h1>No restaurent matched your filter</h1>
        ) : (
          filteredRestaurents.map((restaurent) => {
            return (
              <Link
                to={"/restaurent/" + restaurent.data.id}
                key={restaurent.data.uuid}
              >
                <RestaurentCard {...restaurent.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
