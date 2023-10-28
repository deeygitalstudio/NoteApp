import React, { useState} from 'react';
import firebase from '../Firebase'
import './Navbar.css';
import notesImage from '../Assest/notes.png';
import { Link, useLocation} from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';


 const Navbar = () => {
   const [userEmail, setUserEmail] = useState(null);

  const location = useLocation();
  const showButtons = location.pathname === '/NoteApp';
  const renderSearchInput = location.pathname !== '/NoteApp' && location.pathname !== '/Signup' && location.pathname !== '/Login' && location.pathname !== '/Features' && location.pathname !== '/Blog';
  const auth = getAuth(firebase);
  let navigate = useNavigate();


   onAuthStateChanged(auth, (user) => {
    if (user) {

    const userEmail = user.email; // Get the user's name
   
    
    setUserEmail(userEmail);

    } else {
      // User is signed out
    }
  });

    const handleSignOut = () => {
    const auth = getAuth(); // Get the authentication instance
    signOut(auth)
      .then(() => {
         alert('User Signed out successfully');
        // Sign-out successful.
           navigate('/NoteApp')
      })
      .catch((error) => {
        // An error occurred during sign-out.
        console.error(error);
      });
  };


  

  return (
    <nav className="navbar navbar-expand-lg navbar-light  bg-light">
  <div className="container-fluid">
 
        <Link to="/NoteApp" className="navbar-brand" ><h1>No<span className='dee'>tes</span><img src={notesImage} alt="" /></h1></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-link"><Link to="/NoteApp" className="">Home</Link></li>
        <li className="nav-link">
          <a href="/Features">Features</a>
        </li>
    
        <li className="nav-link">
          <a href="/Blog">Blog</a>
        </li>
      </ul>
      <form className="d-flex" mx-auto role="search">
          {showButtons && (
  <div>
     <Link to="/Signup" className="btn btn-primary ">Sign up</Link>
  <Link to="/Login" className="btn btn-outline-primary mx-2">Login</Link>
  </div>
)}
    
           {renderSearchInput && (
        <div className='d-flex justify-content-between  mx-1'>
   
<button type="button" className="btn btn-primary mx-4" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover"> {userEmail} <i className='fa fa-user' style={{ cursor: "pointer" }}></i></button> 
<button type="button" className="btn btn-outline-primary position-relative" onClick={handleSignOut}>Signout</button>

 
        
              </div>
      )} 
       
      </form>
    </div>
  </div>
</nav>
  )
}


export default Navbar;

