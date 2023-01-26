import React, { useEffect, useState } from 'react'
import ResturantCard from './ResturantCard';
import './Body.css';
import { Link } from 'react-router-dom';
import ShimmerBody from './ShimmerBody';
import useBody from '../utils/useBody';

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
    const { allResturantList, filterResturanList } = useBody();

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