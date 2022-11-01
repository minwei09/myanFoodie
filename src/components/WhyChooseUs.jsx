import React from 'react'

import {MdHealthAndSafety} from 'react-icons/md'
import {ImPriceTags} from 'react-icons/im'
import {GiAchievement} from 'react-icons/gi'
import backgroundImg from '../assets/layered-waves-haikei.svg'
import backgroundImgMd from '../assets/layered-waves-md-haikei.svg'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect } from 'react'
import { useRef } from 'react'

const WhyChooseUs = () => {

    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
      }, [isInView])

  return (
    <div ref={ref} className='mt-16 md:mt-8 md:py-6 md:mb-12 ' style={{backgroundImage: "url(" + backgroundImgMd + ")", backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>
        <motion.h1 
        style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1s "
          }}

        className='z-[1] bg-gradient-to-r from-[#00cba9] to-[#046e7e] text-transparent bg-clip-text text-xl p-1 font-bold underline underline-offset-8 md:pl-8 text-center sm:text-2xl md:text-3xl'>Why Choose Us?</motion.h1>

        <div className='flex flex-col items-center gap-y-8 w-full mt-6 sm:grid sm:grid-cols-2  sm:mx-auto sm:w-[70%] md:flex md:justify-center md:flex-row md:gap-8 md:w-[80%] lg:w-full lg:justify-center md:py-8'>

        {/* <p className='z-[1] absolute bottom-[27rem] left-[12rem] pattern-moon '></p>  */}

            <motion.div 
            style={{
                transform: isInView ? "none" : "translateY(100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1.2s "
              }}

            className='z-[2] bg-white border rounded-md shadow-md w-[60%] p-4 sm:w-[14rem] sm:h-[14rem] '>
                <div className='w-full flex '><MdHealthAndSafety className='w-full h-10 text-center text-[#00cba9] '/>
                </div>
                <hr />
                <div className=' my-4 '>
                <p className='wcu-text'>Chemical Free Food</p>
                <p className='wcu-text'>Hygienic Kitchen</p>
                <p className='wcu-text'>Clean Environment </p>               
                </div>
            </motion.div>

            {/* <p className='z-[1] absolute bottom-[13rem] left-[12rem] pattern-moon '></p>  */}

            <motion.div 
            style={{
                transform: isInView ? "none" : "translateY(100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1.2s "
              }}

            className='z-[2] bg-white border rounded-md shadow-md w-[60%] p-4 sm:w-[14rem] sm:h-[14rem]'>
                <div className='w-full flex '><ImPriceTags className='w-full h-10 p-1 text-center text-[#00cba9] '/></div>
                <hr />
                <div className=' my-4 '>
                <p className='wcu-text'>Cheap Price</p>
                <p className='wcu-text'>Delicious Food</p>
                <p className='wcu-text'>Table Full Amount</p>               
                </div>
            </motion.div>

            {/* <p className='z-[1] absolute -bottom-[1.3rem] left-[12rem] pattern-moon  '></p>  */}

            <motion.div 
            style={{
                transform: isInView ? "none" : "translateY(100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1.2s "
              }}

            className='z-[2] bg-white border rounded-md shadow-md w-[60%] p-4 sm:w-[14rem] sm:h-[14rem]'>
                <div className=' w-full flex '><GiAchievement className='w-full h-12 text-center text-[#00cba9] '/></div>
                <hr />
                <div className=' my-2 '>
                <p className='wcu-text'>Hospitality</p>
                <p className='wcu-text'>Best Service Quality </p>
                <p className='wcu-text'>Rare Experience</p>    
                        
                </div>

                
            </motion.div>

        </div>

        

        
    </div>
  )
}

export default WhyChooseUs