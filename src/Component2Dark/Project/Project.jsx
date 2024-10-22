import { HiArrowUpRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import popUpSliderThumb from '/images/portfolio-gallery/p-gallery-1.jpg';
import popUpSliderThumb2 from '/images/portfolio-gallery/p-gallery-2.jpg';
import popUpSliderThumb3 from '/images/portfolio-gallery/p-gallery-3.jpg';
import popUpSliderThumb4 from '/images/portfolio-gallery/p-gallery-4.jpg';
import modalThumb from '/images/portfolio/modal-img.jpg';
import profile from '/images/project/project-1.png';
import projectThumb from '/images/project/project-2.png';
import projectThumb2 from '/images/project/project-3.png';
import projectThumb3 from '/images/project/project-4.png';
import './project.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';

const Project = () => {
  //Pop Up
  const projectPopUpRef = useRef(null);
  const projectPopUpRef2 = useRef(null);
  const projectPopUpRef3 = useRef(null);
  const projectPopUpContentRef = useRef(null);
  const projectBodyOverlayRef = useRef(null);
  const projectCloseBtnRef = useRef(null);

  useEffect(() => {
    const projectPopUp = projectPopUpRef.current;
    const projectPopUp2 = projectPopUpRef2.current;
    const projectPopUp3 = projectPopUpRef3.current;
    const projectPopUpContent = projectPopUpContentRef.current;
    const projectBodyOverlay = projectBodyOverlayRef.current;
    const closeBtn = projectCloseBtnRef.current;

    const addClasses = () => {
      if (projectPopUpContent && projectBodyOverlay) {
        projectPopUpContent.classList.add('opened');
        projectBodyOverlay.classList.add('apply');
      }
    };

    const removeClasses = () => {
      if (projectPopUpContent && projectBodyOverlay) {
        projectPopUpContent.classList.remove('opened');
        projectBodyOverlay.classList.remove('apply');
      }
    };

    // Add listeners for all popups
    if (projectPopUp) projectPopUp.addEventListener('click', addClasses);
    if (projectPopUp2) projectPopUp2.addEventListener('click', addClasses);
    if (projectPopUp3) projectPopUp3.addEventListener('click', addClasses);

    if (closeBtn) closeBtn.addEventListener('click', removeClasses);
    if (projectBodyOverlay)
      projectBodyOverlay.addEventListener('click', removeClasses);

    return () => {
      // Remove listeners for all popups
      if (projectPopUp) projectPopUp.removeEventListener('click', addClasses);
      if (projectPopUp2) projectPopUp2.removeEventListener('click', addClasses);
      if (projectPopUp3) projectPopUp3.removeEventListener('click', addClasses);

      if (closeBtn) closeBtn.removeEventListener('click', removeClasses);
      if (projectBodyOverlay)
        projectBodyOverlay.removeEventListener('click', removeClasses);
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
      <section className='bg-BodyBg-0'>
        <div className='Container'>
          <div>
            <h1
              className='font-Sora text-[27px] sm:text-[34px] md:text-[45px] leading-[54px] font-medium bg-gradient-to-r from-PrimaryColor-0 from-10% via-white via-60% md:via-30% to-white to-90% bg-clip-text text-transparent'
              data-aos='fade-up'
              data-aos-duration='1000'
              data-aos-delay='400'
            >
              Recent Projects
            </h1>
          </div>
          <div className='flex flex-col md:flex-row items-center gap-[35px] justify-between py-5 pl-5 sm:pl-[35px] pr-5 border border-Secondarycolor-0 bg-BodyBg3-0 rounded-2xl mt-[50px]'>
            <div className='md:max-w-[380px] w-full'>
              <h6 className='font-Sora text-PrimaryColor-0'>Social App</h6>
              <div className='mt-4 mb-5'>
                <button
                  ref={projectPopUpRef}
                  className='font-Sora font-semibold text-3xl text-white transition-all duration-500 hover:text-PrimaryColor-0'
                >
                  Deloitte
                </button>
              </div>
              <p className='font-Sora text-TextColor-0'>
                Project was about precision and information. That’s all. Our
                design tem helps clients achieve their marketing Trager and
                branding that appeals to a website
              </p>
              <ul className='flex items-center flex-wrap gap-2 mt-[50px] mb-[50px]'>
                <li>
                  <Link to={'#'}>
                    <button className='font-Sora font- px-[10px] py-[3px] rounded-full text-white bg-Secondarycolor-0 relative z-10 overflow-hidden ease-linear duration-500 hover:bg-PrimaryColor-0'>
                      Branding
                    </button>
                  </Link>
                </li>{' '}
                <li>
                  <Link to={'#'}>
                    <button className='font-Sora font- px-[10px] py-[3px] rounded-full text-white bg-Secondarycolor-0 relative z-10 overflow-hidden ease-linear duration-500 hover:bg-PrimaryColor-0'>
                      Graphic Design
                    </button>
                  </Link>
                </li>{' '}
                <li>
                  <Link to={'#'}>
                    <button className='font-Sora font- px-[10px] py-[3px] rounded-full text-white bg-Secondarycolor-0 relative z-10 overflow-hidden ease-linear duration-500 hover:bg-PrimaryColor-0'>
                      User Stories
                    </button>
                  </Link>
                </li>
              </ul>
              <p className='font-Sora text-TextColor-0'>
                “The service was excellent. Template example is the next killer
                app.”
              </p>
              <div className='flex items-center gap-[25px] mt-4'>
                <div>
                  <img
                    src={profile}
                    draggable='false'
                  />
                </div>
                <div>
                  <h6 className='font-Sora text-sm font-medium text-PrimaryColor-0'>
                    Jeremy Doughlas
                  </h6>
                  <p className='font-Sora text-sm text-TextGrey2-0 pt-1'>
                    UI & UX designer
                  </p>
                </div>
              </div>
            </div>
            <div className='h-auto py-[30px] px-[25px] bg-BodyBg4-0 rounded-2xl'>
              <img
                src={projectThumb}
                draggable='false'
                className='h-full object-cover'
              />
            </div>
          </div>
          <div className='grid grid-cols-12 items-center lg:items-start xl:items-center gap-6 mt-6'>
            <div className='col-span-12 lg:col-span-7 pt-5 pb-9 pl-5 sm:pl-[35px] pr-5 border border-Secondarycolor-0 bg-BodyBg3-0 rounded-2xl'>
              <div className='h-auto pt-[25px] px-[25px] bg-BodyBg4-0 rounded-2xl'>
                <img
                  src={projectThumb2}
                  draggable='false'
                  className='mx-auto h-full object-cover'
                />
              </div>
              <div className='w-full'>
                <h6 className='font-Sora text-PrimaryColor-0 mt-[26px]'>
                  Social App
                </h6>
                <div className='mt-[15px] mb-5'>
                  <button
                    ref={projectPopUpRef2}
                    className='font-Sora font-semibold text-3xl text-white transition-all duration-500 hover:text-PrimaryColor-0'
                  >
                    Raze
                  </button>
                </div>
                <p className='font-Sora text-TextColor-0'>
                  Project was about precision and information. That’s all.
                </p>
                <ul className='flex items-center flex-wrap gap-2 mt-[16px]'>
                  <li>
                    <Link to={'#'}>
                      <button className='font-Sora font- px-[10px] py-[3px] rounded-full text-white bg-Secondarycolor-0 relative z-10 overflow-hidden ease-linear duration-500 hover:bg-PrimaryColor-0'>
                        Branding
                      </button>
                    </Link>
                  </li>{' '}
                  <li>
                    <Link to={'#'}>
                      <button className='font-Sora font- px-[10px] py-[3px] rounded-full text-white bg-Secondarycolor-0 relative z-10 overflow-hidden ease-linear duration-500 hover:bg-PrimaryColor-0'>
                        Graphic Design
                      </button>
                    </Link>
                  </li>{' '}
                  <li>
                    <Link to={'#'}>
                      <button className='font-Sora font- px-[10px] py-[3px] rounded-full text-white bg-Secondarycolor-0 relative z-10 overflow-hidden ease-linear duration-500 hover:bg-PrimaryColor-0'>
                        User Stories
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-span-12 lg:col-span-5 pt-5 pb-9 pl-5 sm:pl-[35px] pr-5 border border-Secondarycolor-0 bg-BodyBg3-0 rounded-2xl'>
              <div className='h-auto lg:h-[344px] xl:h-[346px] pt-[25px] px-[25px] bg-BodyBg4-0 rounded-2xl'>
                <img
                  src={projectThumb3}
                  draggable='false'
                  className='mx-auto h-full object-cover'
                />
              </div>
              <div className='w-full'>
                <h6 className='font-Sora text-PrimaryColor-0 mt-[26px]'>
                  Social App
                </h6>
                <div className='mt-[15px] mb-5'>
                  <button
                    ref={projectPopUpRef3}
                    className='font-Sora font-semibold text-3xl text-white transition-all duration-500 hover:text-PrimaryColor-0'
                  >
                    Quillow
                  </button>
                </div>
                <p className='font-Sora text-TextColor-0'>
                  Project was about precision and information.
                </p>
                <ul className='flex items-center flex-wrap gap-2 mt-[16px]'>
                  <li>
                    <Link to={'#'}>
                      <button className='font-Sora font- px-[10px] py-[3px] rounded-full text-white bg-Secondarycolor-0 relative z-10 overflow-hidden ease-linear duration-500 hover:bg-PrimaryColor-0'>
                        Branding
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={'#'}>
                      <button className='font-Sora font- px-[10px] py-[3px] rounded-full text-white bg-Secondarycolor-0 relative z-10 overflow-hidden ease-linear duration-500 hover:bg-PrimaryColor-0'>
                        Graphic Design
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={'#'}>
                      <button className='font-Sora font- px-[10px] py-[3px] rounded-full text-white bg-Secondarycolor-0 relative z-10 overflow-hidden ease-linear duration-500 hover:bg-PrimaryColor-0'>
                        User Stories
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className='project-popup-content'>
          <div
            ref={projectPopUpContentRef}
            className='project-popup py-[75px]'
          >
            <div>
              <button
                ref={projectCloseBtnRef}
                className='absolute top-20 right-2 sm:top-[100px] sm:right-6 size-[46px] rounded-full bg-gradient-to-tl to-PrimaryColor-0 to-100% from-BodyBg-0 from-10% flex items-center justify-center text-white text-xl group'
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
          ref={projectBodyOverlayRef}
          className='popup-body-overlay'
        ></div>
      </div>
    </>
  );
};

export default Project;
