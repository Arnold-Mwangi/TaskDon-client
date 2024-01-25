import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Works from '../Works/Works';

const LandingPage = () => {
    return (
        <div className='w-full overflow-hidden'>
            <Navbar />
            <div className='container relative'>
                <div className='relative'>
               

                    <img
                        alt=""
                        aria-hidden="true"
                        className="md:hidden block w-full mb-3 max-w-7xl mx-auto z-20"
                        src="https://github.githubassets.com/assets/hero-mobile-7163f4f5de41.webp"
                    />

                    <img
                        alt=""
                        aria-hidden="true"
                        width="2236"
                        
                        className="absolute pointer-events-none h-[400px] hidden md:block z-0"
                        style={{ width: 'min(1118px, max(100vh, 100vw))', left: '67%' }}
                        src="https://github.githubassets.com/assets/hero-desktop-a38b0fd77b6c.webp"
                    />
                </div>
            </div>

            <Hero />
            <Works />
        </div>
    );
};

export default LandingPage;
