import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { styles } from '../../../styles'
import { logo, logo2, menu, close } from '../../assets'

const Navbar = () => {
    const [active, setActive] = useState('')
    const [toggle, setToggle] = useState(false)


    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 sticky top-0 z-20 text-white bg-black`}>
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link to="/"
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive('false')
                        window.scrollTo(0, 0);
                    }}>
                    <img src={logo} alt="Logo" className='w-15 h-14 object-contain sm:w-15 h-12' />
                    <p className='text-[18px] font-bold cursor-pointer -flex smflex  text-[#000000]'>Taskers Bid&nbsp;
                        <span className='sm:block hidden'>
                            | Students Soar
                        </span>
                    </p>

                </Link>
                <ul className='list-none hidden sm:flex flex-row font-bold gap-10 mr-4'>
                    <li className={`${active === 'signUp' ? 'border-b-4 border-[#e94b33]' : ''}`}
                        onClick={() => setActive('signUp')}>
                        <a href='#signup'>
                            SignUp
                        </a>
                    </li>
                    <li className={`${active === 'aboutus' ? 'border-b-4 border-[#e94b33]' : ''}`}
                        onClick={() => setActive('aboutus')}>
                        <a href='#aboutus'>
                            AboutUs
                        </a>
                    </li>
                    <li className={`${active === 'faqs' ? 'border-b-4 border-[#e94b33]' : ''}`}
                        onClick={() => setActive('faqs')}>
                        <a href='#faqs'>
                            FAQs
                        </a>
                    </li>
                </ul>
                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className=' h-10 w-14 object-contain cursor-pointer'
                        onClick={() => setToggle(!toggle)}
                    />

                    <div
                        className={` ${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 ml-4 my-2 w-9/12 z-10 rounded bg-[#fff] text-black text-base`}
                    >
                        <ul className='list-none flex justify-end items-start flex-col gap-4 text-3xl'>
                            <li
                                className={`${active === 'signUp' ? 'border-b-4 border-[#000000]' : ''}`}
                                onClick={() => {
                                    setActive('signUp');
                                    setToggle(!toggle);
                                }}
                            >
                                <a href='#signup'>SignUp</a>
                            </li>
                            <li
                                className={`${active === 'aboutus' ? 'border-b-4 border-[#000000]' : ''}`}
                                onClick={() => {
                                    setActive('aboutus');
                                    setToggle(!toggle);
                                }}
                            >
                                <a href='#aboutus'>AboutUs</a>
                            </li>
                            <li
                                className={`${active === 'faqs' ? 'border-b-4 border-[#000000]' : ''}`}
                                onClick={() => {
                                    setActive('faqs');
                                    setToggle(!toggle);
                                }}
                            >
                                <a href='#faqs'>FAQs</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar