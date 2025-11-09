import React, { useState } from 'react';

import '../css/login.css';

const Login = ({ onNavigate }) => {
  const [userInfo, setUserInfo] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let jsonUsers = [];
      try {
        const res = await fetch('/json/pass.json');
        if (res.ok) {
          jsonUsers = await res.json();
        }
      } catch (err) {
        console.warn('Could not read pass.json', err);
      }

      const localUsers = JSON.parse(localStorage.getItem('users')) || [];
      const allUsers = [...jsonUsers, ...localUsers];

      const validUser = allUsers.find(user =>
        (user.username?.toLowerCase() === userInfo.toLowerCase() ||
         user.emailOrMobile?.toLowerCase() === userInfo.toLowerCase()) &&
        user.password === password
      );

      if (validUser) {
        alert(`✅ Welcome, ${validUser.username || validUser.fullName || 'User'}!`);
        sessionStorage.setItem('currentUser', JSON.stringify(validUser));
        onNavigate('home');
      } else {
        alert('❌ Invalid username or password!');
      }
    } catch (err) {
      console.error('Error checking credentials:', err);
      alert('⚠️ Something went wrong while logging in.');
    }
  };

  return (
    <>
      <div className="container">
        <div className="left">
          <img src="/pics/img_1.png" alt="image" id="img1" />
        </div>

        <div className="right">
          <div className="box">
            <h1>Instagram</h1>

            <div className="info" id="loginForm">
              <input 
                type="text" 
                placeholder="Phone number, username or email" 
                id="user_info" 
                value={userInfo}
                onChange={(e) => setUserInfo(e.target.value)}
                required 
              />
              <input 
                type="password" 
                placeholder="Password" 
                id="user_pass"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
              <button type="submit" id="submit_btn" onClick={handleSubmit}>Log in</button>
            </div>

            <div className="or">
              <hr />
              <span>OR</span>
              <hr />
            </div>

            <button id="facebook_btn">
              <img src="/pics/fb_blue.png" style={{ width: '18px', height: '20px' }} alt="Facebook" />
              <span>&nbsp;Log in with Facebook</span>
            </button>
            <br />

            <a href="#" id="forget_pass">Forgot password?</a>

            <div id="signup-text">
              <span>Don't have an account?</span>
              <span id="signup-link" onClick={() => onNavigate('signup')} style={{ cursor: 'pointer' }}>Sign up</span>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="links">
          <a href="#">Meta</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Jobs</a>
          <a href="#">Help</a>
          <a href="#">API</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Locations</a>
          <a href="#">Instagram Lite</a>
          <a href="#">Meta AI</a>
          <a href="#">Meta AI Articles</a>
          <a href="#">Threads</a>
          <a href="#">Contact Uploading & Non-Users</a>
          <a href="#">Meta Verified</a>
        </div>

        <div className="footer_bottom">
          <select className="language_select">
            <option>English</option>
            <option>Hindi</option>
            <option>Punjabi</option>
          </select>
          <span className="copyright">&copy; 2025 Instagram from Meta</span>
        </div>
      </footer>
    </>
  );
};

export default Login;