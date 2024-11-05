import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';
import testiLogo from '/images/testimonials/logo/1.png';
import testiLogo2 from '/images/testimonials/logo/2.png';
import testiProfile from '/images/testimonials/user/1.jpg';
import testiProfile2 from '/images/testimonials/user/2.jpg';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import './testimonial.css';

const testiData = [
  {
    id: 1,
    testiLogo: testiLogo,
    testiIconLeft: <BsFillCaretLeftFill />,
    testiIconRight: <BsFillCaretRightFill />,
    testiDesc: `“Taylor is a professional Designer he really helps my business by providing value to my business.`,
    testiName: 'Brandon Fraser',
    testiDesignation: 'Senior Software Dev, Cosmic Sport',
    testiProfile: testiProfile,
  },
  {
    id: 2,
    testiLogo: testiLogo2,
    testiIconLeft: <BsFillCaretLeftFill />,
    testiIconRight: <BsFillCaretRightFill />,
    testiDesc: `“Taylor is a professional Designer he really helps my business by providing value to my business.`,
    testiName: 'Tim Bailey',
    testiDesignation: 'SEO Specialist, Theme Junction',
    testiProfile: testiProfile2,
  },
  {
    id: 3,
    testiLogo: testiLogo,
    testiIconLeft: <BsFillCaretLeftFill />,
    testiIconRight: <BsFillCaretRightFill />,
    testiDesc: `“Taylor is a professional Designer he really helps my business by providing value to my business.`,
    testiName: 'Brandon Fraser',
    testiDesignation: 'Senior Software Dev, Cosmic Sport',
    testiProfile: testiProfile,
  },
];

const Testimonial = () => {
  const settings = {
    loop: true,
    spaceBetween: 34,
    speed: 1000,
    initialSlide: 1,
    autoplay: true,
    effect: 'ease',
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 2,
      },
    },
  };
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' pagination-bullet"></span>';
    },
  };
  return (
    <section className='testimonial bg-BodyBg2-0 pt-[60px] md:pt-20 lg:pt-[120px] pb-[70px] md:pb-20 lg:pb-[130px] relative z-10 overflow-hidden'>
      <span className='absolute left-[11%] bottom-[20%] size-[16%] rounded-full bg-gradient-to-t to-PrimaryColor-0 from-Secondarycolor-0 blur-[150px]'></span>
      <div className='Container'>
        <div className='grid gap-[42px] md:gap-[46px] lg:gap-[30px] grid-cols-1 lg:grid-cols-12 xl:grid-cols-2 lg:items-start'>
          <div className='col-span-1 lg:col-span-5 xl:col-span-1 relative overflow-hidden'>
            <h1
              className='font-Sora text-[30px] md:text-[35px] lg:text-[43px] lg:leading-[53px] font-bold bg-gradient-to-r from-PrimaryColor-0 to-white bg-clip-text text-transparent'
              data-aos='fade-up-right'
              data-aos-duration='1000'
            >
              {`My Client's Stories`}
            </h1>
            <p
              className='font-Sora text-TextColor-0 mt-[14px] lg:max-w-[470px] w-full xl:pr-5 2xl:pr-0'
              data-aos='fade-up-right'
              data-aos-duration='1000'
            >
              Empowering people in new a digital journey with my super services
            </p>
          </div>
          <div
            className='col-span-1 lg:col-span-7 xl:col-span-1'
            data-aos='fade-up-left'
            data-aos-duration='1000'
          >
            <Swiper
              {...settings}
              pagination={pagination}
              modules={[Pagination]}
            >
              <div>
                {testiData.map(
                  ({
                    id,
                    testiLogo,
                    testiIconLeft,
                    testiIconRight,
                    testiName,
                    testiProfile,
                    testiDesignation,
                    testiDesc,
                  }) => {
                    return (
                      <SwiperSlide
                        key={id}
                        className='pb-[42px]'
                      >
                        <TestimonialCard
                          testiLogo={testiLogo}
                          testiIconLeft={testiIconLeft}
                          testiIconRight={testiIconRight}
                          testiName={testiName}
                          testiDesignation={testiDesignation}
                          testiProfile={testiProfile}
                          testiDesc={testiDesc}
                        />
                      </SwiperSlide>
                    );
                  }
                )}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
