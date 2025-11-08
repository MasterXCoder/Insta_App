import React, { useState } from 'react';

const Login = ({ onNavigate }) => {
  const [userInfo, setUserInfo] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const jsonUsers = [
      { username: 'demo', emailOrMobile: 'demo@instagram.com', password: 'demo123' },
      { username: 'vansh_singh_787', emailOrMobile: 'vansh@example.com', password: 'password' }
    ];

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
  };

  return (
    <div style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', backgroundColor: 'black', color: 'white', minHeight: '100vh', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', gap: '50px', margin: '0 auto', maxWidth: '1200px', minHeight: '80vh' }}>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="./public/pics/img_1.png" alt="Instagram" style={{ maxWidth: '400px', width: '100%', height: 'auto', borderRadius: '10px' }} />
        </div>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: '100%', maxWidth: '350px', padding: '40px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '48px', marginBottom: '40px', fontWeight: 'normal' }}>Instagram</h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
              <input
                type="text"
                placeholder="Phone number, username or email"
                value={userInfo}
                onChange={(e) => setUserInfo(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
                style={{ backgroundColor: 'hsl(0, 0%, 15%)', border: '1px solid hsl(0, 0%, 21%)', borderRadius: '7px', padding: '14px 12px', fontSize: '14px', color: 'aliceblue', outline: 'none' }}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
                style={{ backgroundColor: 'hsl(0, 0%, 15%)', border: '1px solid hsl(0, 0%, 21%)', borderRadius: '7px', padding: '14px 12px', fontSize: '14px', color: 'aliceblue', outline: 'none' }}
              />
              <button onClick={handleSubmit} style={{ backgroundColor: 'rgb(0, 149, 246)', border: 'none', borderRadius: '6px', padding: '14px', color: 'white', fontSize: '14px', fontWeight: '600', cursor: 'pointer', marginTop: '8px' }}>
                Log in
              </button>
            </div>

            <div style={{ margin: '20px 0', position: 'relative', color: 'hsl(0, 0%, 56%)', fontSize: '13px', fontWeight: '600', display: 'flex', alignItems: 'center', textAlign: 'center' }}>
              <hr style={{ flex: 1, border: 'none', borderTop: '1px solid hsl(0, 0%, 20%)' }} />
              <span style={{ padding: '0 10px', color: 'hsl(0, 0%, 67%)', fontFamily: 'Arial, Helvetica, sans-serif' }}>OR</span>
              <hr style={{ flex: 1, border: 'none', borderTop: '1px solid hsl(0, 0%, 20%)' }} />
            </div>

            <button style={{ background: 'transparent', border: 'none', color: '#385185', fontSize: '14px', fontWeight: '600', cursor: 'pointer', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', gap: '8px', marginBottom: '20px' }}>
              <span>Log in with Facebook</span>
            </button>

            <a href="#" style={{ color: 'hsl(209, 100%, 41%)', textDecoration: 'none', fontSize: '12px', display: 'block', marginBottom: '20px' }}>
              Forgot password?
            </a>

            <div style={{ fontSize: '14px', color: '#8e8e8e' }}>
              <span>Don't have an account? </span>
              <span onClick={() => onNavigate('signup')} style={{ color: '#0095f6', cursor: 'pointer', fontWeight: '600' }}>Sign up</span>
            </div>
          </div>
        </div>
      </div>

      <footer style={{ padding: '20px', textAlign: 'center', backgroundColor: 'black' }}>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '15px', marginBottom: '15px' }}>
          {['Meta', 'About', 'Blog', 'Jobs', 'Help', 'API', 'Privacy', 'Terms'].map(link => (
            <a key={link} href="#" style={{ color: 'hsl(0, 0%, 56%)', textDecoration: 'none', fontSize: '12px' }}>{link}</a>
          ))}
        </div>
        <span style={{ color: 'hsl(0, 0%, 56%)', fontSize: '12px' }}>© 2025 Instagram from Meta</span>
      </footer>
    </div>
  );
};

export default Login;