import React from 'react';
import './ResturantCard.css';
import { IMG_CDN_URL } from '../Constants';

const ResturantCard = ({ name,
    cuisines,
    cloudinaryImageId,
    avgRating }) => {

    return (
        <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
            <div className="card-contents">
                <h4>{name}</h4>
                <h5>{avgRating}</h5>
                <h6>{cuisines.join(',')}</h6>
            </div>
        </div>
    )
}

export default ResturantCard;