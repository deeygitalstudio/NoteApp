import React, {  useState,  } from 'react';
import firebase from "../Firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from 'firebase/database';
import './Sign.css';
import {useNavigate} from 'react-router-dom'
import sig from '../Assest/sig.jpg'
import { Link} from 'react-router-dom';


const Signup = () => {
  let navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const auth = getAuth(firebase); // Initialize Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password); // Create a new user with email and password

      // If the user is created successfully, store additional information in Realtime Database
      const user = userCredential.user;
      const db = getDatabase(firebase);

      await set(ref(db, 'users/' + user.uid), {
        name: name,
        email: email,
        password: password,
      });
      // Signup successful), handle any additional actions (e.g., redirect)
     

      alert('User created successfully');
      navigate('/Login')
   
    } catch (error) {
      console.error('Error signing up:', error.message);
      alert(error.message);
      // Haandle signup error (e.g., show error message to the user)
    }
  };



  return (
 
        <div className="container Logins">
          <div className="row">
            <div className="col-md-6">
              <img src={sig} className="image-fluid" alt="" />
            </div>

            <div className="col-md-6 .contss">
              <h2 className="text-center mb-3">Register</h2>
              <form action="" className="box" method="">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="password" placeholder="Password" />
                </div>


     <p class="text-center">Already have an account <span><Link href="/Login">Login</Link></span></p>

             

                <button className="form-control btn btn-primary mt-3" id="log" onClick={handleSignup}>Register</button>
              </form>
            </div>
          </div>
        </div>

  )
}

export default Signup;