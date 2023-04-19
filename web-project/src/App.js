import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from './Components/LandingPage'
import HomePage from './Components/HomePage'
import Post from './Components/Post'
import UserHome from './Components/UserHome';
import CompanyHome from './Components/CompanyHome';
import UserPublicProfilePage from './Components/UserPublicProfilePage';
import CompanyPublicProfilePage from './Components/CompanyPublicProfilePage';
import UserPrivateProfilePage from './Components/UserProfilePrivatePage';
import CompanyPrivateProfilePage from './Components/CompanyPrivateProfilePage';

function App() {
  return (
   
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          {/*<Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
  <Route path="*" element={<NoPage />} />*/}
        </Route>
        <Route path="/user" element={<Navbar type="user"/>}>
            <Route index element={<UserHome />} />
            <Route path="publicuserprofile" element={<UserPublicProfilePage />} />
            <Route path="publiccompanyprofile" element={<CompanyPublicProfilePage />} />
            <Route path="ownprofile" element={<UserPrivateProfilePage />} />
        </Route>
        <Route path="/company" element={<Navbar type="company"/>}>
            <Route index element={<CompanyHome />} />
            <Route path="publicuserprofile" element={<UserPublicProfilePage />} />
            <Route path="publiccompanyprofile" element={<CompanyPublicProfilePage />} />
            <Route path="ownprofile" element={<CompanyPrivateProfilePage />} />
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
