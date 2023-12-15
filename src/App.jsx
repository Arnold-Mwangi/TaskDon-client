import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//components
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <div className=' relative z-0  bg-[#c4cecb] min-h-screen'>
          <Navbar />
        </div>
      </BrowserRouter>


    </>
  )
}

export default App
