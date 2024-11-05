import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';
import testiProfile from '/images/testimonials/user/1.png';
import testiProfile2 from '/images/testimonials/user/1.png';
const testiData = [
  {
    id: 1,
    testiDesc: `"I like Portfolio Page more and more each day because it makes my life a lot easier. It fits our needs perfectly. Keep up the excellent work."`,
    testiName: 'Tim Bailey',
    testiDesignation: 'Senior Software',
    testiProfile: testiProfile,
  },
  {
    id: 2,
    testiDesc: `"I like Portfolio Page more and more each day because it makes my life a lot easier. It fits our needs perfectly. Keep up the excellent work."`,
    testiName: 'Brandon Fraser',
    testiDesignation: 'UI & UX designer',
    testiProfile: testiProfile2,
  },
  {
    id: 3,
    testiDesc: `"I like Portfolio Page more and more each day because it makes my life a lot easier. It fits our needs perfectly. Keep up the excellent work."`,
    testiName: 'Tim Bailey',
    testiDesignation: 'Senior Software',
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
    <section className='testimonial bg-BodyBg-0 pt-[60px] pb-[60px] md:pt-20 md:pb-20 lg:pt-[100px] xl:pt-[120px] lg:pb-[110px] xl:pb-[130px] relative z-10'>
      <span className='absolute -left-[15%] top-[100px] size-[35%] rounded-full bg-gradient-to-t to-PrimaryColor-0 from-Secondarycolor-0 blur-[150px]'></span>
      <div className='Container'>
        <div>
          <h1
            className='font-Sora text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] font-medium bg-gradient-to-l to-PrimaryColor-0 via-white from-white bg-clip-text text-transparent'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            Clients Testimonials
          </h1>
        </div>
        <div
          className='mt-8 md:mt-[50px]'
          data-aos='fade-up'
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
    </section>
  );
};

export default Testimonial;
