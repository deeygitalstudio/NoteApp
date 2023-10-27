import './App.css';
import './w3.css';
import './index.css';
import './style.css';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Notes from './Pages/Notes';
import Homepage  from './Pages/Homepage';
import Features  from './Pages/Features';
import Blog  from './Pages/Blog';
import Navbar from './Components/Navbar/Navbar';
function App() {

  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
       <Route exact path="/" element={<Homepage />} />
       <Route path="/Signup" element={<Signup />} />
       <Route path="/Login" element={<Login />} />
       <Route path="/Notes"  element={<Notes  />} />
       <Route path="/Features"  element={<Features  />} />
       <Route path="/Blog"  element={<Blog  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
