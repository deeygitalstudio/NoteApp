import React from 'react'
import './Home.css'
import note from '../Assest/notez.jpg'



const Home = () => {
  return (

    <div class="container Home ">
      <div class="row">
        <div class="col-md-6 contt pb-lg-5">
          <h1>Document your <span className='dee'>activites</span>  <br /> with us</h1>
          <p>We can help you take notes of your activites, store them and present it to you whenever you need them</p>
          <a href="/Signup" className="btn-primary btn w3-hide-small">Get Started</a>
        </div>
        <div class="col-md-6 imt pt-lg-5">
          <img src={note} alt="" className='image-fluid' />
           <a href="/Signup" className="btn-primary btn w3-hide-large w3-hide-medium">Get Started</a>
        </div>
      </div>
  
    </div>
  
   
  )
}


export default Home;