import { useEffect } from 'react';
import Isotope from 'isotope-layout';
import porfolioImg from '/images/portfolio/1.jpg'
import porfolioImg2 from '/images/portfolio/2.jpg'
import porfolioImg3 from '/images/portfolio/3.jpg'
import porfolioImg4 from '/images/portfolio/4.jpg'
import { HiArrowUpRight } from 'react-icons/hi2';

const PortfolioFilter = () => {
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

  return (
    <div className='portfolio-filter text-center bg-BodyBg-0 py-28'>
      <div className='text-center mb-[60px]'>
        <h1 className='font-Sora text-[45px] font-bold bg-gradient-to-r from-PrimaryColor-0 to-white bg-clip-text text-transparent'>
          My Quality Services
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
            className='active py-3 px-[25px] rounded-full relative z-10 font-Sora text-[15px] text-white bg-transparent capitalize tracking-custom2'
          >
            All
          </button>
          <button
            data-filter='.uxui'
            className='py-3 px-[25px] rounded-full relative z-10 font-Sora text-[15px] text-white bg-transparent capitalize tracking-custom2'
          >
            UX/UI
          </button>
          <button
            data-filter='.branding'
            className='py-3 px-[25px] rounded-full relative z-10 font-Sora text-[15px] text-white bg-transparent capitalize tracking-custom2'
          >
            Branding
          </button>
          <button
            data-filter='.mobile-app'
            className='py-3 px-[25px] rounded-full relative z-10 font-Sora text-[15px] text-white bg-transparent capitalize tracking-custom2'
          >
            Apps
          </button>
          <div className='portfolio-active-bg rounded-full top-0 left-0 bottom-0 right-0 absolute -z-10 bg-gradient-to-r to-PrimaryColor-0 from-Secondarycolor-0 transition-all duration-500'></div>
        </div>

        <div className='portfolio-box text-center pt-[50px] bg-contain bg-no-repeat bg-center relative z-10 before:absolute before:top-1/2 before:left-1/2 before:w-[35%] before:h-[35%] before:-z-10 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-PrimaryColor-0 before:bg-gradient-to-r before:to-PrimaryColor-0 before:from-Secondarycolor-0 before:blur-[150px]'>
          <div className='portfolio-sizer w-[48%]'></div>
          <div className='gutter-sizer w-[4%]'></div>
          <div className='portfolio-item branding group bg-BodyBg2-0 mb-[4%] px-9 pt-9 rounded-[10px] w-[48%]'>
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
              <button className='portfolio-link absolute top-0 left-0 w-full h-full z-10 bg-transparent'></button>
            </div>
          </div>
          <div className='portfolio-item uxui group bg-BodyBg2-0 mb-[4%] px-9 pt-9 rounded-[10px] w-[48%]'>
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
              <button className='portfolio-link absolute top-0 left-0 w-full h-full z-10 bg-transparent'></button>
            </div>
          </div>
          <div className='portfolio-item mobile-app group bg-BodyBg2-0 mb-[4%] px-9 pt-9 rounded-[10px] w-[48%]'>
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
              <button className='portfolio-link absolute top-0 left-0 w-full h-full z-10 bg-transparent'></button>
            </div>
          </div>
          <div className='portfolio-item branding group bg-BodyBg2-0 mb-[4%] px-9 pt-9 rounded-[10px] w-[48%]'>
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
              <button className='portfolio-link absolute top-0 left-0 w-full h-full z-10 bg-transparent'></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioFilter;
