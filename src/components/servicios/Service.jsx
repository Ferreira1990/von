import React from 'react'
import '../../components/servicios/Service.css'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';






import uno from '../../assets/boxi.jpg'
import unox from '../../assets/c.jpg'
import unoxx from '../../assets/d.jpg'
import unoxxx from '../../assets/e.jpg'
import unoxxxx from '../../assets/f.jpg'
import unoxxxxx from '../../assets/g.jpg'
import unoxxxxxx from '../../assets/h.jpg'
import unoxxxxxxx from '../../assets/i.jpg'
import unoxxxxxxxx from '../../assets/j.jpg'

import 'swiper/css';

const Service = () => {
  return (
    <>
    <div id='servicios' className='BOXfatherservice'>

        <div className='Boxserviceh1'>
        <h1>Servicios</h1>
        </div>
         
        <div className='boxofswiper'>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img  className='imgservice' src={uno} alt="" /></SwiperSlide>
        <SwiperSlide><img  className='imgservice' src={unox} alt="" /></SwiperSlide>
        <SwiperSlide><img  className='imgservice' src={unoxx} alt="" /></SwiperSlide>
        <SwiperSlide><img  className='imgservice' src={unoxxx} alt="" /></SwiperSlide>
        <SwiperSlide><img  className='imgservice' src={unoxxxx} alt="" /></SwiperSlide>
        <SwiperSlide><img  className='imgservice' src={unoxxxxx} alt="" /></SwiperSlide>
        <SwiperSlide><img  className='imgservice' src={unoxxxxxx} alt="" /></SwiperSlide>
        <SwiperSlide><img  className='imgservice' src={unoxxxxxxx} alt="" /></SwiperSlide>
        <SwiperSlide><img  className='imgservice' src={unoxxxxxxxx} alt="" /></SwiperSlide>
      </Swiper>  
 
        </div>

    </div>




    </>
  )
}

export default Service