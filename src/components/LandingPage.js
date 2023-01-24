import React from 'react'
import { Link } from 'react-router-dom';
import './LandingPage.css';
import Hero from '../images/foodwala.png'
import Wrap from '../images/wrapblue.png'
import Veggies from '../images/veggies.png'
import Hamburger from '../images/Hamburger-pana.png';

const LandingPage = () => {
    return (
        <React.Fragment>
            <div className="landing-container">
                <div className="hero">
                    <div className="reg-form">
                        <label htmlFor="">PHONE NUMBER</label>
                        <input type='number' />
                        <label htmlFor="">NAME</label>
                        <input type='text' />
                        <label htmlFor="">EMAIL</label>
                        <input type='email' />
                        <Link to='/home'>
                            <button type='submit'> LOGIN</button>
                        </Link>

                    </div>
                    <div className="hero-img">
                        <img src={Hero} alt='Foodwala' />
                    </div>
                </div>
                <div className="services">
                    <div className="services-img">
                        <img src={Wrap} alt='warp' />
                    </div>
                    <div className="services-img">
                        <img src={Hamburger} alt='Hamburger' />
                    </div>
                    <div className="services-img">
                        <img src={Veggies} alt='Veggies' />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LandingPage;