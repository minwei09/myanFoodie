import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/Footer'

const Routing = () => {
  return (
    <>
        <Navbar />

        <Routes>
          
            <Route path='/' element={<Home />}/>
            <Route path='*' element={<Navigate to='/'/>}/>

        </Routes>

        <Footer />
    </>
  )
}

export default Routing