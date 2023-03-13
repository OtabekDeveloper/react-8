import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Asosiy from '../view/home/Asosiy'
import Maxsulotlar from '../view/maxsulotlar/Maxsulotlar'
import Footer from '../components/navbar/footer/Footer'
import Karzinka from '../view/karzinka/Karzinka'
import Xarita from '../view/xarita/Xarita'



function AddRoutes() {
  return (
    <div>
        <Navbar/>
        <Routes>
            
          <Route path='/asosiy' element = { <Asosiy /> } />
          <Route path='/maxsulotlar' element = { <Maxsulotlar /> } />
          <Route path='/karzinka' element = { <Karzinka /> } />
          <Route path='/xarita' element = { <Xarita /> } />

        </Routes>
        <Footer/>
    </div>
  )
}

export default AddRoutes