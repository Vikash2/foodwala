import React from 'react';
import './ResturantCard.css';

const IMG_CDN_URL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"

const ResturantCard = ({ name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString }) => {

    console.log(IMG_CDN_URL + cloudinaryImageId);

    return (
        <div class="card">
            <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
            <div class="card-contents">
                <h4><b>{name}</b></h4>
                <p>{cuisines.join(',')}</p>
                <p>{lastMileTravelString}</p>
            </div>
        </div>
    )
}

export default ResturantCard;