import React from 'react'
import image from '../assets/welcome-removebg-preview.png'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect } from 'react'
import { useRef } from 'react'

const Event = () => {

    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
      }, [isInView])

  return (

    <div className='bg-[#00cba9]'>
    <motion.h1 
        style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1s "
          }}

        className='mb-6 z-[1] text-white text-xl p-1 font-bold  md:pl-8 text-center sm:text-2xl md:text-3xl'>Our Achievements</motion.h1>

    <div ref={ref} className='bg-[#00cba9] flex flex-wrap flex-col-reverse px-4 pt-4 text-white 
    md:flex-row'>

        <div className='md:w-[40%]'>
            <img src={image} alt="" />
        </div>

        <div className='md:w-[60%] lg:pr-[5rem]'>
            <p
            style={{
                transform: isInView ? "none" : "translateY(100px)",
                opacity: isInView ? 1 : 0,
                transitionDuration: '1s'
              }}

            className='text-sm lg:text-base p-2'>We served over <span className='text-base font-semibold text-[#004A55] underline underline-offset-4'>15000+</span> customers</p>
            <h1
            style={{
                transform: isInView ? "none" : "translateY(100px)",
                opacity: isInView ? 1 : 0,
                transitionDuration: '1.2s'
              }}

            className='text-4xl lg:text-6xl font-semibold p-2'>We Delivered Over <span className='text-[#004A55]'>100k+ </span>Dishes</h1>
            <p 
            style={{
                transform: isInView ? "none" : "translateY(100px)",
                opacity: isInView ? 1 : 0,
                transitionDuration: '1.4s'
              }}

            className='p-2 text-sm lg:text-base italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptas nesciunt unde distinctio excepturi iusto voluptatibus quibusdam. Qui eos dignissimos consequatur facere repudiandae ipsum nulla id, voluptatum eaque quos asperiores.</p>
        </div>

    </div>
    </div>
  )
}

export default Event