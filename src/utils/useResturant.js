import { useState, useEffect } from 'react';
import { FETCH_RESTURANT_URL } from '../Constants';

const useResturant = (resId) => {

    const [resturant, setResturant] = useState();

    async function getResturantData() {
        const response = await fetch(FETCH_RESTURANT_URL + resId);
        const data = await response.json();
        setResturant(data);
    }

    useEffect(() => {
        getResturantData();
    }, [])

    return resturant;

}

export default useResturant;
