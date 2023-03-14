import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from '../view/home/Home'
import Products from '../view/products/Products'
import Footer from '../components/footer/Footer'
import Cart from '../view/cart/Cart'
import Contact from '../view/Contact/Contact'



function AddRoutes() {
  return (
    <div>
        <Navbar/>
        <Routes>
            
          <Route path='/' element = { <Home /> } />
          <Route path='/products' element = { <Products /> } />
          <Route path='/cart' element = { <Cart /> } />
          <Route path='/contact' element = { <Contact /> } />

        </Routes>
        <Footer/>
    </div>
  )
}

export default AddRoutes