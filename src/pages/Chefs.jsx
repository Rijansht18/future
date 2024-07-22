import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { cookteam } from '../Data';
import 'swiper/css';

function Chefs() {
  return (
    <>
      <section className='chefsimg'>
        <div className="chefscover py-4">
          <div className="container mt-5">
            <div className="row text-center text-white">
              <div className="col-lg-12">
                <h1>OUR EXPERT CHEFS</h1>
              </div>
              <div className="col-lg-12">
                <h1 className='text-danger'>Professional Cook Team</h1>
              </div>
              <div className="col-lg-3"></div>
              <div className="col-lg-6">
                <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
              </div>
            </div>
            <Swiper
              loop={true}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              className="mySwiper mb-5"
            >
              {cookteam.map((a) => (
                <SwiperSlide key={a.name} className='cookslide'>
                  <img src={a.image} alt={a.name} />
                  <div className='py-3 text-center cookbox'>
                    <h4>{a.name}</h4>
                    <p className='text-body-tertiary'>{a.post}</p>
                    <div className='d-flex justify-content-center align-items-center gap-3 text-body-tertiary'>
                      <i className="bi bi-facebook" />
                      <i className="bi bi-twitter" />
                      <i className="bi bi-linkedin" />
                      <i className="bi bi-rss" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default Chefs;
