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
                    <h1>Sayt xaritasi</h1>
                    <Link to="/asosiy">Bosh saxifa</Link>
                    <Link to="/karzinka">Savat</Link>
                    <Link to="/ishonch_center">Qo’llab quvvatlash markazi</Link>
                </div>
                <div className="part_2">
                    <h1>Ishonch telefonlari</h1>
                    <i>+998 91 675 67 89</i>
                    <i>+998 33 786 54 35</i>
                    <i>+998 99 672 20 89</i>
                </div>
                <div className="part_3">
                    <h1>Credit.shop</h1>
                    <a href="/telegram">  <FaTelegramPlane /> </a>
                    <a href="/Instagram"> <BsInstagram />  </a>
                    <a href="/youtube"> <BsYoutube />  </a>
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