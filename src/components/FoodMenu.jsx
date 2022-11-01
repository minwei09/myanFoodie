import React from 'react'
import {GiFruitBowl, GiPaperBagFolded, GiChipsBag, GiForkKnifeSpoon} from 'react-icons/gi'
import {MdEmojiFoodBeverage} from 'react-icons/md'
import { BsStar, BsStarFill} from 'react-icons/bs'
import foodItems from '../assets/data.js'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../reduxToolkit/features/shop.js'

const FoodMenu = () => {

    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
      }, [isInView])

    const [filterFood, setFilterFood] = useState(foodItems)

    const dispatch = useDispatch()

    const FilterItems = (categoryitem) => {
        if(categoryitem === 'all'){
            setFilterFood(foodItems)
        }
        else {
            setFilterFood(foodItems.filter( i => i.category === categoryitem))
        }
    }


    const categoryLinks = [
        {name: 'All', category: 'all', image: <GiForkKnifeSpoon className='text-white group-hover:text-[#00cba9]'/>},
        {name: 'Foods', category: 'food', image: <GiFruitBowl className='text-white group-hover:text-[#00cba9]'/>},
        {name: 'Snacks', category: 'snack', image: <GiChipsBag className='text-white group-hover:text-[#00cba9]' />},
        {name: 'Drinks', category: 'drink', image: <MdEmojiFoodBeverage className='text-white group-hover:text-[#00cba9]'/>},
        {name: 'Products', category: 'product', image: <GiPaperBagFolded className='text-white group-hover:text-[#00cba9]'/>},
    ]

  return (
    <div ref={ref} className='mt-8 md:mt-14 p-2' id="shop">
        <h1 className='z-[1] bg-gradient-to-r from-[#00cba9] to-[#046e7e] text-transparent bg-clip-text text-xl m:text-2xl md:text-3xl p-1 font-bold text-center'>Our Menu</h1>

        <motion.div 
        style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1s "
          }}

        className='flex flex-wrap justify-center items-center gap-8 p-5'>
            {
                categoryLinks.map( item => (
                    <div 
                    onClick={() => FilterItems(item.category)}
                    className='flex flex-col items-center  h-20 w-20 bg-white rounded-md shadow-md cursor-pointer hover:bg-[#00cba9] group transition-all duration-150 ease-in-out'>

                    <p className='mb-2 p-1 text font-semibold text-[#00cba9] group-hover:text-white'>{item.name}</p>
                    <div 
                    
                    className='bg-[#00cba9]  group-hover:bg-white rounded-full p-2 w-fit'>{item.image}</div>

                    </div>
                ))
            }
        </motion.div>

        <div 
        
        className='p-2 mt-8 flex flex-wrap justify-center sm:gap-4'>
            {
                filterFood.map( item => (
                    <div 
                    

                    className='relative flex justify-between w-[21.5rem] h-40 text-right bg-white mb-10 rounded-md shadow-md'>
                    <motion.img 
                    whileHover={{ scale: 1.07 }}
                    className='w-1/2 object-contain p-1 cursor-pointer' src={item.image} alt="" />
                    
                    <div className='p-4 '>
                    <h1 className='mb-2 font-semibold'>{item.title}</h1>

                    <div className='flex justify-end mb-2'>
                        {Array(item.rating)
                        .fill()
                        .map( (_,i) => (
                            <BsStarFill className='text-[#FFD700]' />
                        ))}
                    </div>

                    {
                        item.id === 2 ? 
                        <>
                        <p className=' text-xs line-through'>1000 <span className='italic text-xs'>MMK</span></p>
                        <p className='mb-2 font-semibold'>500<span className='italic text-sm'>MMK</span></p>
                        </>
                        :
                        <p className='mb-2 font-semibold'>{item.price} <span className='italic text-sm'>MMK</span></p>
                    }
                    <button className='border p-1 px-2 font-semibold rounded-md bg-[#00cba9] text-white' onClick={() => dispatch(addToCart(item))}>Add To Cart</button>

                    {
                        item.id === 2 && (
                            <div className='absolute -top-1 -left-1 rounded-r-lg bg-gradient-to-r from-[#00cba9] to-[#0394aa]'>
                                <h1 className='text-xs text-white p-1 italic font-semibold'>discount 50%</h1>
                            </div>
                        )
                    }
                    </div>
                    </div>
                ))
            }
        </div>

        

    </div>
  )
}

export default FoodMenu