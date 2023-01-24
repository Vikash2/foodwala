import React from 'react';

const IMG_CDN_URL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"

const MenuItemCard = (items) => {
    console.log(items);
    return (
        <div class="menu-card">
            <div class="card-contents">
                <h4>{items?.name}</h4>
            </div>
            <hr />
        </div>
    )
}

export default MenuItemCard;