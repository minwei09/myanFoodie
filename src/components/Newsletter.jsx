import React from 'react'
import mmImage from '../assets/mmpeople.jpg'

import {BsArrowRight} from 'react-icons/bs'

const Newsletter = () => {
  return (
    <div id='contactus' className='p-4 sm:mt-[5rem] md:-mt-[7rem] h-[50vh] relative sm:flex sm:justify-center sm:items-center'
    style={{backgroundImage: "url(" + mmImage + ")", backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>
        
        <div className={`z-[1] absolute top-0 left-0 w-full h-full  bg-[#00cba9] opacity-60 `} ></div>

        <div className=' z-[2] relative sm:flex sm:items-center sm:justify-center sm:py-8 sm:gap-8'>
            <h1 className=' text-center font-bold text-4xl text-white p-5 lg:w-[50%] lg:text-5xl'>Newsletter Signup</h1>
            <div className='flex flex-col mt-8 sm:mt-0 sm:flex-row sm:items-center sm:gap-4 lg:w-[80%]'>
                <input  className="bg-transparent outline-none p-1 border-b lg:flex-1" type="text" placeholder='Your Email Address'/>
                <button className='mt-6 btn w-fit sm:mt-0'><BsArrowRight className='text-white'/></button>
            </div>
        </div>

        
    </div>
  )
}

export default Newsletter