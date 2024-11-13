import { useEffect, useRef } from 'react';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import porfolioImg from '/images/portfolio/1.jpg';
import porfolioImg2 from '/images/portfolio/2.jpg';
import porfolioImg3 from '/images/portfolio/3.jpg';
import porfolioImg4 from '/images/portfolio/4.jpg';
import popUpSliderThumb from '/images/portfolio-gallery/p-gallery-1.jpg';
import popUpSliderThumb2 from '/images/portfolio-gallery/p-gallery-2.jpg';
import popUpSliderThumb3 from '/images/portfolio-gallery/p-gallery-3.jpg';
import popUpSliderThumb4 from '/images/portfolio-gallery/p-gallery-4.jpg';
import modalThumb from '/images/portfolio/modal-img.jpg';
import { HiArrowUpRight } from 'react-icons/hi2';
import './portfolio.css';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Portfolio = () => {
  useEffect(() => {
    const $grid = new Isotope('.portfolio-box', {
      masonry: {
        columnWidth: '.portfolio-sizer',
        gutter: '.gutter-sizer',
      },
      itemSelector: '.portfolio-item',
      percentPosition: true,
    });

    // Ensure all images are loaded before initializing Isotope
    imagesLoaded('.portfolio-box', () => {
      $grid.layout();
    });

    // Filter items on button click
    const filterButtons = document.querySelectorAll(
      '.filter-button-group button'
    );
    filterButtons.forEach((button) => {
      button.addEventListener('click', function () {
        filterButtons.forEach((btn) => btn.classList.remove('active'));
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');
        $grid.arrange({ filter: filterValue });
      });
    });

    // Animation effect for active background
    filter_animation();

    function filter_animation() {
      const activeBg = document.querySelector('.portfolio-active-bg');
      const activeElement = document.querySelector(
        '.filter-button-group .active'
      );
      updateActiveFilterBtn(activeBg, activeElement);

      filterButtons.forEach((button) => {
        button.addEventListener('click', function () {
          updateActiveFilterBtn(activeBg, this);
        });
      });
    }

    function updateActiveFilterBtn(activeBg, element) {
      if (!element) return;

      const leftOff = element.getBoundingClientRect().left;
      const width = element.offsetWidth;
      const menuLeft = document
        .querySelector('.filter-button-group')
        .getBoundingClientRect().left;

      activeBg.style.left = `${leftOff - menuLeft}px`;
      activeBg.style.width = `${width}px`;
    }

    // Clean up event listeners on component unmount
    return () => {
      filterButtons.forEach((button) => {
        button.removeEventListener('click', () => {});
      });
    };
  }, []);

  //Pop Up

  const portfolioPopUpRef = useRef(null);
  const portfolioPopUpRef2 = useRef(null);
  const portfolioPopUpRef3 = useRef(null);
  const portfolioPopUpRef4 = useRef(null);
  const portfolioPopUpContentRef = useRef(null);
  const portfolioBodyOverlayRef = useRef(null);
  const portfolioCloseBtnRef = useRef(null);

  useEffect(() => {
    const portfolioPopUp = portfolioPopUpRef.current;
    const portfolioPopUp2 = portfolioPopUpRef2.current;
    const portfolioPopUp3 = portfolioPopUpRef3.current;
    const portfolioPopUp4 = portfolioPopUpRef4.current;
    const portfolioPopUpContent = portfolioPopUpContentRef.current;
    const portfolioBodyOverlay = portfolioBodyOverlayRef.current;
    const closeBtn = portfolioCloseBtnRef.current;

    const addClasses = () => {
      portfolioPopUpContent.classList.add('opened');
      portfolioBodyOverlay.classList.add('apply');
    };

    const removeClasses = () => {
      portfolioPopUpContent.classList.remove('opened');
      portfolioBodyOverlay.classList.remove('apply');
    };

    if (
      portfolioPopUp &&
      portfolioPopUp2 &&
      portfolioPopUp3 &&
      portfolioPopUp4 &&
      portfolioPopUpContent &&
      portfolioBodyOverlay &&
      closeBtn
    ) {
      portfolioPopUp.addEventListener('click', addClasses);
      portfolioPopUp2.addEventListener('click', addClasses);
      portfolioPopUp3.addEventListener('click', addClasses);
      portfolioPopUp4.addEventListener('click', addClasses);
      closeBtn.addEventListener('click', removeClasses);
      portfolioBodyOverlay.addEventListener('click', removeClasses);
    }

    return () => {
      if (
        portfolioPopUp &&
        portfolioPopUp2 &&
        portfolioPopUp3 &&
        portfolioPopUp4 &&
        portfolioPopUpContent &&
        portfolioBodyOverlay &&
        closeBtn
      ) {
        portfolioPopUp.removeEventListener('click', addClasses);
        closeBtn.removeEventListener('click', removeClasses);
        portfolioBodyOverlay.removeEventListener('click', removeClasses);
      }
    };
  }, []);

  // Pop up Image Slider

  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    initialSlide: 1,
    centeredSlides: true,
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
    <>
      <div className='portfolio-filter text-center bg-BodyBg-0 pt-[60px] pb-[30px] md:pt-20 md:pb-[60px] lg:pt-[100px] xl:pt-[120px] lg:pb-[60px] xl:pb-20'>
        <div className='text-center mx-3 md:mx-0 mb-10 md:mb-[50px]'>
          <h1
            className='font-Sora text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] font-bold bg-gradient-to-l to-PrimaryColor-0 via-PrimaryColor-0 from-white from-30% bg-clip-text text-transparent'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            My Recent Works
          </h1>
          <p
            className='font-Sora text-TextColor-0 mt-2 mx-auto max-w-[640px] w-full'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </p>
        </div>
        <div className='Container'>
          <div
            className='button-group filter-button-group relative z-10 inline-block sm:px-2 py-1 sm:py-[6px] rounded-full bg-BodyBg2-0'
            data-aos='fade-up'
            data-aos-delay='500'
            data-aos-duration='1000'
          >
            <button
              data-filter='*'
              className='active px-[10px] md:py-2 md:px-[25px] rounded-full relative z-10 font-Sora text-sm md:text-[15px] text-white bg-transparent capitalize tracking-custom2'
            >
              All
            </button>
            <button
              data-filter='.uxui'
              className='px-[10px] md:py-2 md:px-[25px] rounded-full relative z-10 font-Sora text-sm md:text-[15px] text-white bg-transparent capitalize tracking-custom2'
            >
              UX/UI
            </button>
            <button
              data-filter='.branding'
              className='px-[10px] md:py-2 md:px-[25px] rounded-full relative z-10 font-Sora text-sm md:text-[15px] text-white bg-transparent capitalize tracking-custom2'
            >
              Branding
            </button>
            <button
              data-filter='.mobile-app'
              className='px-[10px] md:py-2 md:px-[25px] rounded-full relative z-10 font-Sora text-sm md:text-[15px] text-white bg-transparent capitalize tracking-custom2'
            >
              Apps
            </button>
            <div className='portfolio-active-bg rounded-full top-0 left-0 bottom-0 right-0 absolute -z-10 bg-gradient-to-l to-PrimaryColor-0 from-Secondarycolor-0 transition-all duration-500'></div>
          </div>
          <div
            className='portfolio-box text-center pt-10 md:pt-[50px] bg-contain bg-no-repeat bg-center relative z-10 before:absolute before:top-1/2 before:left-1/2 before:w-[35%] before:h-[35%] before:-z-10 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-PrimaryColor-0 before:bg-gradient-to-r before:to-PrimaryColor-0 before:from-Secondarycolor-0 before:blur-[150px]'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <div className='portfolio-sizer w-[98%] md:w-[48%]'></div>
            <div className='gutter-sizer w-[4%]'></div>
            <div className='portfolio-item branding group bg-BodyBg3-0 mb-[4%] px-[15px] lg:px-9 pt-5 lg:pt-9 rounded-[10px] w-[98%] md:w-[48%]'>
              <div className='image-box text-center'>
                <img
                  src={porfolioImg}
                  draggable='false'
                />
              </div>
              <div className='content-box text-left absolute bottom-[15px] left-0 right-0 bg-BodyBg2-0  w-[calc(100%-30px)] lg:w-[calc(100%-40px) rounded-2xl m-auto p-[15px] md:p-[15px] lg:p-5 md:pr-9 lg:pr-[50px] sm:pr-[50px] opacity-0 transition-all duration-500 translate-y-[15px] bg-gradient-to-l to-PrimaryColor-0 from-Secondarycolor-0 group-hover:opacity-100 group-hover:translate-y-0'>
                <h3 className='portfolio-title font-Sora text-2xl md:[25px] lg:text-3xl font-bold text-white'>
                  Deloitte
                </h3>
                <p className='font-Sora font-light text-white lg:pt-4'>
                  Project was about precision and information.
                </p>
                <span className='text-xl md:text-2xl lg:text-3xl tracking-custom2 absolute top-1/2 right-[10px] md:right-4 lg:right-[25px] -translate-y-1/2 text-white transition-all duration-500 group-hover:rotate-[360deg] group-hover:-translate-y-1/2'>
                  <HiArrowUpRight />
                </span>
                <button
                  ref={portfolioPopUpRef}
                  className='portfolio-link absolute top-0 left-0 w-full h-full z-10 bg-transparent'
                ></button>
              </div>
            </div>
            <div className='portfolio-item uxui group bg-BodyBg3-0 mb-[4%] px-[15px] lg:px-9 pt-5 lg:pt-9 rounded-[10px] w-[98%] md:w-[48%]'>
              <div className='image-box text-center'>
                <img
                  src={porfolioImg2}
                  draggable='false'
                />
              </div>
              <div className='content-box text-left absolute bottom-[15px] left-0 right-0 bg-BodyBg2-0  w-[calc(100%-30px)] lg:w-[calc(100%-40px) rounded-2xl m-auto p-[15px] md:p-[15px] lg:p-5 md:pr-9 lg:pr-[50px] sm:pr-[50px] opacity-0 transition-all duration-500 translate-y-[15px] bg-gradient-to-l to-PrimaryColor-0 from-Secondarycolor-0 group-hover:opacity-100 group-hover:translate-y-0'>
                <h3 className='portfolio-title font-Sora text-2xl md:[25px] lg:text-3xl font-bold text-white'>
                  New Age
                </h3>
                <p className='font-Sora font-light text-white lg:pt-4'>
                  Project was about precision and information.
                </p>
                <span className='text-xl md:text-2xl lg:text-3xl tracking-custom2 absolute top-1/2 right-[10px] md:right-4 lg:right-[25px] -translate-y-1/2 text-white transition-all duration-500 group-hover:rotate-[360deg] group-hover:-translate-y-1/2'>
                  <HiArrowUpRight />
                </span>
                <button
                  ref={portfolioPopUpRef2}
                  className='portfolio-link absolute top-0 left-0 w-full h-full z-10 bg-transparent'
                ></button>
              </div>
            </div>
            <div className='portfolio-item mobile-app group bg-BodyBg3-0 mb-[4%] px-[15px] lg:px-9 pt-5 lg:pt-9 rounded-[10px] w-[98%] md:w-[48%]'>
              <div className='image-box text-center'>
                <img
                  src={porfolioImg3}
                  draggable='false'
                />
              </div>
              <div className='content-box text-left absolute bottom-[15px] left-0 right-0 bg-BodyBg2-0  w-[calc(100%-30px)] lg:w-[calc(100%-40px) rounded-2xl m-auto p-[15px] md:p-[15px] lg:p-5 md:pr-9 lg:pr-[50px] sm:pr-[50px] opacity-0 transition-all duration-500 translate-y-[15px] bg-gradient-to-l to-PrimaryColor-0 from-Secondarycolor-0 group-hover:opacity-100 group-hover:translate-y-0'>
                <h3 className='portfolio-title font-Sora text-2xl md:[25px] lg:text-3xl font-bold text-white'>
                  Sebastian
                </h3>
                <p className='font-Sora font-light text-white lg:pt-4'>
                  Project was about precision and information.
                </p>
                <span className='text-xl md:text-2xl lg:text-3xl tracking-custom2 absolute top-1/2 right-[10px] md:right-4 lg:right-[25px] -translate-y-1/2 text-white transition-all duration-500 group-hover:rotate-[360deg] group-hover:-translate-y-1/2'>
                  <HiArrowUpRight />
                </span>
                <button
                  ref={portfolioPopUpRef3}
                  className='portfolio-link absolute top-0 left-0 w-full h-full z-10 bg-transparent'
                ></button>
              </div>
            </div>
            <div className='portfolio-item branding group bg-BodyBg3-0 mb-[4%] px-[15px] lg:px-9 pt-5 lg:pt-9 rounded-[10px] w-[98%] md:w-[48%]'>
              <div className='image-box text-center'>
                <img
                  src={porfolioImg4}
                  draggable='false'
                />
              </div>
              <div className='content-box text-left absolute bottom-[15px] left-0 right-0 bg-BodyBg2-0  w-[calc(100%-30px)] lg:w-[calc(100%-40px) rounded-2xl m-auto p-[15px] md:p-[15px] lg:p-5 md:pr-9 lg:pr-[50px] sm:pr-[50px] opacity-0 transition-all duration-500 translate-y-[15px] bg-gradient-to-l to-PrimaryColor-0 from-Secondarycolor-0 group-hover:opacity-100 group-hover:translate-y-0'>
                <h3 className='portfolio-title font-Sora text-2xl md:[25px] lg:text-3xl font-bold text-white'>
                  Mocknix
                </h3>
                <p className='font-Sora font-light text-white lg:pt-4'>
                  Project was about precision and information.
                </p>
                <span className='text-xl md:text-2xl lg:text-3xl tracking-custom2 absolute top-1/2 right-[10px] md:right-4 lg:right-[25px] -translate-y-1/2 text-white transition-all duration-500 group-hover:rotate-[360deg] group-hover:-translate-y-1/2'>
                  <HiArrowUpRight />
                </span>
                <button
                  ref={portfolioPopUpRef4}
                  className='portfolio-link absolute top-0 left-0 w-full h-full z-10 bg-transparent'
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className='portfolio-popup-content'
          data-lenis-prevent
        >
          <div
            ref={portfolioPopUpContentRef}
            className='portfolio-popup py-[75px]'
          >
            <div>
              <button
                ref={portfolioCloseBtnRef}
                className='absolute right-0 top-[100px] md:right-6 size-[46px] rounded-full bg-gradient-to-tl to-PrimaryColor-0 to-100% from-BodyBg-0 from-10% flex items-center justify-center text-white text-xl group'
              >
                <FaTimes className='transition-all duration-500 group-hover:rotate-180' />
              </button>
            </div>
            <div className='bg-Secondarycolor-0 px-4 sm:px-10 pt-[50px]'>
              <img
                src={modalThumb}
                draggable='false'
              />
            </div>
            <div className='bg-white'>
              <div className='px-4 sm:px-10 pt-[60px] pb-[50px]'>
                <div className='grid grid-cols-1 md:grid-cols-2 items-start gap-7'>
                  <div>
                    <h2 className='font-Sora font-bold text-TextDark-0 text-3xl sm:text-4xl md:text-[45px] leading-[52px]'>
                      DStudio
                    </h2>
                    <p className='font-Sora text-TextDark-0 pt-[14px] pb-5'>
                      {`They are was greater open above shelter lets itself under appear
                      sixth open gathering made upon can't own above midst gathering
                      gathered he one us saying can't divide.`}
                    </p>
                    <div className='inline-block'>
                      <Link
                        to={'/'}
                        className='header-btn group'
                      >
                        <button>
                          Live Preview
                          <span className='transition-all duration-500 group-hover:rotate-45'>
                            <HiArrowUpRight />
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className='grid grid-cols-2 items-center gap-y-5 md:gap-y-[6px]'>
                    <div>
                      <p className='font-Sora text-TextDark-0 tracking-wide'>
                        Category
                      </p>
                      <h6 className='font-Sora text-TextDark-0 font-medium pt-[6px]'>
                        Web Design
                      </h6>
                    </div>
                    <div>
                      <p className='font-Sora text-TextDark-0 tracking-wide'>
                        Start Date
                      </p>
                      <h6 className='font-Sora text-TextDark-0 font-medium pt-[6px]'>
                        August 20, 2024
                      </h6>
                    </div>
                    <div>
                      <p className='font-Sora text-TextDark-0 tracking-wide'>
                        Client
                      </p>
                      <h6 className='font-Sora text-TextDark-0 font-medium pt-[6px]'>
                        Artboard Studio
                      </h6>
                    </div>
                    <div>
                      <p className='font-Sora text-TextDark-0 tracking-wide'>
                        Designer
                      </p>
                      <h6 className='font-Sora text-TextDark-0 font-medium pt-[6px]'>
                        Theme Junction
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Swiper
                  {...settings}
                  pagination={pagination}
                  modules={[Pagination]}
                >
                  <SwiperSlide>
                    <div className='pb-9'>
                      <img src={popUpSliderThumb} />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='pb-9'>
                      <img src={popUpSliderThumb2} />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='pb-9'>
                      <img src={popUpSliderThumb3} />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='pb-9'>
                      <img src={popUpSliderThumb4} />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='pb-9'>
                      <img src={popUpSliderThumb3} />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className='px-4 sm:px-10 pt-[41px]'>
                <h2 className='font-Sora font-bold text-TextDark-0 text-2xl sm:text-4xl md:text-[45px]'>
                  Project Description
                </h2>
                <p className='font-Sora text-TextDark-0 pt-1 pb-4'>
                  {`The goal is there are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable`}
                </p>
                <p className='font-Sora text-TextDark-0 pb-5'>
                  {`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`}
                </p>
                <div className='grid grid-cols-1 md:grid-cols-3 pt-4'>
                  <div className='col-span-1 pt-3'>
                    <h5 className='font-Sora font-bold text-xl text-TextDark-0 uppercase'>
                      The story
                    </h5>
                  </div>
                  <div className='col-span-1 md:col-span-2'>
                    <p className='font-Sora text-TextDark-0 pt-[14px] pb-5 2xl:mr-24 pr-[6px]'>
                      {`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`}
                    </p>
                  </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 pt-4'>
                  <div className='col-span-1 pt-3'>
                    <h5 className='font-Sora font-bold text-xl text-TextDark-0 uppercase'>
                      OUR APPROACH
                    </h5>
                  </div>
                  <div className='col-span-1 md:col-span-2'>
                    <p className='font-Sora text-TextDark-0 pt-[14px] pb-5 2xl:mr-24 pr-[6px]'>
                      {`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`}
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col sm:flex-row justify-between sm:items-center gap-6 bg-PrimaryColor-0 px-4 sm:px-[52px] py-[38px] mt-7'>
                <div>
                  <Link
                    to={'/'}
                    className='flex items-end gap-4 group'
                  >
                    <span className='text-white pb-2'>
                      <HiArrowUpRight
                        size={'28'}
                        className='-rotate-90 transition-all duration-500 group-hover:-rotate-[135deg]'
                      />
                    </span>
                    <span className='flex flex-col'>
                      <span className='font-Sora text-white tracking-wide font-light'>
                        Previous Project
                      </span>
                      <span className='font-Sora font-bold text-white text-3xl sm:text-4xl md:text-[45px] leading-10 pt-2'>
                        Sebastian
                      </span>
                    </span>
                  </Link>
                </div>
                <div className='flex justify-end'>
                  <Link
                    to={'/'}
                    className='flex items-end gap-4 group'
                  >
                    <span className='flex flex-col text-end'>
                      <span className='font-Sora text-white tracking-wide font-light'>
                        Next Project
                      </span>
                      <span className='font-Sora font-bold text-white text-3xl sm:text-4xl md:text-[45px] leading-10 pt-2'>
                        Qwillo
                      </span>
                    </span>
                    <span className='text-white pb-2'>
                      <HiArrowUpRight
                        size={'28'}
                        className='rotate-0 transition-all duration-500 group-hover:rotate-45'
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={portfolioBodyOverlayRef}
          className='popup-body-overlay'
        ></div>
      </div>
    </>
  );
};

export default Portfolio;
