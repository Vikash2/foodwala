import React from 'react'
import './ShimmerBody.css';

const ShimmerBody = () => {
    return (
        <React.Fragment>
            <div className="body-shimmer-container">
                <div className="body-shimmer-search">
                    <div className="dummy-search">
                    </div>
                </div>
                <div className="body-shimmer-resturant-list">
                    {Array(10)
                        .fill("")
                        .map((e, index) => (
                            <div key={index} className="shimmer-card">
                                <div class="line"></div>
                                <div class="line"></div>
                            </div>
                        ))}
                </div>
            </div>
        </React.Fragment>
    )
}

export default ShimmerBody