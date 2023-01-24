import React, { useEffect, useState } from 'react'
import ResturantCard from './ResturantCard';
import './Body.css';
import { Link } from 'react-router-dom';
import ShimmerBody from './ShimmerBody';

const filterResturants = (searchTxt, allResturants) => {
    console.log(allResturants);

    const filterData = allResturants.filter((restaurant) =>
        restaurant?.data?.name?.toLowerCase()?.includes(searchTxt.toLowerCase())
    );
    console.log(filterData);
    return filterData;
}

const Body = () => {

    const [searchText, setSearchText] = useState("");
    const [allResturantList, setAllResturantList] = useState([]);
    const [filterResturanList, setFilterResturanList] = useState([]);

    useEffect(() => {
        getResturantList();
    }, []);

    const getResturantList = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json); 
        setAllResturantList(json?.data?.cards[2]?.data?.data.cards);
        setFilterResturanList(json?.data?.cards[2]?.data?.data.cards);
        // console.log(allResturantList);
    }
    /** Early Return */
    if (!allResturantList) return null;


    return allResturantList.length === 0 ? (<ShimmerBody />) : (<React.Fragment>
        <div className="container">
            <div className="search">
                <input type="text" placeholder='Search for resturants' value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                <button
                    onClick={() => {
                        const data = filterResturants(searchText, allResturantList);
                        setFilterResturanList(data);
                    }}
                >Search</button>
            </div>
            <div className="restaurant-list">
                {filterResturanList.map((resturant) => (
                    <Link to={'/resturant/' + resturant?.data?.id} key={resturant?.data?.id}>
                        <ResturantCard {...resturant.data} key={resturant?.data?.id} />
                    </Link>
                ))}
            </div>
        </div>
    </React.Fragment>
    )


}

export default Body;