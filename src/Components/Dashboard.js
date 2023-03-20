import {useRef} from "react"
import React from "react";
import {FaBars, FaTimes} from "react-icons/fa";     //Fa = Font Awesome
import "../Styles/main.css"; 
import { Link } from "react-router-dom"
 
function Navbar(){
    const navRef = useRef();        //refers to the below nav tag
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")       //so each time this function is called, this classname "" is either removed or added from the classlist
    }
    
    return (
        <header>
            <h3>Whats the Plan?</h3>
            <nav ref={navRef}>
                <Link to="/">Dashboard</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/calendar">Calendar</Link>
                <Link to="/profile">Profile</Link>
                <button className = "nav-btn nav-close-btn" onClick = {showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className = "nav-btn" onClick = {showNavbar}>   {/*can have the same onClick on both buttons cuz they arent shown at the same time */}
                <FaBars/>
            </button>
        </header>
    );
}

export default Navbar;