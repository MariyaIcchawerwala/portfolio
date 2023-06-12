import React from 'react'
import "./WorkCard.css"
import { NavLink } from 'react-router-dom'


const WorkCard = (props) => {
  return (
    <>
  
        <div className="projectCard">
            <img src={props.img} alt="project" />
            <h2 className='projectTitle'>{props.title}</h2>
            <div className='projectDetails' >
                <p style={{color:'black'}}>{props.text}</p>
                <div className="proBtn">
                    <NavLink to={props.link} className="source" style={{color:'black'}}> View Source</NavLink>
                </div>
            </div>
        </div>
    </>
  )
}

export default WorkCard
