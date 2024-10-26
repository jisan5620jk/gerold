import { FaArrowRightLong } from 'react-icons/fa6';
import { useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import modalThumb from '/images/services/modal-img.jpg';
import serviceIcon from '/images/services/service-icon.png';
import serviceIcon2 from '/images/services/service-icon2.png';
import serviceIcon3 from '/images/services/service-icon3.png';
import serviceIcon4 from '/images/services/service-icon4.png';
import icon from '/images/services/popup-icon.png';
import icon2 from '/images/services/popup-icon2.png';
import icon3 from '/images/services/popup-icon3.png';
import icon4 from '/images/services/popup-icon4.png';
import icon5 from '/images/services/popup-icon5.png';
import './service.css';
import { FiCheck } from 'react-icons/fi';
import { FaAngleRight } from 'react-icons/fa6';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';


const ServiceInnerLight = () => {
   const servicePopUpRef = useRef(null);
   const servicePopUpRef2 = useRef(null);
   const servicePopUpRef3 = useRef(null);
   const servicePopUpRef4 = useRef(null);
   const servicePopUpContentRef = useRef(null);
   const serviceBodyOverlayRef = useRef(null);
   const serviceCloseBtnRef = useRef(null);

   useEffect(() => {
     const servicePopUp = servicePopUpRef.current;
     const servicePopUp2 = servicePopUpRef2.current;
     const servicePopUp3 = servicePopUpRef3.current;
     const servicePopUp4 = servicePopUpRef4.current;
     const servicePopUpContent = servicePopUpContentRef.current;
     const serviceBodyOverlay = serviceBodyOverlayRef.current;
     const closeBtn = serviceCloseBtnRef.current;

     const addClasses = () => {
       if (servicePopUpContent && serviceBodyOverlay) {
         servicePopUpContent.classList.add('opened');
         serviceBodyOverlay.classList.add('apply');
       }
     };

     const removeClasses = () => {
       if (servicePopUpContent && serviceBodyOverlay) {
         servicePopUpContent.classList.remove('opened');
         serviceBodyOverlay.classList.remove('apply');
       }
     };

     // Add listeners for all popups
     if (servicePopUp) servicePopUp.addEventListener('click', addClasses);
     if (servicePopUp2) servicePopUp2.addEventListener('click', addClasses);
     if (servicePopUp3) servicePopUp3.addEventListener('click', addClasses);
     if (servicePopUp4) servicePopUp4.addEventListener('click', addClasses);

     if (closeBtn) closeBtn.addEventListener('click', removeClasses);
     if (serviceBodyOverlay)
       serviceBodyOverlay.addEventListener('click', removeClasses);

     return () => {
       // Remove listeners for all popups
       if (servicePopUp) servicePopUp.removeEventListener('click', addClasses);
       if (servicePopUp2)
         servicePopUp2.removeEventListener('click', addClasses);
       if (servicePopUp3)
         servicePopUp3.removeEventListener('click', addClasses);
       if (servicePopUp4)
         servicePopUp4.removeEventListener('click', addClasses);

       if (closeBtn) closeBtn.removeEventListener('click', removeClasses);
       if (serviceBodyOverlay)
         serviceBodyOverlay.removeEventListener('click', removeClasses);
     };
   }, []);

  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'Services'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Services'}
      />
      <section className='py-[120px] relative z-10 bg-BodyBgLight-0'>
        <div className='Container'>
          <div className='text-center'>
            <h1 className='font-Sora text-[27px] sm:text-[34px] md:text-[45px] font-bold bg-gradient-to-r from-PrimaryColor-0 from-40% via-Secondarycolor-0 via-70% to-Secondarycolor-0 to-40% bg-clip-text text-transparent'>
              Services
            </h1>
            <h6 className='font-Sora text-TextLight-0 uppercase'>
              Offerd Services
            </h6>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10 mt-[50px]'>
            <div className='rounded-[10px] bg-BodyBgLight-0 overflow-hidden group border border-BorderGrey2-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:ease-linear before:duration-300 before:opacity-0 hover:before:opacity-100 before:-z-10'>
              <div className='pt-6 px-6 sm:px-[30px]'>
                <div>
                  <img
                    src={serviceIcon}
                    draggable='false'
                    className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
                  />
                </div>
              </div>
              <div className='px-6 sm:px-[30px] pt-7 pb-9'>
                <div>
                  <button
                    className='font-Sora text-PrimaryColor-0 font-bold text-[22px] transition-all duration-500 group-hover:text-white'
                    ref={servicePopUpRef}
                  >
                    Web Design
                  </button>
                </div>
                <p className='font-Sora text-TextLight-0 pt-2 max-w-[515px] w-full transition-all duration-500 group-hover:text-white'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et do eiusmod tempor
                  incididunt dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className='rounded-[10px] bg-BodyBgLight-0 overflow-hidden group border border-BorderGrey2-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:ease-linear before:duration-300 before:opacity-0 hover:before:opacity-100 before:-z-10'>
              <div className='px-6 sm:px-[30px] pt-7'>
                <div>
                  <img
                    src={serviceIcon2}
                    draggable='false'
                    className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
                  />
                </div>
              </div>
              <div className='p-6 sm:p-[30px]'>
                <div>
                  <button
                    className='font-Sora text-PrimaryColor-0 font-bold text-[22px] transition-all duration-500 group-hover:text-white'
                    ref={servicePopUpRef3}
                  >
                    Product Design
                  </button>
                </div>
                <p className='font-Sora text-TextLight-0 pt-2 max-w-[515px] w-full transition-all duration-500 group-hover:text-white'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et do eiusmod tempor
                  incididunt dolore magna aliqua.
                </p>
              </div>
            </div>
            <div
              className='rounded-[10px] bg-BodyBgLight-0 overflow-hidden group border border-BorderGrey2-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:ease-linear before:duration-300 before:opacity-0 hover:before:opacity-100 before:-z-10'
              data-aos='fade-up'
              data-aos-delay='400'
              data-aos-duration='1000'
            >
              <div className='px-6 sm:px-[30px] pt-7'>
                <div>
                  <img
                    src={serviceIcon3}
                    draggable='false'
                    className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
                  />
                </div>
              </div>
              <div className='p-6 sm:p-[30px]'>
                <div>
                  <button
                    className='font-Sora text-PrimaryColor-0 font-bold text-[22px] transition-all duration-500 group-hover:text-white'
                    ref={servicePopUpRef2}
                  >
                    UI UX Design
                  </button>
                </div>
                <p className='font-Sora text-TextLight-0 pt-2 max-w-[515px] w-full transition-all duration-500 group-hover:text-white'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et do eiusmod tempor
                  incididunt dolore magna aliqua.
                </p>
              </div>
            </div>
            <div
              className='rounded-[10px] bg-BodyBgLight-0 overflow-hidden group border border-BorderGrey2-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:ease-linear before:duration-300 before:opacity-0 hover:before:opacity-100 before:-z-10'
              data-aos='fade-up'
              data-aos-delay='500'
              data-aos-duration='1000'
            >
              <div className='px-6 sm:px-[30px] pt-7'>
                <div>
                  <img
                    src={serviceIcon4}
                    draggable='false'
                    className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
                  />
                </div>
              </div>
              <div className='p-6 sm:p-[30px]'>
                <div>
                  <button
                    className='font-Sora text-PrimaryColor-0 font-bold text-[22px] transition-all duration-500 group-hover:text-white'
                    ref={servicePopUpRef4}
                  >
                    Motion Graphic
                  </button>
                </div>
                <p className='font-Sora text-TextLight-0 pt-2 max-w-[515px] w-full transition-all duration-500 group-hover:text-white'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et do eiusmod tempor
                  incididunt dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className='service-popup-content'>
          <div
            ref={servicePopUpContentRef}
            className='service-popup py-[75px]'
          >
            <div>
              <button
                ref={serviceCloseBtnRef}
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
                <div className='bg-BodyBg-0 rounded-lg px-6 py-7 mb-[30px]'>
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
                      <button className='flex items-center gap-[10px] font-Sora text-white w-full px-5 py-4 rounded-lg bg-transparent relative z-10 before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:bg-PrimaryColor-0 overflow-hidden before:bg-opacity-40 before:-z-10 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 mb-1'>
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
                      <button className='flex items-center gap-[10px] font-Sora text-white w-full px-5 py-4 rounded-lg bg-transparent relative z-10 before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:bg-PrimaryColor-0 overflow-hidden before:bg-opacity-40 before:-z-10 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 mb-1'>
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
                      <button className='flex items-center gap-[10px] font-Sora text-white w-full px-5 py-4 rounded-lg bg-transparent relative z-10 before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:bg-PrimaryColor-0 overflow-hidden before:bg-opacity-40 before:-z-10 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 mb-1'>
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
                      <button className='flex items-center gap-[10px] font-Sora text-white w-full px-5 py-4 rounded-lg bg-transparent relative z-10 before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:bg-PrimaryColor-0 overflow-hidden before:bg-opacity-40 before:-z-10 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 mb-1'>
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
                <div className='bg-BodyBg-0 rounded-lg px-6 pt-7 pb-8'>
                  <h5 className='font-Sora text-white font-bold text-xl uppercase pb-6'>
                    Get In Touch
                  </h5>
                  <form action='https://formspree.io/f/xkgngbnj'>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      placeholder='Name'
                      className='w-full h-[50px] px-5 py-4 rounded-lg bg-BodyBg2-0 border border-BorderColor-0 text-white transition-all duration-500 hover:border-PrimaryColor-0 outline-none mb-3'
                      required
                    />
                    <input
                      type='email'
                      name='email'
                      id='email'
                      placeholder='E-Mail'
                      className='w-full h-[50px] px-5 py-4 rounded-lg bg-BodyBg2-0 border border-BorderColor-0 text-white transition-all duration-500 hover:border-PrimaryColor-0 outline-none mb-3'
                      required
                    />
                    <textarea
                      name='message'
                      id='message'
                      placeholder='Message'
                      className='w-full h-[150px] px-5 py-4 rounded-lg bg-BodyBg2-0 border border-BorderColor-0 text-white transition-all duration-500 hover:border-PrimaryColor-0 outline-none resize-none mb-2'
                    ></textarea>
                    <div className='header-btn w-full'>
                      <button
                        type='submit'
                        className='w-full'
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
          ref={serviceBodyOverlayRef}
          className='popup-body-overlay'
        ></div>
      </div>
    </>
  );
};

export default ServiceInnerLight;
