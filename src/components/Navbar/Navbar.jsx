import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { styles } from '../../../styles'
import { logo1, logo2 } from '../../assets'

const Navbar = () => {
    const [active, setActive] = useState('')
    const [toggle, setToggle] = useState(false)


    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 `}>
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link to="/"
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive('false')
                        window.scrollTo(0, 0);
                    }}>
                    <img src={logo1} alt="Logo" className='w-15 h-14 object-contain sm: w-15 h-12' />
                    <p className='text-[18px] font-bold cursor-pointer flex text-[#000000]'>Taskers Bid&nbsp;
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
            </div>
        </nav>
    )
}

export default Navbar