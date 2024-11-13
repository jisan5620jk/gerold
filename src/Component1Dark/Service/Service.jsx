import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { HiArrowUpRight } from 'react-icons/hi2';
import { FaTimes } from 'react-icons/fa';
import modalThumb from '/images/services/modal-img.jpg';
import icon from '/images/services/popup-icon.png';
import icon2 from '/images/services/popup-icon2.png';
import icon3 from '/images/services/popup-icon3.png';
import icon4 from '/images/services/popup-icon4.png';
import icon5 from '/images/services/popup-icon5.png';
import './service.css';
import { FiCheck } from 'react-icons/fi';
import { FaAngleRight } from 'react-icons/fa6';

const Service = () => {
  useEffect(() => {
    const activeBg = document.querySelector('.service-active-bg');
    const serviceItems = document.querySelectorAll('.service-item');
    const servicesWidget = document.querySelector('.service-widget');

    if (!activeBg || !serviceItems.length || !servicesWidget) {
      console.error('Required elements are not found in the DOM.');
      return;
    }

    const setInitialPosition = () => {
      const activeItem = document.querySelector('.service-item.active');
      if (activeItem) {
        const height = activeItem.offsetHeight;
        activeBg.style.top = `0px`; // Set top position to 0px
        activeBg.style.height = `${height}px`;
      }
    };

    const activeService = (activeBg, e) => {
      if (!e) return;
      const topOff = e.getBoundingClientRect().top + window.scrollY;
      const height = e.offsetHeight;
      const menuTop =
        servicesWidget.getBoundingClientRect().top + window.scrollY;
      e.closest('.service-item').classList.remove('mleave');
      Array.from(e.closest('.service-item').parentNode.children).forEach(
        (sibling) => {
          if (sibling !== e.closest('.service-item')) {
            sibling.classList.add('mleave');
          }
        }
      );
      activeBg.style.top = `${topOff - menuTop}px`; // Update top position on hover
      activeBg.style.height = `${height}px`;
    };

    serviceItems.forEach((item) => {
      item.addEventListener('mouseenter', () => activeService(activeBg, item));
    });

    servicesWidget.addEventListener('mouseleave', () => {
      const element = document.querySelector('.active');
      activeService(activeBg, element);
      Array.from(element.closest('.service-item').parentNode.children).forEach(
        (sibling) => {
          if (sibling !== element.closest('.service-item')) {
            sibling.classList.remove('mleave');
          }
        }
      );
    });

    setInitialPosition(); // Set initial position

    document.querySelectorAll('.service-item').forEach((item) => {
      item.addEventListener('click', () => {
        document
          .querySelectorAll('.service-item')
          .forEach((item) => item.classList.remove('active'));
        item.classList.add('active');
        activeService(activeBg, item); // Update position on click
      });
    });
  }, []);

  const servicePopUpRef = useRef(null);
  const servicePopUpRef2 = useRef(null);
  const servicePopUpRef3 = useRef(null);
  const servicePopUpRef4 = useRef(null);
  const popUpContentRef = useRef(null);
  const bodyOverlayRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const servicePopUp = servicePopUpRef.current;
    const servicePopUp2 = servicePopUpRef2.current;
    const servicePopUp3 = servicePopUpRef3.current;
    const servicePopUp4 = servicePopUpRef4.current;
    const popUpContent = popUpContentRef.current;
    const bodyOverlay = bodyOverlayRef.current;
    const closeBtn = closeBtnRef.current;

    const addClasses = () => {
      popUpContent.classList.add('opened');
      bodyOverlay.classList.add('apply');
    };

    const removeClasses = () => {
      popUpContent.classList.remove('opened');
      bodyOverlay.classList.remove('apply');
    };

    if (
      servicePopUp &&
      servicePopUp2 &&
      servicePopUp3 &&
      servicePopUp4 &&
      popUpContent &&
      bodyOverlay &&
      closeBtn
    ) {
      servicePopUp.addEventListener('click', addClasses);
      servicePopUp2.addEventListener('click', addClasses);
      servicePopUp3.addEventListener('click', addClasses);
      servicePopUp4.addEventListener('click', addClasses);
      closeBtn.addEventListener('click', removeClasses);
      bodyOverlay.addEventListener('click', removeClasses);
    }

    return () => {
      if (
        servicePopUp &&
        servicePopUp2 &&
        servicePopUp3 &&
        servicePopUp4 &&
        popUpContent &&
        bodyOverlay &&
        closeBtn
      ) {
        servicePopUp.removeEventListener('click', addClasses);
        closeBtn.removeEventListener('click', removeClasses);
        bodyOverlay.removeEventListener('click', removeClasses);
      }
    };
  }, []);

  return (
    <>
      <section className=' bg-BodyBg2-0 py-[60px] md:py-20 lg:py-[100px] xl:py-[120px] relative'>
        <div className='Container'>
          <div className='text-center'>
            <h1
              className='font-Sora text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] font-bold bg-gradient-to-l to-PrimaryColor-0 via-PrimaryColor-0 from-white from-35% bg-clip-text text-transparent'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              My Quality Services
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
          <div className='relative z-10 mt-10 md:mt-[50px] service-widget'>
            <div
              className='service-item active grid grid-cols-6 md:grid-cols-12 relative z-20 overflow-hidden group border-b border-Secondarycolor-0 py-6 sm:py-[30px] md:py-5 lg:py-[30px] pr-2 sm:pr-4 pl-6 sm:pl-4 md:pl-5 lg:pl-[30px] md:pr-5 lg:pr-36 xl:pr-[56px]'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='col-span-6 md:col-span-5 flex items-center gap-2 sm:gap-5'>
                <h6 className='service-number font-Sora font-bold text-xl text-PrimaryColor-0 uppercase transition-all duration-500'>
                  01
                </h6>
                <h4 className='font-Sora font-bold text-xl sm:text-2xl lg:text-3xl text-white'>
                  Branding Design
                </h4>
              </div>
              <div className='col-span-6 md:col-span-7 mt-4 md:mt-0 lg:ml-10 xl:ml-0 flex items-center justify-between max-w-[490px] w-full'>
                <p className='font-Sora text-TextColor-0'>
                  I break down complex user experinece problems to create
                  integritiy focussed solutions that connect billions of people
                </p>
              </div>
              <div className='absolute top-7 sm:top-8 md:top-1/2 md:-translate-y-1/2 right-6 sm:right-8 md:right-5 lg:right-8 inline-block'>
                <Link
                  to={'/service'}
                  className='inline-block relative'
                >
                  <button className='text-xl sm:text-3xl text-PrimaryColor-0 service-icon transition-all duration-500 rotate-90'>
                    <HiArrowUpRight />
                  </button>
                </Link>
              </div>
              <button
                ref={servicePopUpRef}
                className='bg-transparent absolute top-0 left-0 w-full h-full border-none outline-none'
              ></button>
            </div>
            <div
              className='service-item grid grid-cols-6 md:grid-cols-12 relative z-20 overflow-hidden group border-b border-Secondarycolor-0 py-6 sm:py-[30px] md:py-5 lg:py-[30px] pr-2 sm:pr-4 pl-6 sm:pl-4 md:pl-5 lg:pl-[30px] md:pr-5 lg:pr-36 xl:pr-[56px]'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='col-span-6 md:col-span-5 flex items-center gap-2 sm:gap-5'>
                <h6 className='service-number font-Sora font-bold text-xl text-PrimaryColor-0 uppercase transition-all duration-500'>
                  02
                </h6>
                <h4 className='font-Sora font-bold text-xl sm:text-2xl lg:text-3xl text-white'>
                  Web Design
                </h4>
              </div>
              <div className='col-span-6 md:col-span-7 mt-4 md:mt-0 lg:ml-10 xl:ml-0 flex items-center justify-between max-w-[490px] w-full'>
                <p className='font-Sora text-TextColor-0'>
                  I break down complex user experinece problems to create
                  integritiy focussed solutions that connect billions of people
                </p>
              </div>
              <div className='absolute top-7 sm:top-8 md:top-1/2 md:-translate-y-1/2 right-6 sm:right-8 md:right-5 lg:right-8 inline-block'>
                <Link
                  to={'/service'}
                  className='inline-block relative'
                >
                  <button className='text-xl sm:text-3xl text-PrimaryColor-0 service-icon transition-all duration-500 rotate-90'>
                    <HiArrowUpRight />
                  </button>
                </Link>
              </div>
              <button
                ref={servicePopUpRef2}
                className='bg-transparent absolute top-0 left-0 w-full h-full border-none outline-none'
              ></button>
            </div>
            <div
              className='service-item grid grid-cols-6 md:grid-cols-12 relative z-20 overflow-hidden group border-b border-Secondarycolor-0 py-6 sm:py-[30px] md:py-5 lg:py-[30px] pr-2 sm:pr-4 pl-6 sm:pl-4 md:pl-5 lg:pl-[30px] md:pr-5 lg:pr-36 xl:pr-[56px]'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='col-span-6 md:col-span-5 flex items-center gap-2 sm:gap-5'>
                <h6 className='service-number font-Sora font-bold text-xl text-PrimaryColor-0 uppercase transition-all duration-500'>
                  03
                </h6>
                <h4 className='font-Sora font-bold text-xl sm:text-2xl lg:text-3xl text-white'>
                  UI/UX Design
                </h4>
              </div>
              <div className='col-span-6 md:col-span-7 mt-4 md:mt-0 lg:ml-10 xl:ml-0 flex items-center justify-between max-w-[490px] w-full'>
                <p className='font-Sora text-TextColor-0'>
                  I break down complex user experinece problems to create
                  integritiy focussed solutions that connect billions of people
                </p>
              </div>
              <div className='absolute top-7 sm:top-8 md:top-1/2 md:-translate-y-1/2 right-6 sm:right-8 md:right-5 lg:right-8 inline-block'>
                <Link
                  to={'/service'}
                  className='inline-block relative'
                >
                  <button className='text-xl sm:text-3xl text-PrimaryColor-0 service-icon transition-all duration-500 rotate-90'>
                    <HiArrowUpRight />
                  </button>
                </Link>
              </div>
              <button
                ref={servicePopUpRef3}
                className='bg-transparent absolute top-0 left-0 w-full h-full border-none outline-none'
              ></button>
            </div>
            <div
              className='service-item grid grid-cols-6 md:grid-cols-12 relative z-20 overflow-hidden group border-b border-Secondarycolor-0 py-6 sm:py-[30px] md:py-5 lg:py-[30px] pr-2 sm:pr-4 pl-6 sm:pl-4 md:pl-5 lg:pl-[30px] md:pr-5 lg:pr-36 xl:pr-[56px]'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='col-span-6 md:col-span-5 flex items-center gap-2 sm:gap-5'>
                <h6 className='service-number font-Sora font-bold text-xl text-PrimaryColor-0 uppercase transition-all duration-500'>
                  04
                </h6>
                <h4 className='font-Sora font-bold text-xl sm:text-2xl lg:text-3xl text-white'>
                  Graphics Design
                </h4>
              </div>
              <div className='col-span-6 md:col-span-7 mt-4 md:mt-0 lg:ml-10 xl:ml-0 flex items-center justify-between max-w-[490px] w-full'>
                <p className='font-Sora text-TextColor-0'>
                  I break down complex user experinece problems to create
                  integritiy focussed solutions that connect billions of people
                </p>
              </div>
              <div className='absolute top-7 sm:top-8 md:top-1/2 md:-translate-y-1/2 right-6 sm:right-8 md:right-5 lg:right-8 inline-block'>
                <Link
                  to={'/service'}
                  className='inline-block relative'
                >
                  <button className='text-xl sm:text-3xl text-PrimaryColor-0 service-icon transition-all duration-500 rotate-90'>
                    <HiArrowUpRight />
                  </button>
                </Link>
              </div>
              <button
                ref={servicePopUpRef4}
                className='bg-transparent absolute top-0 left-0 w-full h-full border-none outline-none'
              ></button>
            </div>
            <div className='service-active-bg absolute top-0 left-0 right-0 bottom-0 z-10 bg-PrimaryColor-0 bg-gradient-to-r to-Secondarycolor-0 from-PrimaryColor-0 transition-all duration-500'></div>
          </div>
        </div>
      </section>
      <div>
        <div
          className='service-popup-content'
          data-lenis-prevent
        >
          <div
            ref={popUpContentRef}
            className='service-popup py-[75px]'
          >
            <div>
              <button
                ref={closeBtnRef}
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
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-7 bg-white px-4 sm:px-10 pt-[60px] pb-[50px]'>
              <div className='col-span-2'>
                <h5 className='font-Sora text-TextDark-0 font-bold'>
                  SERVICES
                </h5>
                <h2 className='font-Sora text-3xl sm:text-4xl md:text-[45px] text-TextDark-0 font-bold'>
                  UI/UX Design
                </h2>
                <p className='font-Sora text-TextDark-0 pt-1'>
                  Elizabeth some dodgy chavs are you taking the piss faff about
                  pardon amongst car boot a load of old tosh is cracking goal
                  blow off telling brown.
                </p>
                <p className='font-Sora text-TextDark-0 pt-4'>
                  Brolly show off show off pick your nose and blow off well A
                  bit of how’s your father tomfoolery blimey, me old mucker
                  starkers Queen’s English dropped a clanger bite your arm
                  spiffing good time burke Why chancer. Hotpot bum bag cracking
                  goal young delinquent naff bugger cup of chars bender loo it’s
                  all gone to pot the nancy cheeky.
                </p>
                <p className='font-Sora text-TextDark-0 pt-4'>
                  At public school cras bog some dodgy chav Richard Why argy
                  bargy vagabon William bender matie boy, off his nut chancer
                  Jeffrey up the kyver say mufty you mug ummm telling pear
                  shaped Oxford owt to do with me do one so said are you taking
                  his.
                </p>
                <h3 className='font-Sora text-2xl sm:text-3xl text-TextDark-0 font-bold pt-5 pb-2'>
                  Services Process
                </h3>
                <p className='font-Sora text-TextDark-0'>
                  Elizabeth some dodgy chavs are you taking the piss faff about
                  pardon amongst car boot a load of old tosh is cracking goal
                  blow off telling brown.
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-0 items-center mt-5'>
                  <ul>
                    <li className='font-Sora text-sm sm:text-base font-medium text-TextDark-0 flex items-center gap-1 mb-1'>
                      <span className='text-PrimaryColor-0'>
                        <FiCheck size={'20'} />
                      </span>
                      Reinvent Your Business to Better
                    </li>
                    <li className='font-Sora text-sm sm:text-base font-medium text-TextDark-0 flex items-center gap-1 mb-1'>
                      <span className='text-PrimaryColor-0'>
                        <FiCheck size={'20'} />
                      </span>
                      {`Pioneering the Internet's First"`}
                    </li>
                    <li className='font-Sora text-sm sm:text-base font-medium text-TextDark-0 flex items-center gap-1'>
                      <span className='text-PrimaryColor-0'>
                        <FiCheck size={'20'} />
                      </span>
                      {`Pioneering the Design World's First`}
                    </li>
                  </ul>
                  <ul>
                    <li className='font-Sora text-sm sm:text-base font-medium text-TextDark-0 flex items-center gap-1 mb-1'>
                      <span className='text-PrimaryColor-0'>
                        <FiCheck size={'20'} />
                      </span>
                      Reinvent Your Business to Better
                    </li>
                    <li className='font-Sora text-sm sm:text-base font-medium text-TextDark-0 flex items-center gap-1 mb-1'>
                      <span className='text-PrimaryColor-0'>
                        <FiCheck size={'20'} />
                      </span>
                      {`Pioneering the Internet's First"`}
                    </li>
                    <li className='font-Sora text-sm sm:text-base font-medium text-TextDark-0 flex items-center gap-1'>
                      <span className='text-PrimaryColor-0'>
                        <FiCheck size={'20'} />
                      </span>
                      {`Pioneering the Design World's First`}
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-span-2 md:col-span-1'>
                <div className='bg-BodyBg3-0 rounded-lg px-6 py-7 mb-[30px]'>
                  <h5 className='font-Sora text-white font-bold text-xl uppercase pb-6'>
                    All Services
                  </h5>
                  <ul>
                    <li>
                      <button className='flex items-center gap-[10px] font-Sora text-white w-full px-5 py-4 rounded-lg bg-PrimaryColor-0 relative z-10 mb-1'>
                        <img
                          src={icon}
                          draggable='false'
                        />
                        Branding Design
                        <span className='absolute top-1/2 right-4 -translate-y-1/2 text-white text-lg'>
                          <FaAngleRight />
                        </span>
                      </button>
                    </li>
                    <li>
                      <button className='flex items-center gap-[10px] font-Sora text-white w-full px-5 py-4 rounded-lg bg-transparent relative z-10 transition-all duration-300 ease-in hover:bg-Secondarycolor-0 mb-1'>
                        <img
                          src={icon2}
                          draggable='false'
                        />
                        3D Animation
                        <span className='absolute top-1/2 right-4 -translate-y-1/2 text-white text-lg'>
                          <FaAngleRight />
                        </span>
                      </button>
                    </li>
                    <li>
                      <button className='flex items-center gap-[10px] font-Sora text-white w-full px-5 py-4 rounded-lg bg-transparent relative z-10 transition-all duration-300 ease-in hover:bg-Secondarycolor-0 mb-1'>
                        <img
                          src={icon3}
                          draggable='false'
                        />
                        UI/UX Design
                        <span className='absolute top-1/2 right-4 -translate-y-1/2 text-white text-lg'>
                          <FaAngleRight />
                        </span>
                      </button>
                    </li>
                    <li>
                      <button className='flex items-center gap-[10px] font-Sora text-white w-full px-5 py-4 rounded-lg bg-transparent relative z-10 transition-all duration-300 ease-in hover:bg-Secondarycolor-0 mb-1'>
                        <img
                          src={icon4}
                          draggable='false'
                        />
                        Web Design
                        <span className='absolute top-1/2 right-4 -translate-y-1/2 text-white text-lg'>
                          <FaAngleRight />
                        </span>
                      </button>
                    </li>
                    <li>
                      <button className='flex items-center gap-[10px] font-Sora text-white w-full px-5 py-4 rounded-lg bg-transparent relative z-10 transition-all duration-300 ease-in hover:bg-Secondarycolor-0 mb-1'>
                        <img
                          src={icon5}
                          draggable='false'
                        />
                        App Design
                        <span className='absolute top-1/2 right-4 -translate-y-1/2 text-white text-lg'>
                          <FaAngleRight />
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className='bg-BodyBg3-0 rounded-lg px-6 pt-7 pb-8'>
                  <h5 className='font-Sora text-white font-bold text-xl uppercase pb-6'>
                    Get In Touch
                  </h5>
                  <form action='https://formspree.io/f/xkgngbnj'>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      placeholder='Name'
                      className='w-full h-[50px] px-5 py-4 rounded-lg bg-BodyBg2-0 border border-BorderColor-0 text-white transition-all duration-500 hover:border-PrimaryColor-0 outline-none mb-[10px]'
                      required
                    />
                    <input
                      type='email'
                      name='email'
                      id='email'
                      placeholder='E-Mail'
                      className='w-full h-[50px] px-5 py-4 rounded-lg bg-BodyBg2-0 border border-BorderColor-0 text-white transition-all duration-500 hover:border-PrimaryColor-0 outline-none mb-[10px]'
                      required
                    />
                    <textarea
                      name='message'
                      id='message'
                      placeholder='Message'
                      className='w-full h-[150px] px-5 py-4 rounded-lg bg-BodyBg2-0 border border-BorderColor-0 text-white transition-all duration-500 hover:border-PrimaryColor-0 outline-none resize-none mb-1'
                    ></textarea>
                    <div className='header-btn w-full'>
                      <button
                        type='submit'
                        className='w-full !py-5'
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={bodyOverlayRef}
          className='popup-body-overlay'
        ></div>
      </div>
    </>
  );
};

export default Service;
