import React from 'react';
import logo from '../../images/logo.jpeg';
import './Header.css'
const Header = () => {
    return (

    
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <h1>Make Your Concert Team with <span style={{color: "orangered"}}>Legendary Bands!</span></h1>
            <h2>Maximum Budget: 10M</h2>
        </div>
    );
};

export default Header;