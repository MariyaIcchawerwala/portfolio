import React from "react";
import "./Project.css"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import background from "../../assets/background.jpg";
import Card from "../../components/WorkCard/Card";
import { FaAngleDown } from 'react-icons/fa';

const Project = () => {
  return (
    <>
      <Navbar />
       <div className="projects">
      <div className="cover">
         <img className="background" src={background} alt="background image" />
      </div>
       <div className="cont">
       <div className="container">
          <Card/>
       </div>
       <div className="scroll">
        scroll down <FaAngleDown className="down"/>
       </div>
          
       </div>
       
    </div>
    <Footer/>
  
    </>
  );
};

export default Project;
