import { useEffect, useRef } from 'react';
import Isotope from 'isotope-layout';
import porfolioImg from '/images/portfolio/1.jpg'
import porfolioImg2 from '/images/portfolio/2.jpg'
import porfolioImg3 from '/images/portfolio/3.jpg'
import porfolioImg4 from '/images/portfolio/4.jpg'
import modalThumb from '/images/portfolio/modal-img.jpg';
import { HiArrowUpRight } from 'react-icons/hi2';
import './portfolio.css'
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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

  return (
    <>
      <div className='portfolio-filter text-center bg-BodyBg-0 py-28'>
        <div className='text-center mb-[60px]'>
          <h1 className='font-Sora text-[45px] font-bold bg-gradient-to-r from-PrimaryColor-0 to-white bg-clip-text text-transparent'>
            My Recent Works
          </h1>
          <p className='font-Sora text-TextColor-0 mt-2'>
            We put your ideas and thus your wishes in the form of a unique web
            project that <br /> inspires you and you customers.
          </p>
        </div>
        <div className='Container'>
          <div className='button-group filter-button-group relative z-10 inline-block px-2 py-[6px] rounded-full bg-BodyBg2-0'>
            <button
              data-filter='*'
              className='active py-2 px-[25px] rounded-full relative z-10 font-Sora text-[15px] text-white bg-transparent capitalize tracking-custom2'
            >
              All
            </button>
            <button
              data-filter='.uxui'
              className='py-2 px-[25px] rounded-full relative z-10 font-Sora text-[15px] text-white bg-transparent capitalize tracking-custom2'
            >
              UX/UI
            </button>
            <button
              data-filter='.branding'
              className='py-2 px-[25px] rounded-full relative z-10 font-Sora text-[15px] text-white bg-transparent capitalize tracking-custom2'
            >
              Branding
            </button>
            <button
              data-filter='.mobile-app'
              className='py-2 px-[25px] rounded-full relative z-10 font-Sora text-[15px] text-white bg-transparent capitalize tracking-custom2'
            >
              Apps
            </button>
            <div className='portfolio-active-bg rounded-full top-0 left-0 bottom-0 right-0 absolute -z-10 bg-gradient-to-l to-PrimaryColor-0 from-Secondarycolor-0 transition-all duration-500'></div>
          </div>
          <div className='portfolio-box text-center pt-[50px] bg-contain bg-no-repeat bg-center relative z-10 before:absolute before:top-1/2 before:left-1/2 before:w-[35%] before:h-[35%] before:-z-10 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-PrimaryColor-0 before:bg-gradient-to-r before:to-PrimaryColor-0 before:from-Secondarycolor-0 before:blur-[150px]'>
            <div className='portfolio-sizer w-[98%] md:w-[48%]'></div>
            <div className='gutter-sizer w-[4%]'></div>
            <div className='portfolio-item branding group bg-BodyBg2-0 mb-[4%] px-9 pt-9 rounded-[10px] w-[98%] md:w-[48%]'>
              <div className='image-box text-center'>
                <img
                  src={porfolioImg}
                  draggable='false'
                />
              </div>
              <div className='content-box text-left absolute bottom-[15px] left-0 right-0 bg-BodyBg2-0 w-[calc(100%-40px)] rounded-2xl m-auto p-5 pr-[50px] opacity-0 transition-all duration-500 translate-y-[15px] bg-gradient-to-l to-PrimaryColor-0 from-Secondarycolor-0 group-hover:opacity-100 group-hover:translate-y-0'>
                <h3 className='portfolio-title font-Sora text-3xl font-bold text-white'>
                  Deloitte
                </h3>
                <p className='font-Sora font-light text-white pt-4'>
                  Project was about precision and information.
                </p>
                <span className='text-3xl tracking-custom2 absolute top-1/2 right-[25px] -translate-y-1/2 text-white transition-all duration-500 group-hover:rotate-[360deg] group-hover:-translate-y-1/2'>
                  <HiArrowUpRight />
                </span>
                <button
                  ref={portfolioPopUpRef}
                  className='portfolio-link absolute top-0 left-0 w-full h-full z-10 bg-transparent'
                ></button>
              </div>
            </div>
            <div className='portfolio-item uxui group bg-BodyBg2-0 mb-[4%] px-9 pt-9 rounded-[10px] w-[98%] md:w-[48%]'>
              <div className='image-box text-center'>
                <img
                  src={porfolioImg2}
                  draggable='false'
                />
              </div>
              <div className='content-box text-left absolute bottom-[15px] left-0 right-0 bg-BodyBg2-0 w-[calc(100%-40px)] rounded-2xl m-auto p-5 pr-[50px] opacity-0 transition-all duration-500 translate-y-[15px] bg-gradient-to-l to-PrimaryColor-0 from-Secondarycolor-0 group-hover:opacity-100 group-hover:translate-y-0'>
                <h3 className='portfolio-title font-Sora text-3xl font-bold text-white'>
                  Deloitte
                </h3>
                <p className='font-Sora font-light text-white pt-4'>
                  Project was about precision and information.
                </p>
                <span className='text-3xl tracking-custom2 absolute top-1/2 right-[25px] -translate-y-1/2 text-white transition-all duration-500 group-hover:rotate-[360deg] group-hover:-translate-y-1/2'>
                  <HiArrowUpRight />
                </span>
                <button
                  ref={portfolioPopUpRef2}
                  className='portfolio-link absolute top-0 left-0 w-full h-full z-10 bg-transparent'
                ></button>
              </div>
            </div>
            <div className='portfolio-item mobile-app group bg-BodyBg2-0 mb-[4%] px-9 pt-9 rounded-[10px] w-[98%] md:w-[48%]'>
              <div className='image-box text-center'>
                <img
                  src={porfolioImg3}
                  draggable='false'
                />
              </div>
              <div className='content-box text-left absolute bottom-[15px] left-0 right-0 bg-BodyBg2-0 w-[calc(100%-40px)] rounded-2xl m-auto p-5 pr-[50px] opacity-0 transition-all duration-500 translate-y-[15px] bg-gradient-to-l to-PrimaryColor-0 from-Secondarycolor-0 group-hover:opacity-100 group-hover:translate-y-0'>
                <h3 className='portfolio-title font-Sora text-3xl font-bold text-white'>
                  Deloitte
                </h3>
                <p className='font-Sora font-light text-white pt-4'>
                  Project was about precision and information.
                </p>
                <span className='text-3xl tracking-custom2 absolute top-1/2 right-[25px] -translate-y-1/2 text-white transition-all duration-500 group-hover:rotate-[360deg] group-hover:-translate-y-1/2'>
                  <HiArrowUpRight />
                </span>
                <button
                  ref={portfolioPopUpRef3}
                  className='portfolio-link absolute top-0 left-0 w-full h-full z-10 bg-transparent'
                ></button>
              </div>
            </div>
            <div className='portfolio-item branding group bg-BodyBg2-0 mb-[4%] px-9 pt-9 rounded-[10px] w-[98%] md:w-[48%]'>
              <div className='image-box text-center'>
                <img
                  src={porfolioImg4}
                  draggable='false'
                />
              </div>
              <div className='content-box text-left absolute bottom-[15px] left-0 right-0 bg-BodyBg2-0 w-[calc(100%-40px)] rounded-2xl m-auto p-5 pr-[50px] opacity-0 transition-all duration-500 translate-y-[15px] bg-gradient-to-l to-PrimaryColor-0 from-Secondarycolor-0 group-hover:opacity-100 group-hover:translate-y-0'>
                <h3 className='portfolio-title font-Sora text-3xl font-bold text-white'>
                  Deloitte
                </h3>
                <p className='font-Sora font-light text-white pt-4'>
                  Project was about precision and information.
                </p>
                <span className='text-3xl tracking-custom2 absolute top-1/2 right-[25px] -translate-y-1/2 text-white transition-all duration-500 group-hover:rotate-[360deg] group-hover:-translate-y-1/2'>
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
        <div className='portfolio-popup-content'>
          <div
            ref={portfolioPopUpContentRef}
            className='portfolio-popup py-[75px]'
          >
            <div>
              <button
                ref={portfolioCloseBtnRef}
                className='absolute top-[100px] right-6 size-[46px] rounded-full bg-gradient-to-tl to-PrimaryColor-0 to-100% from-BodyBg-0 from-10% flex items-center justify-center text-white text-xl group'
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
            <div className='bg-white px-4 sm:px-10 pt-[60px] pb-[50px]'>
              <div className='grid grid-cols-1 md:grid-cols-2 items-start gap-7'>
                <div>
                  <h2 className='font-Sora font-bold text-TextDark-0 text-4xl pt-1'>
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
                <div className='grid grid-cols-2 items-center gap-y-[6px]'>
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
