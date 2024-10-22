import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import brandThumb from '/images/brand/brand-1.png';
import brandThumb2 from '/images/brand/brand-2.png';
import brandThumb3 from '/images/brand/brand-3.png';
import brandThumb4 from '/images/brand/brand-4.png';
import brandThumb5 from '/images/brand/brand-5.png';
import brandThumb6 from '/images/brand/brand-6.png';

const Brand = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 6,
      },
      1400: {
        slidesPerView: 6,
      },
    },
  };
  return (
    <div className='bg-BodyBg-0'>
      <div className='Container relative z-10'>
        <div className='mb-[35px]'>
          <h6
            className='font-Sora text-[12px] font-medium bg-gradient-to-l to-PrimaryColor-0 from-white from-85% bg-clip-text text-transparent uppercase'
            data-aos='fade-up'
            data-aos-delay='300'
            data-aos-duration='1000'
          >
            Worked With Largest Brands
          </h6>
        </div>
        <Swiper {...settings}>
          <SwiperSlide>
            <div
              data-aos='fade-up'
              data-aos-delay='400'
              data-aos-duration='1000'
            >
              <img
                src={brandThumb}
                draggable='false'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              data-aos='fade-up'
              data-aos-delay='500'
              data-aos-duration='1000'
            >
              <img
                src={brandThumb2}
                draggable='false'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              data-aos='fade-up'
              data-aos-delay='600'
              data-aos-duration='1000'
            >
              <img
                src={brandThumb3}
                draggable='false'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              data-aos='fade-up'
              data-aos-delay='700'
              data-aos-duration='1000'
            >
              <img
                src={brandThumb4}
                draggable='false'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              data-aos='fade-up'
              data-aos-delay='800'
              data-aos-duration='1000'
            >
              <img
                src={brandThumb5}
                draggable='false'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              data-aos='fade-up'
              data-aos-delay='900'
              data-aos-duration='1000'
            >
              <img
                src={brandThumb6}
                draggable='false'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              data-aos='fade-up'
              data-aos-delay='1000'
              data-aos-duration='1000'
            >
              <img
                src={brandThumb3}
                draggable='false'
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Brand;
