import React, { useState } from 'react'
import './Navbar.css'
import {BsFillGrid3X3GapFill} from 'react-icons/bs'
import {GiCheckedShield} from 'react-icons/gi'
import {MdLocationPin} from 'react-icons/md'
import {FaShoppingCart} from 'react-icons/fa'
import {FaHome} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState (false);




return (
  <>
  
      <div className="navbar">
          
             <span className="nav-logo">Credit.shop <i className='menu_icon'> <GiCheckedShield/></i> </span>
              <div className= {`nav-items ${isOpen && "open"}`}>
                  <Link to="/" className='menu_link'>Home </Link>
                  <Link to="/products" className='menu_link'>Products </Link>
                  
              </div>
              <span className='mobile_uy'> <i> <FaHome/> </i> </span>
              <span className='language'>uz|ru</span>


               <Link to="/contact" className="contact"> <i> <MdLocationPin/></i>  </Link>
               <Link to="/cart" className="cart"> <i> <FaShoppingCart/></i>  </Link>

              <div className={`nav-toggle ${isOpen && "open"}`}
                  onClick={()=> setIsOpen (!isOpen)}>
                      <BsFillGrid3X3GapFill/>
              </div>

          
      </div>

  
  </>
);
    
 
};

export default Navbar