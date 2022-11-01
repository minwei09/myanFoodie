import React from 'react'

import Logo from '../../assets/HatchfulExport-All/logo_transparent.png'
import {BsCart3, BsPersonCircle} from 'react-icons/bs'
import {FiMenu} from 'react-icons/fi'
import {MdClose} from 'react-icons/md'
 
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { showCart } from '../../reduxToolkit/features/cart'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)

    const cart = useSelector( state => state.cart.displayCart)
    const totalAmount = useSelector( state => state.shop.amount)
    const dispatch = useDispatch()

    const navLinks = [
        {name: 'Promotion', alink: '#promotion'},
        {name: 'Shop', alink: '#shop'},
        {name: 'Feedback', alink: '#testimonial'},
        {name: 'Contact Us', alink: '#contactus'},
    ]

    const handleCart = () => {
        dispatch(showCart())
    }

  return (
   <>
   

    <div className='bg-[#F6F6F6] z-[10] fixed top-0 left-0 w-full h-[10vh] flex items-center justify-between py-2 sm:px-2 md:px-4 lg:px-8'>

    <div onClick={() => setShowMenu(false)} className={`${showMenu ? ' z-[15] absolute top-0 left-0 w-screen h-screen bg-black opacity-30 ': 'hidden '}`} ></div>

        {/* - LOGO */}
        <Link to='/'>
        <img className='h-24 object-contain cursor-pointer' src={Logo} alt="" />
        </Link>

        {/* - NAV LINKS */}
        <>
        {
            showMenu && (
            <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "0" }}
            className={` z-[20] absolute top-0 left-0 bg-[#F6F6F6] w-[70%] h-screen `}>
            <div className='flex items-center justify-between p-2 h-[5.5rem] shadow-md'>
                <img className='w-28' src={Logo} alt="" />
                <motion.div 
                whileTap={{ scale: 0.8 }}
                transition={{type: 'spring'}}
                className='h-8 w-8 cursor-pointer' onClick={() => setShowMenu(false)}><MdClose className='h-full w-full p-1 text-[#004A55]'/></motion.div>
            </div>
            <hr />
                <div className='px-2 mt-3'>
                {
                navLinks.map( nav => (
                    <div key={nav.name}>
                    <motion.h1 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1 }}
                    style={{x: 20}}
                    className='text-[#004A55] font-semibold py-2 cursor-pointer'
                    onClick={() => setShowMenu(false)}
                    ><a href={nav.alink}>{nav.name}</a></motion.h1>
                    </div>
                ))
                }
                </div>
            </motion.div>
            )
        }
        {/* - SHOW SM */}
        <div className='hidden sm:flex items-center gap-5'>
            {
                navLinks.map( nav => (
                    <div>
                    <motion.h1
                    whileHover={{scale: 1.1}}
                    className='cursor-pointer text-[#004A55] text-sm font-semibold lg:text-base '>
                        <a href={nav.alink}>{nav.name}</a>
                    </motion.h1>
                    </div>
                ))
            }
        </div>
        </>

        {/* - RIGHT NAV LINKS */}
        <div className='flex items-center gap-5'>
            <motion.div 
            onClick={() => handleCart()}
            whileTap={{ scale: 0.8 }}
            className='h-8 w-8 relative cursor-pointer'>
                <BsCart3 className='h-full w-full p-1 text-[#004A55]'/>
                <span className='absolute -top-3 -right-1 w-5 h-5 text-center items-center rounded-full bg-[#004A55] text-white font-semibold text-xs'>
                    <p className='mt-[0.1rem]'>{totalAmount}</p>
                </span>
            </motion.div>
            <motion.div
            whileTap={{ scale: 0.8 }}
            className='h-8 w-8 cursor-pointer'>
                <BsPersonCircle className='h-full w-full p-1 text-[#004A55]'/>
            </motion.div>
            <motion.div
            whileTap={{ scale: 0.8 }}
            transition={{type: 'spring'}}
            className='h-8 w-8 cursor-pointer sm:hidden' onClick={() => setShowMenu(true)}>
                <FiMenu className='h-full w-full p-1 text-[#004A55]'/>
            </motion.div>
        </div>

    </div>
   </>
  )
}

export default Navbar