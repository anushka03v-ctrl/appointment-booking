import React from "react";
import "./Navbar.css";

function Navbar({ toggleTheme, darkMode }) {
  return (
    <div className="outer_navbar">
        <nav>
            <div className="logo">
                MediCare
            </div>
            <ul className="nav-links">
                <li><a href="/home">Home</a></li>
                <li><a href="/doctors">Find Doctors</a></li>
                <li><a href="/book_appointment">Book Appointment</a></li>
                <li><a href="/my_appointments">My Appointments</a></li>
                <li><a href="/contact">Contact US</a></li>
            </ul>
            <button className="theme-btn" onClick={toggleTheme}>
                {darkMode ? "☀ Light" : "🌙 Dark"}
            </button>
            <button className="register-btn">
                Register Now
            </button>
        </nav>
    </div>
  );
}

export default Navbar;