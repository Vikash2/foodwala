import React from 'react';

import './ShimmerResturant.css';

const ShimmerResturant = () => {
    return (
        <React.Fragment>
            <div className="resturant-shimmer-container">
                <div className="resturant-shimmer-banner">
                    <div className="resturant-line"></div>
                    <div className="resturant-line"></div>
                    <div className="resturant-line"></div>
                    <div className="resturant-line"></div>
                </div>
                <div className="resturant-contents">
                    <div className="menu-title-shimmer">
                        <div className="resturant-line"></div>
                    </div>
                    <div className="menu-details">
                        <div className="resturant-line"></div>
                        <div className="resturant-line"></div>
                        <div className="resturant-line"></div><div className="resturant-line"></div><div className="resturant-line"></div><div className="resturant-line"></div>
                        <div className="resturant-line"></div>
                        <div className="resturant-line"></div>

                    </div>
                    <div className="cart">
                        <div className="resturant-line"></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ShimmerResturant;