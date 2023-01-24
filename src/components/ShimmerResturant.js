import React from 'react'

const ShimmerResturant = () => {
    return (
        <React.Fragment>
            <div className="resturant-container-shimmer">
                <div className="resturant-shimmer">
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

export default ShimmerResturant