import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MenuItemCard from './MenuItemCard';
import MenuItems from './MenuItemCard';
import './ResturantMenu.css';
import ShimmerResturant from './ShimmerResturant';

const IMG_CDN_URL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"

const ResturantMenu = () => {

    const { resId } = useParams();
    console.log(resId);

    const [resturant, setResturant] = useState(null);

    useEffect(() => {
        getResturantData();
    }, [])

    async function getResturantData() {
        const response = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" + resId);

        const data = await response.json();
        setResturant(data);
    }

    console.log(resturant?.data.menu.items);
    return (
        <React.Fragment>
            <div className="resturant-container">
                <div className="resturant">
                    <img src={IMG_CDN_URL + resturant?.data?.cloudinaryImageId} />
                    <div className='resturant-details'>
                        <div className='resturant-info'>
                            <h2>{resturant?.data?.name}</h2>
                            <p>{resturant?.data?.cuisines.join(',')}</p>
                            <p>{resturant?.data?.locality} {resturant?.data?.area},{resturant?.data?.city}</p>
                        </div>
                        <div className="resturant-satistics">
                            <div className="rating">
                                <h3>
                                    {resturant?.data?.avgRating}
                                </h3>
                                <p>{resturant?.data?.totalRatingsString}</p>
                            </div>
                            <div className='delivery'>
                                <h3>
                                    {resturant?.data?.sla.deliveryTime} mins
                                </h3>
                                <p>Delivery Time</p>
                            </div>
                            <div className='cost'>
                                <h3>
                                    {resturant?.data?.avgRating * 100}
                                </h3>
                                <p>Cost for two</p>
                            </div>
                        </div>
                    </div>
                    <div className='resturant-offers'>
                        <h3>
                            OFFERS
                        </h3>
                        <ul className="offer-details">
                            <li>60% off up to ₹100 | Use code WELCOMEBACK</li>
                            <li>20% off up to ₹120 | Use FEDERALCC Above ₹249</li>
                        </ul>
                    </div>
                </div>
                <div className='resturant-menu-details'>
                    <div className="menu-title">
                        <h1>Menu</h1>
                    </div>
                    <div className="menu-items">
                        <ul>
                            {(resturant?.data.menu.items) && Object.values(resturant?.data.menu.items).map((items) => (
                                <MenuItemCard key={items.id} {...items} />
                            ))}
                        </ul>
                    </div>
                    <div className="cart-details">
                        <h1>Cart Empty</h1>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ResturantMenu;