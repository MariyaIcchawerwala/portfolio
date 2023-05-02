import "./Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {
    const[navClick ,setNavClick] = useState(false);
    const handleClick =()=> {
        setNavClick(!navClick)
    }
  return (
    <div className="header">
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
     <ul className={navClick?"nav active":"nav"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
     
      <div className="hamburger" onClick={handleClick}>
          {navClick?<FaTimes size={20} style={{color:'white'}}/>:<FaBars size={20} style={{color:'white'}} />}
      </div>
    </div>
  );
};

export default Navbar;
