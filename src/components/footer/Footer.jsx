import React from 'react'
import mmImage from '../../assets/mmpeople.jpg'

import {BsArrowRight, BsFacebook, BsFillTelephoneFill} from 'react-icons/bs'
import {HiLocationMarker} from 'react-icons/hi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const Footer = () => {

    const notify = () => toast.success(`Thanks For Subscribing! ${email}`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

        const [email, setEmail] = useState('')

        const handleSub = () => {
            notify()
            setEmail('')
        }

  return (
    <div id='contactus' className=' p-4 relative text-white sm:grid sm:grid-cols-2 lg:grid-cols-3'
    
    style={{backgroundImage: "url(" + mmImage + ")", backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>

    <div className={`z-[1] absolute top-0 left-0 w-full h-full  bg-[#00cba9] opacity-60 `} ></div>       

        <div className=' relative z-[2] mb-5'>
            <h1 className='font-semibold underline underline-offset-[6px] mb-3'>About</h1>
            <ul >
                <li className='text-sm tracking-widest'>Our Team</li>
                <li className='text-sm tracking-widest'>Customers</li>
                <li className='text-sm tracking-widest'>Top Menu</li>
                <li className='text-sm tracking-widest'>Sale</li>
            </ul>
        </div>

        <div className=' relative z-[2] mb-5'>
        <h1 className='font-semibold underline underline-offset-[6px] mb-3'>Blog</h1>
            <ul>
                <li className='text-sm tracking-widest'>News</li>
                <li className='text-sm tracking-widest'>Photograph</li>
                <li className='text-sm tracking-widest'>Food Articles</li>
                <li className='text-sm tracking-widest'>Events</li>
            </ul>
        </div>

        <div className=' relative z-[2] mb-5'>
            <h1 className='font-semibold underline underline-offset-[6px] mb-3'>Contact us</h1>
            <ul>
                <div className='flex items-center gap-3'>
                    <BsFillTelephoneFill />
                    <li>09 - 999999999</li>
                </div>
                <div className='flex items-center gap-3'>
                    <BsFacebook />
                    <li>MyanFoodie</li>
                </div>
                <div className='flex items-center gap-3'>
                    <HiLocationMarker />
                    <li>No.3, Bahan Township, Yangon</li>
                </div>
            </ul>
        </div>

        <div className=' relative z-[2] mb-5'>
            <h1 className='text-xl font-semibold '>Get Newsletter</h1>
            <div className='flex'>
                <input 
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="bg-transparent outline-none p-1 border-b w-full " type="text" placeholder='Your Email Address'/>
                <BsArrowRight onClick={handleSub} className=' text-white h-10 w-10 p-2 border rounded-md ml-4 cursor-pointer'/>
                <ToastContainer />
            </div>
        </div>

    </div>
  )
}

export default Footer