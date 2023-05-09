import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import background from "../../assets/background.jpg";

import "./About.css";
import {
  FaCss3,
  FaGit,
  FaGitlab,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import{
  SiSpringboot
} from "react-icons/si"

const About = () => {


  return(
    <div>
      <Navbar />
      <div className="about">
        <div className="mask">
          <img className="background" src={background} alt="background image" />
        </div>
        <div className="intro card section">
          <h3 className="title">About Me</h3>
          <p className="para">
            Hello again! Thanks for scrolling this far. I am a web Developer
            with good knowledge and professional expirience in React. Currently
            i am working as react developer on a live project with a freelancing
            team. Along with good knowledge of frontend technologies I also have
            my hands on backend technologies such as java, springboot,javascript
            and node js as i have training as a software developer intern in
            java in Indore at GoodVibes Placement services.
          </p>
        </div>
        <div className="skills card ">
          <h3 className="title">My ToolKit</h3>
        <div className="grid">

          <div className="tool">
            <FaReact size={35} className="icons" /> <p >React Js </p>
          </div>

          <div className="tool">
            <FaHtml5 size={35} className="icons" /> <p >HTML5 </p>
          </div>

          <div className="tool ">
            <FaCss3 size={35} className="icons" /> <p >Css3 </p>
          </div>

          <div className="tool ">
            <FaJava size={35} className="icons" /> <p >Java </p>
          </div>
          
            <div className="tool ">
              <FaNodeJs size={35}  className="icons"/> <p >Node JS </p>
            </div>
            <div className="tool ">
              <FaJs size={35} className="icons" /> <p >Java Script </p>
            </div>
         
          <div className="tool ">
            <FaGitlab size={35} className="icons" /> <p>GitLab </p> 
          </div>  

          <div className="tool ">
            <SiSpringboot size={35} className="icons" /> <p>SpringBoot </p> 
          </div> 
 
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
