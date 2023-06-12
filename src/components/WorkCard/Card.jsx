import React from 'react'
import "./WorkCard.css"
import WorkCard from './WorkCard'
import WorkCarData from './WorkCardData'
import Footer from '../Footer/Footer'

const Card = ({props}) => {
  return (
    <div className='workContainer'>
       <h1 className='projectHeading'> projects</h1>
       <div className="projectContainer">
       {WorkCarData.map((val,ind)=>{
        return(
          <WorkCard key={ind}
          img={val.img}
          title={val.title}
          text={val.text}
          link={val.link}/>
        )
       })}
       </div>

    </div>
  )
  }

export default Card