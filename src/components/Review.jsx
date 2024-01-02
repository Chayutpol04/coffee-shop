import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import coffeebettle from '../imgs/coffeecup/coffeebettle.jpg'
import CustomerData from './CustomerData';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
function Review() {
  return (
    <>
      
      <div className='mx-auto mt-20 w-full'>
          <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          slidesPerGroup={2}
          autoplay ={{delay:3000}}
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className='container w-3/4'
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup:1
            },
            100:{
              slidesPerView:1,
            }
          }}
          >
          {CustomerData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="max-w-sm mx-auto mt-24 mb-10 relative transition-transform hover:scale-105">
                <div className="rounded overflow-hidden shadow-md bg-coffeecolor1 h-64">
                  <div className="absolute -mt-24 w-full flex justify-center">
                    <div className="h-40 w-40">
                      <img
                        src={slide.imageUrl}
                        className="rounded-full object-cover h-full w-full shadow-md"
                        alt={`Slide ${slide.id}`}
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-20 text-center text-white">
                    <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
                    <p className="text-white">"{slide.description}"</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}  
          </Swiper>
      </div>
    </>
  )
}

export default Review