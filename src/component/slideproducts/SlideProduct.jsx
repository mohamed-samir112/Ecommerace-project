import React from 'react'
import './slideProduct.css'
import Product from './product'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { Autoplay, Pagination } from 'swiper/modules';

export default function slideProduct({data,title}) {
    console.log(data);
  return (
    <div className='slide-products slide'>
        <div className="container">
            <div className="top-slide">
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, facilis!</p>
            </div>
            <Swiper 
                loop={true}
                autoplay={{delay:2500,
                        disableOnInteraction:false}}
                        slidesPerView={5}
                navigation={true} modules={[Navigation,Autoplay]} className="mySwiper">
                {data.map((item)=>{
                    return(
                <SwiperSlide><Product item={item}/></SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    </div>
  )
}
