import React from 'react'
import { styles } from '../../../styles'

const Hero = () => {

    return (
        <section className='w-full mx-auto overflow-hidden bg-transparent z-100'>
            <div className={`${styles.paddingX} inset-0 max-w-7xl mx-auto flex-row items-start gap-5`}>
                <div className='flex flex-col justify-center mt-5 items-center'>
                <div className='w-5 h-5 rounded-full bg-[#e94b33]'>

                </div>
                <div className='w-1 sm:h-80 h-80 bg-gradient-to-b from-[#000000] to-[#7e8281] '>

                </div>
                </div>
                
               


            </div>

        </section>
    )

}

export default Hero
