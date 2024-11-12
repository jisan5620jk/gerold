import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import brandThumb from '/images/brand/brand-l-1.png';
import brandThumb2 from '/images/brand/brand-l-2.png';
import brandThumb3 from '/images/brand/brand-l-3.png';
import brandThumb4 from '/images/brand/brand-l-4.png';
import brandThumb5 from '/images/brand/brand-l-5.png';
import brandThumb6 from '/images/brand/brand-l-6.png';
import { Link } from 'react-router-dom';

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
    <div className='bg-white'>
      <div className='Container relative z-10'>
        <div className='mb-[35px]'>
          <h6
            className='font-Sora text-[12px] font-medium bg-gradient-to-l to-PrimaryColor-0 from-Secondarycolor-0 from-85% bg-clip-text text-transparent uppercase'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            Worked With Largest Brands
          </h6>
        </div>
        <Swiper {...settings}>
          <SwiperSlide>
            <Link
              className='flex items-center justify-center'
              to={'/home2_light'}
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <img
                src={brandThumb}
                draggable='false'
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              className='flex items-center justify-center'
              to={'/home2_light'}
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <img
                src={brandThumb2}
                draggable='false'
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              className='flex items-center justify-center'
              to={'/home2_light'}
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <img
                src={brandThumb3}
                draggable='false'
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              className='flex items-center justify-center'
              to={'/home2_light'}
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <img
                src={brandThumb4}
                draggable='false'
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              className='flex items-center justify-center'
              to={'/home2_light'}
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <img
                src={brandThumb5}
                draggable='false'
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              className='flex items-center justify-center'
              to={'/home2_light'}
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <img
                src={brandThumb6}
                draggable='false'
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              className='flex items-center justify-center'
              to={'/home2_light'}
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <img
                src={brandThumb3}
                draggable='false'
              />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Brand;
