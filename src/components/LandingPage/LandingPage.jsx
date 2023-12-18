import React from 'react'
import Navbar from '../Navbar/Navbar'



const LandingPage = () => {
    return (
        <div className='w-full overflow-hidden relative'>

            <div className='container flex items-center py-5 max-w-7xl mx-auto'>


                <img
                    alt=""
                    aria-hidden="true"
                    className=" md:hidden block  w-full h-auto mb-3 max-w-7xl mx-auto "
                    src="https://github.githubassets.com/assets/hero-mobile-7163f4f5de41.webp"
                />


                <div></div>
                <img
                    alt=""
                    aria-hidden="true"
                    width="2236"
                    height="1630"
                    className="absolute h-auto pointer-events-none hidden md:block "
                    style={{ width: 'min(1118px, max(100vh, 100vw))', left: '67%' }}
                    src="https://github.githubassets.com/assets/hero-desktop-a38b0fd77b6c.webp"
                />

            </div>
        </div>
    )
}


export default LandingPage


