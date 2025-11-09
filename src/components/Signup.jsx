import React, { useState } from 'react';

import '../css/signup.css';


const Signup = ({ onNavigate }) => {
  const [detail, setDetail] = useState('');
  const [userPass, setUserPass] = useState('');
  const [name, setName] = useState('');
  const [userInfo, setUserInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!detail || !userPass || !name || !userInfo) {
      alert('Please fill in all fields!');
      return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.some(
      (u) =>
        u.username.toLowerCase() === userInfo.toLowerCase() ||
        u.emailOrMobile?.toLowerCase() === detail.toLowerCase()
    );

    if (userExists) {
      alert('This username or email/mobile is already registered!');
      return;
    }

    const newUser = {
      username: userInfo,
      fullName: name,
      emailOrMobile: detail,
      password: userPass,
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('✅ Account created successfully!');
    onNavigate('login');
  };

  return (
    <div>
      <div className="container">
        <div className="main">
          <div className="box">
            <div className="logo">
              <h1>Instagram</h1>
            </div>

            <p className="line">Sign up to see photos and videos<br />from your friends.</p>

            <button className="facebook_btn">
              <img src="/pics/fb_white.png" style={{ width: '20px', height: '20px' }} alt="Facebook" />
              &nbsp;Log in with Facebook
            </button>

            <div className="or">
              <hr />
              <span>OR</span>
              <hr />
            </div>

            <div className="info">
              <input 
                type="text" 
                placeholder="Mobile Number or Email" 
                id="detail"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                required 
              />
              <input 
                type="password" 
                placeholder="Password" 
                id="user_pass"
                value={userPass}
                onChange={(e) => setUserPass(e.target.value)}
                required 
              />
              <input 
                type="text" 
                placeholder="Full Name" 
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
              />
              <input 
                type="text" 
                placeholder="Username" 
                id="user_info"
                value={userInfo}
                onChange={(e) => setUserInfo(e.target.value)}
                required 
              />

              <p className="terms_text">
                People who use our service may have uploaded your contact information to Instagram. 
                <a href="#" className="learn_more">Learn More</a>
              </p>

              <p className="terms_text">
                By signing up, you agree to our <a href="#" className="link">Terms</a>, 
                <a href="#" className="link">Privacy Policy</a> and <a href="#" className="link">Cookies Policy</a>.
              </p>

              <button type="submit" id="submit_btn" onClick={handleSubmit}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="login_box">
          <p>Have an account? <span className="login_link" onClick={() => onNavigate('login')} style={{ cursor: 'pointer' }}>Log in</span></p>
        </div>
      </div>

      <div className="app">
        <span className="playstore">
          <a href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=en">
            <button>
              <img src="/pics/playstore.png" style={{ borderRadius: '3px' }} alt="Play Store" />
            </button>
          </a>
        </span>
        <span className="microsoft">
          <a href="https://apps.microsoft.com/detail/9nblggh5l9xt?hl=en-US&gl=US">
            <button style={{ background: 'transparent' }}>
              <img src="/pics/Microsoft.png" alt="Microsoft" />
            </button>
          </a>
        </span>
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

        <div className="footer-bottom">
          <select className="language-select">
            <option>English</option>
            <option>Hindi</option>
            <option>Punjabi</option>
          </select>
          <span className="copyright">&copy; 2025 Instagram from Meta</span>
        </div>
      </footer>
    </div>
  );
};

export default Signup;