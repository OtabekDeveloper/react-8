import React from 'react'
import './Banner.css'
import passport from '../images/banner_img/passport.jpg' 
import saly  from '../images/banner_img/Saly-32 1.png'
import ellipse from '../images/banner_img/Ellipse.png'

function Banner() {
  return (
    <>  
        <div className="banner_container">
            <div className="banner_1">
                <h1 className="banner_1_title">Pasportingiz kifoya</h1>
                <p className="banner_1_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suspendisse cursus volutpat malesuada quam turpis fermentum egestas. Tortor a pellentesque augue praesent sit ultrices. Sed sit elit, elementum eros vel nisi, nisl. Est in faucibus quam curabitur massa suspendisse. Congue nunc quam enim a facilisis viverra quam.</p>
                <img src={passport} alt="" className='banner_passport' />
            </div>
            <div className="banner_2">
                <p className="banner_2_desc">Biz yani Credit.shop jamoasi silarning ishonchingizni qozonish uchun doim harakatdamiz va sizga eng sifatli maxsulotlarni ilinamiz!</p>
                <img src={saly} alt="" className='banner_saly' />
            
            </div>
            <div className="banner_3">
                <p className="banner_3_desc">Online qo’llab quvvatlash markazi
                sizga yordam berishdan juda mamnunmiz</p>

                <img src={ellipse} alt=""  className='banner_ellipse'/>

            </div>

        </div>
        
    
    </>
  )
}

export default Banner