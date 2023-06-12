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
  
  const[size ,setSize] = useState(50);

  const [width, setWidth] = React.useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });

  useEffect(() => {
    if(width<=1000){
      setSize(35)
    }
    else{
      setSize(50)
    }
  });
  
  return(
    <div>
      <Navbar />
      <div className="about">
        <div className="back">
          <img className="backgroundImage" src={background} alt="background image" />
        </div>
        <div className="intro card section">
          <h3 className="title">About Me</h3>
          <p className="para">
            Hello again! i am a web developer and a motivated individual with in-depth knowledge of Programming languages and development tools,Along with good knowledge of frontend technologies I also have my hands on backend technologies such as java, springboot,javascript and node js  Currently i am working as a freelancer react developer on a live project and looking forward to contribute  with strong skill set, while having the scope to develop my own skills
          </p>
        </div>
        <div className="skills card ">
          <h3 className="title">My ToolKit</h3>
        <div className="grid">

          <div className="tool">
            <FaReact size={size} className="icons" /> <p >React Js </p>
          </div>

          <div className="tool">
            <FaHtml5 size={size} className="icons" /> <p >HTML5 </p>
          </div>

          <div className="tool ">
            <FaCss3 size={size} className="icons" /> <p >Css3 </p>
          </div>

          <div className="tool ">
            <FaJava size={size} className="icons" /> <p >Java </p>
          </div>
          
            <div className="tool ">
              <FaNodeJs size={size}  className="icons"/> <p >Node JS </p>
            </div>
            <div className="tool ">
              <FaJs size={size} className="icons" /> <p >Java Script </p>
            </div>
         
          <div className="tool ">
            <FaGitlab size={size} className="icons" /> <p>GitLab </p> 
          </div>  

          <div className="tool ">
            <SiSpringboot size={size} className="icons" /> <p>SpringBoot </p> 
          </div> 
 
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
