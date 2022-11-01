import React from 'react'
import FoodMenu from '../components/FoodMenu'
import HeroSection from '../components/HeroSection'
import Newsletter from '../components/Newsletter'
import Promotion from '../components/Promotion'
import Testimonials from '../components/Testimonials'
import WhyChooseUs from '../components/WhyChooseUs'

import wave from '../assets/wave-haikei.svg'
import HomeExtraBg from '../components/HomeExtraBg'
import Event from '../components/Event'
import CartContainer from '../components/CartContainer'


const Home = () => {
  return (
    <div className='mt-16'>
      <HeroSection />
      <WhyChooseUs />
      <Promotion />
      <FoodMenu />
      <Testimonials />
      <Event />
      <HomeExtraBg/>
      <CartContainer />
      
      {/* <Newsletter /> */}
    </div>
  )
}

export default Home