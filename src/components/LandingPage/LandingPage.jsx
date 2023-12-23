import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'



const LandingPage = () => {
    return (
        <div className='w-full overflow-hidden'>
            <Navbar />
            <div className='relative container flex items-center py-5 max-w-7xl mx-auto h-'>


                <img
                    alt=""
                    aria-hidden="true"
                    className=" md:hidden block  w-full  mb-3 max-w-7xl mx-auto "
                    src="https://github.githubassets.com/assets/hero-mobile-7163f4f5de41.webp"
                />


               
                <img
                    alt=""
                    aria-hidden="true"
                    width="2236"
                    height="1630"
                    className="absolute h-screen pointer-events-none max-w-7xl hidden md:block "
                    style={{ width: 'min(1118px, max(100vh, 100vw))', left: '67%' }}
                    src="https://github.githubassets.com/assets/hero-desktop-a38b0fd77b6c.webp"
                />

            </div>

            <Hero />
        </div>
    )
}


export default LandingPage


