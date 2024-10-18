import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';
import testiLogo from '/images/testimonials/logo/1.png';
import testiLogo2 from '/images/testimonials/logo/2.png';
import testiProfile from '/images/testimonials/user/1.jpg';
import testiProfile2 from '/images/testimonials/user/2.jpg';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';

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
    spaceBetween: 30,
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
    <section className='testimonial bg-BodyBg2-0 pt-[120px] pb-[130px] relative z-10 overflow-hidden'>
      <span className='absolute left-[11%] bottom-[20%] size-[16%] rounded-full bg-gradient-to-t to-PrimaryColor-0 from-Secondarycolor-0 blur-[150px]'></span>
      <div className='Container'>
        <div className='grid gap-[30px] grid-cols-1 lg:grid-cols-2 lg:items-start'>
          <div className='relative overflow-hidden'>
            <h1 className='font-Sora text-[27px] sm:text-[34px] md:text-[45px] font-bold bg-gradient-to-r from-PrimaryColor-0 to-white bg-clip-text text-transparent'>
              {`My Client's Stories`}
            </h1>
            <p className='font-Sora text-TextColor-0 mt-2 max-w-[470px] w-full'>
              Empowering people in new a digital journey with my super services
            </p>
          </div>
          <div className=''>
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
