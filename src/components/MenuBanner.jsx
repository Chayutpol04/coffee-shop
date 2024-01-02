import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import bannermenu1 from '../imgs/etc/bannermenu1.png'
import bannermenu2 from '../imgs/etc/bannermenu2.png'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
function MenuBanner() {
  return (
    <>
      
      <div className='mx-auto  w-full'>
          <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
          slidesPerView={1}
          slidesPerGroup={1}
          autoplay ={{delay:3000}}
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className='container  w-full'
          breakpoints={{
            1024: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
              slidesPerGroup:1
            },
            100:{
              slidesPerView:1,
            }
          }}
          >
          <SwiperSlide className='w-full'>
            <img src={bannermenu1} alt="" srcset="" className='w-full'/>
          </SwiperSlide>
          <SwiperSlide className='w-full'>
            <img src={bannermenu2} alt="" className='w-full' />
          </SwiperSlide>
          </Swiper>
      </div>
    </>
  )
}

export default MenuBanner