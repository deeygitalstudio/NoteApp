import React, {useState} from 'react'
import firebase from "../Firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './LoginPage.css'
import sign2 from '../Assest/sign2.jpg'
import {useNavigate} from 'react-router-dom'

 const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sign in with Firebase authentication
      const auth = getAuth(firebase)
      await signInWithEmailAndPassword(auth, email, password);

      // If successful, the user is now authenticated
      alert('User Logged in successfully');
      navigate('/Notes')
      console.log('Login successful');
    } catch (error) {
      // Handle login error
      alert('Login error: ' + error.message)
      console.error('Login error:', error.message);
    }

    // Clear the form fields after submitting
    setEmail('');
    setPassword('');

  };

  return (
    

    <div className="container Loginss">
      <div className="row">
        <div className="col-md-6">
          <img src={sign2} className="image-fluid" alt="img" />
         </div>

        <div className="col-md-6 contse">
          <h2 className="text-center mb-3">Login Page</h2>
          <form action="" className="box" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" class="form-label">Email</label>
                <input type="email" value={email} onChange={handleEmailChange} className="form-control" id="email" placeholder="Enter your email" />
              </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" class="form-label">Password</label>
                <input type="password" value={password} onChange={handlePasswordChange} className="form-control" id="password" placeholder="password" />
              </div>

     <p class="text-center">Don't have an account <span><a href="/Signup">Sign up</a></span></p>

             
    
              <input type="submit" value="Login" className="form-control btn btn-primary mt-3" id="btn" />
        </form>

        </div>
      </div>
      </div>

  
   
  
  
 

  )
}

export default Login;