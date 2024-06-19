import React from 'react'
import BgImg from "./assets/NetflixLandingBackGround.jpg"
import Logo from "./assets/Netflix_2015_logo.svg"
import LandingMain from './LandingMain'

function Landing() {
    return (
        <div className='Landing'>
            <img className='BgImg' src={BgImg} alt="Background Image" />
            <div className='Header'>
                <img src={Logo} alt="" />
                <button className='SignInBtn'>Sign In</button>
            </div>
            <LandingMain />
        </div>
    )
}

export default Landing;

