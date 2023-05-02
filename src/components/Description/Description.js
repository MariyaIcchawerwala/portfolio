import './Description.css';
import React from 'react'
import { Link } from 'react-router-dom';
import image from '../../assets/img.jpg'
import background from '../../assets/background.jpg'
const Description = () => {
  return (
    <div className="description">
      <div className="mask">
         <img className="background" src={background} alt="background image" />
      </div>
       <div className="content">
         <div className="des">
         <p>Hey! I am Mariya Icchawarwala <strong> Web Developer, React Developer </strong></p>
         <div className="project">
         <Link to="/project" className="btn btn-light">Projects</Link>
         </div>
         </div>
         <img className="image" src={image} alt="image" />
       </div>
       
    </div>
  )
}

export default Description
