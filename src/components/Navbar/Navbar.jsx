import React from 'react'
import './Navbar.css';
import Logo from '/public/images/TravelLogo.png'

export default function Navbar(){
    return(
        <div className="--navbar-navbar-container">
            <img src={Logo} />
            <span>my travel journal</span>
        </div>
    )
}