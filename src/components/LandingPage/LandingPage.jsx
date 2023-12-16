import React from 'react'
import Navbar from '../Navbar/Navbar'



const LandingPage = () => {
    return (
        <div className='overflow-hidden'>
            <div>
                <Navbar />
            </div>
            <div className='container w-full flex items-center py-5 mx-auto'>
    

                <img
                    alt=""
                    aria-hidden="true"                    
                    className=" md:hidden w-full h-auto mb-3 max-w-7xl mx-auto absolute top-20"
                    src="https://github.githubassets.com/assets/hero-mobile-7163f4f5de41.webp"
                />

            </div>
        </div>
    )
}

export default LandingPage


        //  {/* <img
        //             alt=""
        //             aria-hidden="true"
        //             // width="2236"
        //             // height="1630"
        //             className="absolute top-0 h-auto   sm: block"
        //             style={{ width: 'min(118px, max(100vh, 100vw))', left: '50%' }}
        //             src="https://github.githubassets.com/assets/hero-desktop-a38b0fd77b6c.webp"
        //         /> */}