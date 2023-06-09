import "./Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {
    const[navClick ,setNavClick] = useState(false);
    const handleClick =()=> {
        setNavClick(!navClick)
    }

    const[color ,setColor] = useState(false);
    const changeColor =() =>{
      if(window.scrollY>=100){
        setColor(true)
      }else{
        setColor(false)
      }
    }

  window.addEventListener("scroll",changeColor);

  return (
    <div className={color?"header header-bg":"header"}>
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

      </ul>
     
      <div className="hamburger" onClick={handleClick}>
          {navClick?<FaTimes size={20} style={{color:'white'}}/>:<FaBars size={20} style={{color:'white'}} />}
      </div>
    </div>
  );
};

export default Navbar;
