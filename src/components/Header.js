import React from 'react'
import "./Header.css";
import doctorImage from "../assets/images/doctor.png";

const Header = () => {
  return (
    <header className='header'>
        <div className='content'>
            <h1><span>Get Quick</span><br/>Medical Services</h1>
            <p>
                In today's fast-paced world, access to promt and efficient medical services is of paramount importance. When faced with a medical emergency or seeking immediate medical attention, the ability to recive quick medical services can significantly impact the outcome of a situation.
            </p>
            <button className='btn'>Get Services</button>
        </div>
        <img src={doctorImage} alt="Doctor" className="header-image" />
    </header>
  )
}

export default Header;