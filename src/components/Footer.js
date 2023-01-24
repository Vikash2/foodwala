import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <React.Fragment>
            <div className="footer-container">
                <div className="company-details">
                    <div className="about">
                        <h5>ABOUT</h5>
                        <p>Foodwala.com</p>
                    </div>
                    <div className="contact">
                        <h5>REACH OUT TO US ON</h5>
                        <p>+91-9876543210</p>
                    </div>
                </div>
                <hr />
                <div className="author-details">
                    <p>Made with ♡ in Namaste React</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer;