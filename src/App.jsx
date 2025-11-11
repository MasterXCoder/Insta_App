import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Reel from './components/Reel';

function App() {
  console.log('App loaded!');
  const [currentPage, setCurrentPage] = useState('login');
  console.log('Current page:', currentPage);
  
  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ margin: 0, padding: 0, width: '100%', minHeight: '100vh' }}>
      {currentPage === 'login' && <Login onNavigate={navigate} />}
      {currentPage === 'signup' && <Signup onNavigate={navigate} />}
      {currentPage === 'home' && <Home onNavigate={navigate} />}
      {currentPage === 'reel' && <Reel onNavigate={navigate} />}
    </div>
  );
}

export default App;
