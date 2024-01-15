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
import Works from './components/Works/Works';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="z-0 bg-[#0e1116] min-h-screen text-white">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/works' element={<Works />} />


          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
