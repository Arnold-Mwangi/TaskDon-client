// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

// Components
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import Hero from './components/Hero/Hero';
import Signup from './components/Authentication/Signup';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="z-0 bg-[#000000] min-h-screen text-white">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<Signup />} />


          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
