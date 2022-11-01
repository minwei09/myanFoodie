import React from 'react'
import Img from '../assets/Food-bg-remove/mohinkha-removebg-preview.png'
import blob1 from '../assets/blob-dot-1.png'
import blob2 from '../assets/blob-dot-2.png'
import wavebg from '../assets/wave-bg-haikei.svg'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect } from 'react'
import { useRef } from 'react'

const Promotion = () => {

  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    }, [isInView])

  return (
    <div ref={ref} className='mt-8 p-4  lg:w-[70%] mx-auto' id='promotion'>

        <motion.h1 
        style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1s "
          }}

        className='mb-4 z-[1] bg-gradient-to-r from-[#00cba9] to-[#046e7e] text-transparent bg-clip-text text-xl p-1 font-bold underline underline-offset-8 md:pl-8 text-center sm:text-2xl md:text-3xl'>Special Offer</motion.h1>

        <div className="border relative  rounded-lg shadow-lg bg-white]">

          

            <div className='bg-gradient-to-r from-[#00cba9] to-[#046e7e] text-white  p-4 text-center '>
            <p 
            style={{
              transform: isInView ? "none" : "translateX(-100px)",
              opacity: isInView ? 1 : 0,
              transitionDuration: '1s'
            }}
            className='text-5xl mb-2 italic'> <span className='font-black '>50%</span> OFF</p>
            <h1 
            style={{
              transform: isInView ? "none" : "translateX(-100px)",
              opacity: isInView ? 1 : 0,
              transitionDuration: '1s'
            }}
            className='text font-semibold italic'>Only for <br /> <span className='text-3xl font-black not-italic'>500</span> MMK </h1>
            </div>
                
            <div className='lg:flex lg:items-center lg:justify-center lg:mx-auto ' 
             style={{backgroundImage: "url(" + wavebg + ")", backgroundPosition: 'center',
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat'}}>
            <div className='mb-4 w-full relative'>
               <div className='text-center'>
               <motion.img
               whileHover={{ scale: 1.07 }}
               src={Img} className="z-[2] h-[15rem] w-[15rem] mx-auto object-contain cursor-pointer" alt="" />
               <h1
               style={{
                transform: isInView ? "none" : "translateX(-100px)",
                opacity: isInView ? 1 : 0,
                transitionDuration: '1s'
              }}

               className='text-5xl md:text-6xl font-black bg-gradient-to-r from-[#00cba9] to-[#046e7e] text-transparent bg-clip-text'>Mohinkha</h1>
               </div>

                <img className='absolute top-0 -right-4 h-[7em] w-[7rem] sm:h-[9rem] sm:w-[9rem] md:h-[15rem] md:w-[15rem] lg:-right-[25rem] lg:top-[11rem] xl:-right-[27rem] lg:h-[9em] lg:w-[9rem]' src={blob1} alt="" />
                
               <img className='absolute bottom-0 left-0 h-[5em] w-[5rem]  sm:h-[9rem] sm:w-[9rem] lg:-left-0 lg:top-0 xl:-left-0 lg:h-[7rem] lg:w-[7rem]' src={blob2} alt="" />

            </div>

            <div className='text-[#004A55] text-center p-2 '>
                <h1 
                style={{
                  transform: isInView ? "none" : "translateX(-100px)",
                  opacity: isInView ? 1 : 0,
                  transitionDuration: '1s'
                }}
                className=' text-xl md:text-2xl font-bold tracking-widest uppercase mb-4'>Todays Special Menu</h1>
                <p 
                style={{
                  transform: isInView ? "none" : "translateX(-100px)",
                  opacity: isInView ? 1 : 0,
                  transitionDuration: '1s'
                }}
                className='text-xs md:text-sm tracking-wider leading-6 italic font-semibold mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima doloremque sit ipsam praesentium eum quia provident laudantium.</p>
                <button 
                style={{
                  transform: isInView ? "none" : "translateX(-100px)",
                  opacity: isInView ? 1 : 0,
                  transitionDuration: '1s'
                }}
                className='btn text-white bg-gradient-to-r from-[#00cba9] to-[#046e7e] mb-4'>Don't Miss The Chance</button>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Promotion