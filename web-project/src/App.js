import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from './Components/LandingPage'
import HomePage from './Components/HomePage'
import Post from './Components/Post'
import UserHome from './Components/UserHome';

function App() {
  return (
   
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="userhome" element={<UserHome></UserHome>}></Route>
          {/*<Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          
  <Route path="*" element={<NoPage />} />*/}
        </Route>
      </Routes>
    </BrowserRouter>
    /*
    <div className="App">
      <LandingPage/>
        
    </div>*/

 );
}

export default App;
