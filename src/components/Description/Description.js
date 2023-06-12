import './Description.css';
import React from 'react'
import { Link,NavLink } from 'react-router-dom';
import image from '../../assets/img.jpg'
import background from '../../assets/background.jpg'
const Description = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('MariyaResume5.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'MariyaResume5.pdf';
            alink.click();
        })
    })
}
  return (
    <div className="description">
      <div className="mask">
         <img className="background" src={background} alt="background image" />
      </div>
       <div className="content">
        <div className="flex">
         <div className="des">
         <p>Hey! I am Mariya Icchawarwala <strong> Web Developer, React Developer </strong></p>
         <div className="project">
         <Link to="/project" className="btn btn-light">Projects</Link>
         </div>
         </div>
         <img className="image" src={image} alt="image" />
         </div> 
         <div className="visit">
            <p className='downloadPara'> Download resume</p>
            <div className="btn btn-light download"  onClick={onButtonClick}> Download</div>
         </div>
        </div>         
    </div>
  )
}

export default Description
