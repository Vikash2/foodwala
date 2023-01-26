import { useEffect, useState } from 'react';

const useBody = () => {

    const [allResturantList, setAllResturantList] = useState([]);
    const [filterResturanList, setFilterResturanList] = useState([]);

    useEffect(() => {
        getResturantList();
    }, []);

    const getResturantList = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setAllResturantList(json?.data?.cards[2]?.data?.data.cards);
        setFilterResturanList(json?.data?.cards[2]?.data?.data.cards);
    }

    return ({ allResturantList, filterResturanList });
}

export default useBody;