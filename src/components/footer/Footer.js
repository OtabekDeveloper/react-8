import React from 'react'
import './Footer.css'
import {FaTelegramPlane} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="up_footer">
                <div className="part_1">
                    <h1 className='footer_link_title'>Sayt xaritasi</h1>
                    <Link to="/" className='footer_menu'>Bosh saxifa</Link>
                    <Link to="/cart" className='footer_menu'>Savat</Link>
                    <Link to="/ishonch_center" className='footer_menu'>Qo’llab quvvatlash markazi</Link>
                </div>
                <div className="part_2">
                    <h1 className='footer_tel_title'>Ishonch telefonlari</h1>
                    <i className='footer_tel'>+998 91 675 67 89</i>
                    <i className='footer_tel'>+998 33 786 54 35</i>
                    <i className='footer_tel'>+998 99 672 20 89</i>
                </div>
                <div className="part_3">
                    <h1 className='footer_social_title'>Credit.shop</h1>
                    <a href="/telegram" className='footer_social_link'>  <FaTelegramPlane /> </a>
                    <a href="/Instagram"  className='footer_social_link'> <BsInstagram />  </a>
                    <a href="/youtube"  className='footer_social_link'> <BsYoutube />  </a>
                </div>
            </div>
            <div className="bottom_part">
                <h6>TECHNOBEK 2021-2022 Copyright </h6>
            </div>
        </div>
    
    </>
  )
}

export default Footer