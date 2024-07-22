import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { clientfeedback } from '../Data';
import 'swiper/css/autoplay'; 
import { Autoplay } from 'swiper/modules';

function Feedback() {
  return (
    <>
      <section className='py-5'>
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <h1>CUSTOMER FEEDBACK</h1>
            </div>
            <div className="col-lg-12">
              <h1 className='text-danger'>Our Food Lover</h1>
            </div>
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
              <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
            </div>
          </div>
          <Swiper
            modules={[Autoplay]}
            loop={true}
            spaceBetween={10}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            className="mySwiper mt-5"
          >
            {clientfeedback.map((a) => (
              <SwiperSlide key={a.name} className='text-center d-flex flex-column justify-content-center align-items-center'>
                <div className='feecircle'><img src={a.image} alt={a.name} /></div>
                <p className='fw-light'>{a.desc}</p>
                <div className="line"></div>
                <h5 className='mt-3'>{a.name}</h5>
                <p>({a.post})</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Feedback;
