// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { AuthProvider } from './components/Authentication/AuthContext/AuthContext';

// Components
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import Hero from './components/Hero/Hero';
import Signup from './components/Authentication/Signup';
import Works from './components/Works/Works';
import { Login } from './components/Authentication/Login';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="z-0 bg-[#0e1116] min-h-screen text-white">
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/signup" element={<Signup />} />
              <Route path='/works' element={<Works />} />
              <Route path='/login' element={<Login />} />


            </Routes>
          </Router>
        </AuthProvider>

      </div>
    </>
  );
}

export default App;
