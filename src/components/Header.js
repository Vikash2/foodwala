import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../images/logo.png';

const Title = () => {
    return (
        <Link to='/home'>
            <img className='logo' src={Logo} alt='FoodWala' />
        </Link>
    );
}

const Header = () => {
    return (
        <header className="header">
            <Title />
            <ul className='nav-items'>
                <Link to="/home" className='nav-link'>
                    <li>HOME</li>
                </Link>
                <Link to="/about" className='nav-link'>
                    <li>ABOUT</li>
                </Link>
                <Link to="/contact" className='nav-link'>
                    <li>CONTACT US</li>
                </Link>
                <Link to="/home" className='nav-link'>
                    <li>CART</li>
                </Link>
            </ul>
        </header>
    )

};

export default Header;