import React, { useState } from 'react';
import './login.css';
import img from './people.jpeg';
import Footer from './Footer';
import UserHome from './UserHome';
import CompanyHome from './CompanyHome';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [loggedIn, setLoggedIn] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const user = { name: 'John Doe', email: 'johndoe@example.com' };

  const viewUser = () => {
    navigate("/user", { state: { user } });
  }

  const viewCompany = () => {
    navigate("/company");
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/login', { username, password })
      .then(res => {
        const sessionID = res.data.sessionId;
        const userType = res.data.userType;

        sessionStorage.setItem('sessionID', sessionID);
        sessionStorage.setItem('userType', userType);
        setError(null); 
        if (userType === 'user') {
          setLoggedIn('user');
        } else if (userType === 'company') {
          setLoggedIn('company');
        }
      })
      .catch(err => {
        console.log(err);
        setError("Login failed. Please check your credentials."); 
      });
  };

  if (loggedIn === "user") {
    viewUser();
  }

  if (loggedIn === "company") {
    viewCompany();
  }

  return (
    <div id="nab-wraplogin">
      <div class="nab-wrapper-login">

        <div class="nab-login-left-side">
          <img id="emerald" src={img} alt="emeraldimg" />
        </div>

        <div class="nab-loginpage-right-side">
          <div class="nab-login-right-innerbox">

            <div>
              <h1 id="welcomeback">Welcome Back</h1>
              <h3 id="welcomeback-subheading">Login to get started right where you left off.</h3>
              <form onSubmit={handleLogin}>
                <div>
                  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} name="username" id="nab-login-username" class="nab-form__input" placeholder="Username" />

                </div>
                <div >
                  <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} name="password" id="nab-login-password" class="nab-form__input" placeholder="Password" />
                </div>
                <div>
                  <input type="submit" value="Login" id="nab-login-submit-btn" />
                </div>
              </form>
              {error && <p style={{ color: 'red', marginLeft: '150px' }}>{error}</p>} {}
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default LoginPage;
