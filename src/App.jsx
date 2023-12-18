import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//components
import Navbar from './components/Navbar/Navbar'
import LandingPage from './components/LandingPage/LandingPage'
import { BrowserRouter } from 'react-router-dom'
import Hero from './components/Hero/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <div className='z-0  bg-[#000000] min-h-screen text-white'>
          <Navbar />
          <div >
            <LandingPage />
            </div>
          
          <Hero />


        </div>
      </BrowserRouter>


    </>
  )
}

export default App
