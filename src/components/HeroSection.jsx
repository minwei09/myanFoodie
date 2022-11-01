import React from 'react'
import { useState } from 'react'
import video from '../assets/videobg.mp4'

import Typical from 'react-typical'
import { motion } from 'framer-motion'

const HeroSection = () => {


  return (
    <>
    <div className='relative'>
      
      <div className={`z-[1] absolute top-0 left-0 w-full h-full  bg-black opacity-60 `} ></div>

      <video className='-mt-4 object-cover w-full' src={video} autoPlay loop muted></video>

      <div className='absolute top-0 left-0 w-full   h-full flex items-center justify-center sm:flex-col sm:text-left sm:items-start sm:p-5 sm:gap-y-3 md:w-1/2 lg:w-[70%] lg:px-40'>

        <motion.h1 
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y:0}}
        transition={{duration: 1}}
        className='z-[2]  font-Sigmar text-2xl text-white sm:text-3xl md:text-5xl lg:text-7xl'>Uniqueness of burmese 
        <Typical className='text-[#FFD700]' steps={['Taste', 3000, 'foods', 3000, 'snacks', 3000, 'drinks', 3000, 'flavour', 3000]}
        loop={Infinity} wrapper="p"
        />
        </motion.h1>


        <motion.p 
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y:0}}
        transition={{duration: 1.2}}
        className='hidden sm:block z-[2] text-white text-sm leading-6 my-3 tracking-wider md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolorem ad ex enim rem quaerat. Nulla fugit est expedita delectus exercitationem amet, qui, ipsa tempore soluta rem ducimus quidem itaque!</motion.p>
        
        <motion.div 
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y:0}}
        transition={{duration: 1.3}}
        className='hidden sm:flex z-[2] justify-center gap-6'>
        <button className='btn bg-gradient-to-r from-[#00cba9] to-[#046e7e] text-white'>Explore Taste</button>
        <div className='bg-white rounded-md'><button className=' btn border-[#004A55]  bg-gradient-to-r from-[#00cba9] to-[#046e7e] text-transparent bg-clip-text'>Book A Table</button></div>
        </motion.div>



      </div>

    </div>

    <div className='p-4 py-6 text-center sm:hidden'>

    <motion.p
    initial={{opacity: 0, y: 100}}
    animate={{opacity: 1, y:0}}
    transition={{duration: 1}}
    className='text-[#004A55] my-3 tracking-wider '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut mollitia odio voluptate quia consequuntur enim error culpa deserunt ipsum voluptatem unde repudiandae officia, animi corrupti quibusdam ullam laborum, eius quasi!</motion.p>
    
    <motion.div 
    initial={{opacity: 0, y: 100}}
    animate={{opacity: 1, y:0}}
    transition={{duration: 1.3}}
    className='flex justify-center gap-6 py-4'>
    <button className='btn bg-gradient-to-r from-[#00cba9] to-[#046e7e] text-white'>Explore Taste</button>
    <button className='btn border-[#00cba9] bg-gradient-to-r from-[#00cba9] to-[#046e7e] text-transparent bg-clip-text'>Book A Table</button>
    </motion.div>

    </div>

    <svg className='-mt-10 sm:hidden' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="1" d="M0,160L20,176C40,192,80,224,120,240C160,256,200,256,240,245.3C280,235,320,213,360,186.7C400,160,440,128,480,128C520,128,560,160,600,186.7C640,213,680,235,720,208C760,181,800,107,840,90.7C880,75,920,117,960,160C1000,203,1040,245,1080,224C1120,203,1160,117,1200,90.7C1240,64,1280,96,1320,128C1360,160,1400,192,1420,208L1440,224L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>
    <div className='bg-[#00cba9] h-14 sm:hidden'></div>
    
    </>
  )
}

export default HeroSection