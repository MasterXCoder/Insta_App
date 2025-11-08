import React, { useState } from 'react';

const Signup = ({ onNavigate }) => {
  const [emailOrMobile, setEmailOrMobile] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailOrMobile || !password || !fullName || !username) {
      alert('Please fill in all fields!');
      return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.some(
      (u) =>
        u.username.toLowerCase() === username.toLowerCase() ||
        u.emailOrMobile?.toLowerCase() === emailOrMobile.toLowerCase()
    );

    if (userExists) {
      alert('This username or email/mobile is already registered!');
      return;
    }

    const newUser = { username, fullName, emailOrMobile, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('✅ Account created successfully!');
    onNavigate('login');
  };

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', backgroundColor: 'black', color: 'white', minHeight: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
        <div style={{ maxWidth: '350px', width: '100%' }}>
          <div style={{ backgroundColor: 'black', border: '1px solid hsl(0, 0%, 15%)', padding: '40px', marginBottom: '10px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Instagram</h1>

            <p style={{ color: 'hsl(0, 0%, 56%)', fontSize: '17px', lineHeight: '20px', marginBottom: '20px', fontWeight: '600' }}>
              Sign up to see photos and videos<br />from your friends.
            </p>

            <button style={{ backgroundColor: 'rgb(24, 119, 242)', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '8px', fontSize: '14px', fontWeight: '600', width: '100%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', height: '32px' }}>
              Log in with Facebook
            </button>

            <div style={{ margin: '20px 0', position: 'relative', color: 'hsl(0, 0%, 56%)', fontSize: '13px', fontWeight: '600', display: 'flex', alignItems: 'center', textAlign: 'center' }}>
              <hr style={{ flex: 1, border: 'none', borderTop: '1px solid hsl(0, 0%, 20%)' }} />
              <span style={{ padding: '0 10px', color: 'hsl(0, 0%, 67%)', fontFamily: 'Arial, Helvetica, sans-serif' }}>OR</span>
              <hr style={{ flex: 1, border: 'none', borderTop: '1px solid hsl(0, 0%, 20%)' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <input
                type="text"
                placeholder="Mobile Number or Email"
                value={emailOrMobile}
                onChange={(e) => setEmailOrMobile(e.target.value)}
                style={{ backgroundColor: 'hsl(0, 0%, 7%)', border: '1px solid hsl(0, 0%, 15%)', borderRadius: '3px', padding: '9px 8px', fontSize: '14px', color: 'white', outline: 'none' }}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ backgroundColor: 'hsl(0, 0%, 7%)', border: '1px solid hsl(0, 0%, 15%)', borderRadius: '3px', padding: '9px 8px', fontSize: '14px', color: 'white', outline: 'none' }}
              />
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                style={{ backgroundColor: 'hsl(0, 0%, 7%)', border: '1px solid hsl(0, 0%, 15%)', borderRadius: '3px', padding: '9px 8px', fontSize: '14px', color: 'white', outline: 'none' }}
              />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ backgroundColor: 'hsl(0, 0%, 7%)', border: '1px solid hsl(0, 0%, 15%)', borderRadius: '3px', padding: '9px 8px', fontSize: '14px', color: 'white', outline: 'none' }}
              />

              <p style={{ fontSize: '12px', color: 'hsl(0, 0%, 56%)', lineHeight: '16px', margin: '10px 0', textAlign: 'center' }}>
                By signing up, you agree to our <a href="#" style={{ color: 'hsl(209, 100%, 39%)', textDecoration: 'none' }}>Terms</a>, <a href="#" style={{ color: 'hsl(209, 100%, 39%)', textDecoration: 'none' }}>Privacy Policy</a> and <a href="#" style={{ color: 'hsl(209, 100%, 39%)', textDecoration: 'none' }}>Cookies Policy</a>.
              </p>

              <button onClick={handleSubmit} style={{ backgroundColor: '#1877f2', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', marginTop: '10px', height: '32px' }}>
                Sign Up
              </button>
            </div>
          </div>

          <div style={{ maxWidth: '350px', width: '100%', backgroundColor: 'black', border: '1px solid hsl(0, 0%, 15%)', padding: '20px', textAlign: 'center', marginBottom: '20px', fontSize: '14px' }}>
            Have an account? <span onClick={() => onNavigate('login')} style={{ color: '#1877f2', cursor: 'pointer', fontWeight: '600' }}>Log in</span>
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

export default Signup;