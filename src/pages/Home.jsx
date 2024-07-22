import React, { useEffect } from 'react';
import { slide } from '../Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Autoplay, Navigation } from 'swiper/modules';

function Home() {
  useEffect(() => {
    const handleSlideChange = () => {
      const slideHeads = document.querySelectorAll('.slidehead, .sildesub, .slidedis, .slidebtn1, .slidebtn2');
      slideHeads.forEach(slideHead => {
        slideHead.style.animation = 'none';
        slideHead.offsetHeight; // Trigger reflow
        slideHead.style.animation = '';
      });
    };

    const swiperInstance = document.querySelector('.mySwiper').swiper;
    swiperInstance.on('slideChange', handleSlideChange);

    return () => {
      swiperInstance.off('slideChange', handleSlideChange);
    };
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        loop={true}
        spaceBetween={0}
      
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[ Autoplay, Navigation]}
        className="mySwiper"
      >
        {slide.map((a) => (
          <SwiperSlide
            key={a.id}
            style={{ backgroundImage: `url(${a.image})`, height: '700px' ,objectFit:'contain',backgroundRepeat: 'no-repeat',backgroundSize: 'cover' }}
          >
            <div className="homecover">
            <div className="container slidebox">
              <div className="row">
                <div className="col-lg-8">
                  <div className="slidehead">
                    <h1 className="font fw-bold">{a.title}</h1>
                  </div>
                  <div className="sildesub">
                    <h1 className='text-uppercase text-white font'>{a.sub}</h1>
                  </div>
                  <div className="slidedis text-white">
                    <p className=''>{a.disc}</p>
                  </div>
                  <div className="d-flex gap-5">
                    <div className="slidebtn1">
                      <button className='coubtn'>{a.btn1}</button>
                    </div>
                    <a className='btn-a' href="#contact"><div className="slidebtn2">
                      <button className='coubtn'>{a.btn2}</button>
                    </div>
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>
            </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Home;
