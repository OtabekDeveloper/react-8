import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Asosiy from '../view/home/Asosiy'
import Maxsulotlar from '../view/maxsulotlar/Maxsulotlar'



function AddRoutes() {
  return (
    <div>
        <Navbar/>
        <Routes>
            
          <Route path='/asosiy' element = { <Asosiy /> } />
          <Route path='/maxsulotlar' element = { <Maxsulotlar /> } />
        
        </Routes>
    </div>
  )
}

export default AddRoutes