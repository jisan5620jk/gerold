import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { HiArrowUpRight } from 'react-icons/hi2';
import { FaTimes } from 'react-icons/fa';
import modalThumb from '/images/services/modal-img.jpg';
import icon from '/images/services/popup-icon.png';
import './service.css'
import { FiCheck } from 'react-icons/fi';

const Service = () => {
  useEffect(() => {
    const activeBg = document.querySelector('.active-bg');
    const serviceItems = document.querySelectorAll('.service-item');
    const servicesWidget = document.querySelector('.service-widget');

    if (!activeBg || !serviceItems.length || !servicesWidget) {
      console.error('Required elements are not found in the DOM.');
      return;
    }

    let element = document.querySelector('.active');

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

      activeBg.style.top = `${topOff - menuTop}px`;
      activeBg.style.height = `${height}px`;
    };

    serviceItems.forEach((item) => {
      item.addEventListener('mouseenter', () => activeService(activeBg, item));
    });

    servicesWidget.addEventListener('mouseleave', () => {
      element = document.querySelector('.active');
      activeService(activeBg, element);
      Array.from(element.closest('.service-item').parentNode.children).forEach(
        (sibling) => {
          if (sibling !== element.closest('.service-item')) {
            sibling.classList.remove('mleave');
          }
        }
      );
    });

    activeService(activeBg, element);

    document.querySelectorAll('.service-item').forEach((item) => {
      item.addEventListener('click', () => {
        document
          .querySelectorAll('.service-item')
          .forEach((item) => item.classList.remove('active'));
        item.classList.add('active');
      });
    });
  }, []);
  const servicePopUpRef = useRef(null);
  const popUpContentRef = useRef(null);
  const bodyOverlayRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const servicePopUp = servicePopUpRef.current;
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

    if (servicePopUp && popUpContent && bodyOverlay && closeBtn) {
      servicePopUp.addEventListener('click', addClasses);
      closeBtn.addEventListener('click', removeClasses);
      bodyOverlay.addEventListener('click', removeClasses);
    }

    return () => {
      if (servicePopUp && popUpContent && bodyOverlay && closeBtn) {
        servicePopUp.removeEventListener('click', addClasses);
        closeBtn.removeEventListener('click', removeClasses);
        bodyOverlay.removeEventListener('click', removeClasses);
      }
    };
  }, []);
  return (
    <>
      {' '}
      <section className=' bg-BodyBg2-0 py-[120px] relative'>
        <div className='Container'>
          <div className='text-center'>
            <h1 className='font-Sora text-[45px] font-bold bg-gradient-to-r from-PrimaryColor-0 to-white bg-clip-text text-transparent'>
              My Quality Services
            </h1>
            <p className='font-Sora text-TextColor-0 mt-4'>
              We put your ideas and thus your wishes in the form of a unique web
              project that <br /> inspires you and you customers.
            </p>
          </div>
          <div className='relative z-10 mt-[60px] service-widget'>
            <div className='service-item active grid grid-cols-12 relative z-20 overflow-hidden group border-b border-Secondarycolor-0 py-8 pl-8 pr-[56px]'>
              <div className='col-span-5 flex items-center gap-5'>
                <h6 className='service-number font-Sora font-bold text-xl text-PrimaryColor-0 uppercase transition-all duration-500'>
                  01
                </h6>
                <h4 className='font-Sora font-bold text-xl sm:text-2xl lg:text-3xl text-white'>
                  Branding Design
                </h4>
              </div>
              <div className='col-span-7 flex items-center justify-between max-w-[490px] w-full'>
                <p className='font-Sora text-TextColor-0'>
                  I break down complex user experinece problems to create
                  integritiy focussed solutions that connect billions of people
                </p>
              </div>
              <div className='absolute top-1/2 -translate-y-1/2 right-8 inline-block'>
                <Link
                  to={'/service'}
                  className='inline-block relative'
                >
                  <button className='text-3xl text-PrimaryColor-0 service-icon transition-all duration-500 rotate-90'>
                    <HiArrowUpRight />
                  </button>
                </Link>
              </div>
              <button
                ref={servicePopUpRef}
                className='bg-transparent absolute top-0 left-0 w-full h-full border-none outline-none'
              ></button>
            </div>
            <div className='active-bg absolute top-0 left-0 right-0 bottom-0 z-10 bg-PrimaryColor-0 bg-gradient-to-r to-Secondarycolor-0 from-PrimaryColor-0 transition-all duration-500'></div>
          </div>
        </div>
      </section>
      <div>
        <div className='service-popup-content'>
          <div
            ref={popUpContentRef}
            className='service-popup'
          >
            <div>
              <button
                ref={closeBtnRef}
                className='absolute -top-5 -right-5 size-[46px] rounded-full bg-gradient-to-tl to-PrimaryColor-0 to-100% from-BodyBg-0 from-10% flex items-center justify-center text-white text-xl group'
              >
                <FaTimes className='transition-all duration-500 group-hover:rotate-180' />
              </button>
            </div>
            <div>
              <img
                src={modalThumb}
                draggable='false'
              />
            </div>
            <div>
              <div>
                <h5>SERVICES</h5>
                <h2>UI/UX Design</h2>
                <p>
                  Elizabeth some dodgy chavs are you taking the piss faff about
                  pardon amongst car boot a load of old tosh is cracking goal
                  blow off telling brown.
                </p>
                <p>
                  Brolly show off show off pick your nose and blow off well A
                  bit of how’s your father tomfoolery blimey, me old mucker
                  starkers Queen’s English dropped a clanger bite your arm
                  spiffing good time burke Why chancer. Hotpot bum bag cracking
                  goal young delinquent naff bugger cup of chars bender loo it’s
                  all gone to pot the nancy cheeky.
                </p>
                <p>
                  At public school cras bog some dodgy chav Richard Why argy
                  bargy vagabon William bender matie boy, off his nut chancer
                  Jeffrey up the kyver say mufty you mug ummm telling pear
                  shaped Oxford owt to do with me do one so said are you taking
                  his.
                </p>
                <h3>Services Process</h3>
                <p>
                  Elizabeth some dodgy chavs are you taking the piss faff about
                  pardon amongst car boot a load of old tosh is cracking goal
                  blow off telling brown.
                </p>
                <div>
                  <ul>
                    <li>
                      <FiCheck />
                      Reinvent Your Business to Better
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h5>All Services</h5>
                <ul>
                  <li><button><img src={icon} draggable='false' /></button></li>
                </ul>
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
