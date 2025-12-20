import React from 'react'
import { Bookmark } from 'lucide-react';
const Card = ({logo,company,date,post,tag1,tag2,pay,location}) => {
  return (
    <>
    <div className='main'>
        <div className="top">
          <img src={logo} alt="" />
          <button>Save <Bookmark size={14}/></button>
        </div>
        <div className="mid">
          <span><h2>{company}</h2> <p>{date}</p></span>
          <h2>{post}</h2>
          <div className="btn">
            <button>{tag1}</button>
            <button>{tag2}</button>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <h2>{pay}</h2>
            <p>{location}</p>
          </div>
          <div className="right">
            <button>Apply Now</button>
          </div>
        </div>
     </div>
    </>
  )
}

export default Card;
