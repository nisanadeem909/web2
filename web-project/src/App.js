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
import ManageEmp from './Components/ManageEmployees';
import AllJobs from './Components/JobComparisonPage';
import Login from './Components/login';
import Signup from './Components/signup';
function App() {
  return (
   
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login/>}></Route>
          <Route path="signup" element={<Signup/>}></Route>
          {/*<Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          
  <Route path="*" element={<NoPage />} />*/}
        </Route>
        <Route path="/user" element={<Navbar type="user"/>}>
            <Route index element={<UserHome />} />
            <Route path="publicuserprofile" element={<UserPublicProfilePage />} />
            <Route path="publiccompanyprofile" element={<CompanyPublicProfilePage />} />
            <Route path="ownprofile" element={<UserPrivateProfilePage />} />
            <Route path="myjobs" element={<AllJobs />} />
        </Route>
        <Route path="/company" element={<Navbar type="company"/>}>
            <Route index element={<CompanyHome />} />
            <Route path="publicuserprofile" element={<UserPublicProfilePage />} />
            <Route path="publiccompanyprofile" element={<CompanyPublicProfilePage />} />
            <Route path="ownprofile" element={<CompanyPrivateProfilePage />} />
            <Route path="manageemployees" element={<ManageEmp />} />
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
