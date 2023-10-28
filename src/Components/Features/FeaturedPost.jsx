import React from 'react'
import feat from "../Assest/18493586_5994306.jpg"
import './Feature.css'

const FeaturedPost = () => {
  return (
    <div className='container feat'>
      <div className="row">
      <div className="col-md-6">
        <h1>Ready For Our <span className='dee'>Features?</span> </h1>
        <p>We will be introducing amazing features in our <span className='dee'>NoteApp</span> such as Todo, Calender, News, Blog and everything that can make you have a seamless experience.  </p>
      </div>
      <div className="col-md-6">
       <img src={feat} alt="" />
      </div>
      </div>
    </div>
  )
}

export default FeaturedPost
