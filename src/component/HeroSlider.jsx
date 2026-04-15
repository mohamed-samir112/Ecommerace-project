import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Link, Links } from 'react-router-dom';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
export default function HeroSlider() {
  return (
    <>
    <div className='hero'>
    <div className="container">
        <Swiper 
        loop={true} autoplay={{delay:2500, disableOnInteraction:false}}  pagination={true} modules={[Pagination ,Autoplay]} className="mySwiper">
        <SwiperSlide>
            <div className="content">
                <h4>Introducing the new</h4>
                <h3>Microsofr Xbox</h3>
                <p> Windows xp/10/7/8 ps3, tv Box</p>
                <Link to='/' className='btn'>Shop Now</Link>
            </div>
            <img src="/src/img/banner_Hero1.jpg" alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
            <div className="content">
                <h4>Introducing the new</h4>
                <h3>Microsofr Xbox</h3>
                <p> Windows xp/10/7/8 ps3, tv Box</p>
                <Link to='/' className='btn'>Shop Now</Link>
            </div>
            <img src="/src/img/banner_Hero2.jpg" alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
            <div className="content">
                <h4>Introducing the new</h4>
                <h3>Microsofr Xbox</h3>
                <p> Windows xp/10/7/8 ps3, tv Box</p>
                <Link to='/' className='btn'>Shop Now</Link>
            </div>
            <img src="/src/img/banner_Hero3.jpg" alt="not found" />
        </SwiperSlide>
            
        </Swiper>
    </div>
</div>
    </>



     
  )
}










