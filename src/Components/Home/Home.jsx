import React from 'react'
import './Home.css'
import note from '../Assest/notez.jpg'
import { Link} from 'react-router-dom';



const Home = () => {
  return (

    <div class="container Home ">
      <div class="row">
        <div class="col-md-6 contt pb-lg-5">
          <h1>Document your <span className='dee'>activites</span>  <br /> with us</h1>
          <p>We can help you take notes of your activites, store them and present it to you whenever you need them</p>
          <Link to="/Signup" className="btn-primary btn w3-hide-small">Get Started</Link>
        </div>
        <div class="col-md-6 imt pt-lg-5">
          <img src={note} alt="" className='image-fluid' />
           <Link to="/Signup" className="btn-primary btn w3-hide-large w3-hide-medium">Get Started</Link>
        </div>
      </div>
  
    </div>
  
   
  )
}


export default Home;