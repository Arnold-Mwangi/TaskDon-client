import React from 'react'
import { styles } from '../../../styles'
import { useNavigate } from 'react-router-dom'
import Works from '../Works/Works'

const Hero = () => {

    const navigate = useNavigate()

    const handleSignupClick = () => {

        navigate('/signup')
    }

    return (
        <>
            <section className='relative w-full h-[500px] mx-auto overflow-hidden bg-transparent z-100'>
                <div className={`${styles.paddingX} absolute inset-0 max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                    <div className='flex flex-col justify-center mt-5 items-center'>
                        <div className='w-5 h-5 rounded-full bg-[#68e55d]'>

                        </div>
                        <div className='w-1 sm:h-40 h-40 bg-gradient-to-b from-[#1a7bab] to-[#7e8281] '>

                        </div>
                    </div>

                    <div className='absolute inset-0 z-[-1] bg-[#EA501A]' style={{ background: 'linear-gradient(to right, #050816, transparent)' }}>

                    </div>
                    <div className='flex flex-col items-center justify-center ml-5'>
                        <div className='mb-5'>
                            <p className={`${styles.heroSubText} mt-2 text-white-100 `}>
                                Study Smart Earn Smart<br /><br className='lg:block hidden' />

                                Empowering Students and Teachers for shared success
                            </p>
                        </div>


                        <form
                            // onSubmit={handleSubmit(onSubmit)}
                            className='w-full max-w-sm'>
                            <div className='flex flex-col sm:flex-row justify-center mx-auto  items-center sm:border-b  border-teal-500 py-2'>
                                <input className='appearance-none bg-transparent border-b sm:border-none border-teal-500 w-full text-[#68e55d] mr-3 py-1 px-2 font-mono font-courier leading-tight focus:outline-none' type='text' placeholder='Email Address' aria-label='Email' />

                                <button
                                    onClick={handleSignupClick}
                                    className='flex-shrink-0 bg-teal-500 w-full sm:w-auto mt-2 sm:mt-0 hover:bg-teal-700 border-teal-700 text-sm border-4 text-white sm:py-1 py-2 px-2 mr-2.5 sm:mr-0 rounded ' type='button'>
                                    Sign Up
                                </button>

                            </div>

                        </form>
                    </div>






                </div>

            </section>
            <Works />
        </>


    )

}

export default Hero
