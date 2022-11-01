import React from 'react'
import {BsArrowLeft} from 'react-icons/bs'
import {AiFillDelete} from 'react-icons/ai'
import { motion } from 'framer-motion'

import img from '../assets/Food-bg-remove/nangyithoke-removebg-preview.png'
import box from '../assets/empty-box.png'
import { useDispatch, useSelector } from 'react-redux'
import { hideCart, showCart } from '../reduxToolkit/features/cart'
import { decrease, deleteAll, increase } from '../reduxToolkit/features/shop'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartContainer = () => {

    const displayCart = useSelector( state => state.cart.displayCart)
    
    const cartItems = useSelector( state => state.shop.cart)
    const totalPrice = useSelector( state => state.shop.total)

    const dispatch = useDispatch()

    const notify = () => toast.success('Thanks For Buying!', {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        

    const handleCheckout = () => {
        notify()
        dispatch(deleteAll())
        dispatch(hideCart())
    }

 
    return(
        displayCart && (
    
            <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: "0" }}
            className='fixed top-[4rem] right-0 h-screen w-[20rem] bg-white z-[5] py-3'>
        
            <div className='relative h-full w-full '>
        
            <div className='flex items-center justify-between p-3'>
                    <BsArrowLeft 
                    onClick={() => dispatch(hideCart())}
                    className='h-5 w-5 cursor-pointer'/>
                    <h1 className='font-semibold'>Cart</h1>
                    <motion.div 
                    onClick={() => dispatch(deleteAll())} 
                    whileTap={{scale: 1.1}}
                    className='flex items-center gap-2 border rounded-lg px-2 py-1 cursor-pointer bg-gray-100'>
                        <p className='text-sm font-semibold '>Clear</p>
                        <AiFillDelete />
                    </motion.div>
        
                </div> 
        
                {/* 
                - FOOD CONTAINER
                */}
                <div className='p-4  overflow-scroll pt-8 bg-[#2e3033] h-[70vh] text-white rounded-t-[2rem]'>


                    {
                        cartItems.length === 0 ?

                        <div>
                            <h1 className='text-center font-semibold self-center'>Your Cart Is Empty</h1>
                            <img className='p-20' src={box} alt="" />
                        </div>

                        :

                        cartItems.map( item => (
                            <div className='bg-[#343739] mb-4 p-2 rounded-xl flex items-center justify-between'>
                    <div className='flex items-center'>
                        <img className='w-[4rem] h-[4rem] object-contain' src={item.image} alt="" />
                        <div>
                            <h1 className='text-sm font-semibold mb-1'>{item.title}</h1>
                            <p className='text-sm font-semibold'>{item.price} MMK</p>
                        </div>
                    </div>
        
                    <div className='flex items-center gap-3'>
                        <p onClick={() => dispatch(decrease(item))} className='cursor-pointer'>-</p>
                        <p className='text-sm font-semibold'>{item.quantity}</p>
                        <p onClick={() => dispatch(increase(item))} className='cursor-pointer'>+</p>
                    </div>
                    </div>
                        ))
                    }

                    <div className='mt-[3rem]'></div>
        
                </div>
        
                {/* 
                - CART TOTAL
                */}
                <div className='absolute w-full bottom-[3rem]  p-4 bg-[#343739] rounded-t-[2rem] text-white'>
        
                    <div className='flex items-center justify-between mb-8 font-semibold px-3 py-2'>
                        <h1>Total</h1>
                        <p>{totalPrice} MMK</p>
                    </div>
        
                    <div className={`w-[80%] mx-auto ${cartItems.length > 0 ? ' pointer-events-auto' : 'pointer-events-none '} `}>
                    
                        <button 
                        onClick={handleCheckout}
                        className={`py-2 px-4 bg-gradient-to-r from-[#00cba9] to-[#046e7e]  rounded-full w-full font-semibold` }>{cartItems.length > 0 ? "Check Out" : "Empty Items"}</button>
                    </div>        
                </div>
        
            </div>
        
                </motion.div>
            )
    )

}

export default CartContainer