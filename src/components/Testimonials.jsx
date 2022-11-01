import React from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect } from 'react'
import { useRef } from 'react'


const Testimonials = () => {

  const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
      }, [isInView])

  return (
    <div ref={ref} id='testimonial' className='mt-4 md:mt-16 p-4 bg-[#00cba9]'
    
    >

        <h1 className='mb-20 md:mt-8 z-[1] text-white text-xl m:text-2xl md:text-3xl p-1 font-bold text-center'>What Our Customers Say</h1>

        <div className='flex flex-wrap justify-center'>

        <motion.div 
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transitionDuration: '1s'
        }}

        className='mb-20 text-center bg-white rounded-md shadow-sm relative  mx-auto p-1 w-[20rem]'>
            <p className='pb-16'></p>
            <img className='w-20 h-20 rounded-full absolute -top-10 left-[36%]' src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="" />
            <blockquote className='text-sm italic leading-6 tracking-wider text-slate-600'><span className='text-5xl text-[#00cba9]'>&#8220;</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi saepe nam deserunt porro et dignissimos! Ratione voluptas tempora, modi officiis repellendus odio saepe quam. Dolores laborum quo tenetur.
            <span className='text-5xl absolute bottom-6 right-4 text-[#00cba9]'>&#8221;</span></blockquote>
            <h3 className='py-5 text-lg font-semibold text-[#00cba9]'>Jessica</h3>
        </motion.div>

        <motion.div
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transitionDuration: '1.5s'
        }}

        className='mb-20 text-center bg-white rounded-md shadow-sm relative  mx-auto p-1 w-[20rem]'>
            <p className='pb-16'></p>
            <img className='w-20 h-20 rounded-full absolute -top-10 left-[36%]' src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="" />
            <blockquote className='text-sm italic leading-6 tracking-wider text-slate-600'><span className='text-5xl text-[#00cba9]'>&#8220;</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi saepe nam deserunt porro et dignissimos! Ratione voluptas tempora, modi officiis repellendus odio saepe quam. Dolores laborum quo tenetur.
            <span className='text-5xl absolute bottom-6 right-4 text-[#00cba9]'>&#8221;</span></blockquote>
            <h3 className='py-5 text-lg font-semibold text-[#00cba9]'>Rebecca</h3>
        </motion.div>

        <motion.div 
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transitionDuration: '2s'
        }}

        className='mb-20 text-center bg-white rounded-md shadow-sm relative  mx-auto p-1 w-[20rem]'>
            <p className='pb-16'></p>
            <img className='w-20 h-20 rounded-full absolute -top-10 left-[36%]' src="http://diggingdeeper.com.au/wp-content/uploads/2020/11/testimonial-profile-pic3.jpg" alt="" />
            <blockquote className='text-sm italic leading-6 tracking-wider text-slate-600'><span className='text-5xl text-[#00cba9]'>&#8220;</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi saepe nam deserunt porro et dignissimos! Ratione voluptas tempora, modi officiis repellendus odio saepe quam. Dolores laborum quo tenetur.
            <span className='text-5xl absolute bottom-6 right-4 text-[#00cba9]'>&#8221;</span></blockquote>
            <h3 className='py-5 text-lg font-semibold text-[#00cba9]'>Tommy</h3>
        </motion.div>




        </div>
        

    </div>
  )
}

export default Testimonials