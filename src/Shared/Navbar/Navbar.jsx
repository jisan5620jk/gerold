import { Link } from 'react-router-dom';
import Logo from '/images/logo/logo.png';
import './navbar.css';
import { useEffect, useRef } from 'react';
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from 'react-icons/fa6';
import { FaPhoneAlt, FaTimes } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import { IoMdPaperPlane } from 'react-icons/io';
import { HiMinusSm, HiPlusSm } from 'react-icons/hi';

const Navbar = () => {

  //Menu Bar
  const menuBarRef = useRef(null);
  const offcanvasRef = useRef(null);
  const bodyOverlayRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const menuBar = menuBarRef.current;
    const offcanvas = offcanvasRef.current;
    const bodyOverlay = bodyOverlayRef.current;
    const closeBtn = closeBtnRef.current;

    const addClasses = () => {
      offcanvas.classList.add('opened');
      bodyOverlay.classList.add('apply');
    };

    const removeClasses = () => {
      offcanvas.classList.remove('opened');
      bodyOverlay.classList.remove('apply');
    };

    if (menuBar && offcanvas && bodyOverlay && closeBtn) {
      menuBar.addEventListener('click', addClasses);
      closeBtn.addEventListener('click', removeClasses);
      bodyOverlay.addEventListener('click', removeClasses);
    }

    return () => {
      if (menuBar && offcanvas && bodyOverlay && closeBtn) {
        menuBar.removeEventListener('click', addClasses);
        closeBtn.removeEventListener('click', removeClasses);
        bodyOverlay.removeEventListener('click', removeClasses);
      }
    };
  }, []);

  let headerIcon = `  
  <span className="header-icon">  
    <svg fill="currentColor" viewBox="0 0 320 512" height="15px" width="15px" xmlns="http://www.w3.org/2000/svg">
      <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
    </svg>
  </span>  
`;

  useEffect(() => {
    const mainMenuContent = document.querySelector('.main-menu-content');
    const mainMenuMobile = document.querySelector('.main-menu-mobile');

    if (mainMenuContent && mainMenuMobile) {
      const navContent = mainMenuContent.outerHTML;
      mainMenuMobile.innerHTML = navContent;

      const arrows = document.querySelectorAll(
        '.main-menu-mobile .has-dropdown > a'
      );

      arrows.forEach((arrow) => {
        const arrowBtn = document.createElement('BUTTON');
        arrowBtn.classList.add('dropdown-toggle-btn');
        arrowBtn.innerHTML = headerIcon;

        arrow.appendChild(arrowBtn);

        arrowBtn.addEventListener('click', (e) => {
          e.preventDefault();
          arrowBtn.classList.toggle('dropdown-opened');
          arrow.parentElement.classList.toggle('expanded');
          arrow.parentElement.parentElement.classList.add('dropdown-opened');
          arrow.parentElement.parentElement
            .querySelectorAll('.submenu')
            .forEach((submenu) => {
              submenu.style.display =
                submenu.style.display === 'block' ? 'none' : 'block';
            });
          arrow.parentElement.parentElement
            .querySelectorAll('.has-dropdown')
            .forEach((sibling) => {
              if (sibling !== arrow.parentElement) {
                sibling.classList.remove('dropdown-opened');
                sibling.querySelectorAll('.submenu').forEach((submenu) => {
                  submenu.style.display = 'none';
                });
              }
            });
        });
      });
    }
  }, [headerIcon]);

  return (
    <>
      <div className='offcanvas-area'>
        <div
          ref={offcanvasRef}
          className='offcanvas'
        >
          <div className='offcanvas_close-btn'>
            <button
              ref={closeBtnRef}
              className='close-btn'
            >
              <FaTimes />
            </button>
          </div>
          <div className='offcanvas_logo inline-block'>
            <Link to={'/'} title='Gerold'>
              <img
                src={Logo}
                draggable='false'
              />
            </Link>
          </div>
          <div className='offcanvas_title'>
            <p>
              Stay healthy with a balanced diet, regular exercise, and enough
              sleep. Manage stress and get regular check-ups.
            </p>
          </div>
          <div className='main-menu-mobile lg:none'></div>
          <div className='offcanvas_contact-info'>
            <div className='offcanvas_contact-title'>
              <h5>Contact Us</h5>
            </div>
            <ul>
              <li>
                <MdLocationPin />
                <Link to={'/'}>Melbone st, Australia, Ny 12099</Link>
              </li>
              <li>
                <FaEnvelope />
                <Link to={'/'}>needhelp@company.com</Link>
              </li>
              <li>
                <FaPhoneAlt />
                <Link to={'/'}>+48 555 223 224</Link>
              </li>
            </ul>
          </div>
          <div className='offcanvas_input'>
            <div className='offcanvas_input-title'>
              <h4>Get Update</h4>
            </div>
            <form
              action='#'
              method='post'
            >
              <div className='relative'>
                <input
                  type='email'
                  name='email'
                  placeholder='Enter E-Mail'
                  required
                />
                <button type='submit'>
                  <IoMdPaperPlane />
                </button>
              </div>
            </form>
            <div className='status'></div>
          </div>
          <div className='offcanvas_social'>
            <div className='social-icon'>
              <Link to={'/'}>
                <FaFacebookF />
              </Link>
              <Link to={'/'}>
                <FaXTwitter />
              </Link>
              <Link to={'/'}>
                <FaPinterestP />
              </Link>
              <Link to={'/'}>
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={bodyOverlayRef}
        className='body-overlay'
      ></div>
      <div
        id='header-sticky'
        className='header-area py-5 lg:py-0'
      >
        <div className='Container'>
          <div className='flex items-center justify-between lg:grid lg:grid-cols-12'>
            <div className='col-span-3'>
              <div className='header-logo inline-block'>
                <ul className='flex items-center gap-9'>
                  <li>
                    <Link to={'/'} title='Gerold'>
                      <img
                        src={Logo}
                        draggable='false'
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to={'/'}>
                      <button className='font-Sora font-medium text-[15px] text-white transition-all duration-500 hover:text-PrimaryColor-0'>
                        mail@gerolddesign.com
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-span-9 hidden lg:flex lg:items-center lg:gap-[32px] lg:justify-end'>
              <div className='header-main-menu text-center'>
                <nav className='main-menu-content'>
                  <ul>
                    <li className='has-dropdown -mr-[26px]'>
                      <Link
                        to={'/'}
                        className='group'
                      >
                        Home{' '}
                        <span className='relative top-0 text-xl transition-all duration-500 group-hover:opacity-0'>
                          <HiPlusSm />
                        </span>
                        <span className='relative top-0 right-6 text-xl transition-all duration-500 opacity-0 group-hover:opacity-100'>
                          <HiMinusSm />
                        </span>
                      </Link>
                      <ul className='submenu'>
                        <li className='has-child-dropdown group'>
                          <Link
                            to={'/'}
                          >
                            Home Page Dark Mode
                            <span className='absolute top-1/2 -translate-y-1/2 right-4 text-xl transition-all duration-500 group-hover:opacity-0'>
                              <HiPlusSm />
                            </span>
                            <span className='absolute top-1/2 -translate-y-1/2 right-4 text-xl transition-all duration-500 opacity-0 group-hover:opacity-100'>
                              <HiMinusSm />
                            </span>
                          </Link>
                          <ul className='child-submenu'>
                            <li>
                              <Link to={'/'}>Home One</Link>
                            </li>
                            <li>
                              <Link to={'/home2'}>Home Two</Link>
                            </li>
                          </ul>
                        </li>
                        <li className='has-child-dropdown group'>
                          <Link
                            to={'/'}
                          >
                            Home Page Light Mode
                            <span className='absolute top-1/2 -translate-y-1/2 right-4 text-xl transition-all duration-500 group-hover:opacity-0'>
                              <HiPlusSm />
                            </span>
                            <span className='absolute top-1/2 -translate-y-1/2 right-4 text-xl transition-all duration-500 opacity-0 group-hover:opacity-100'>
                              <HiMinusSm />
                            </span>
                          </Link>
                          <ul className='child-submenu'>
                            <li>
                              <Link to={'/'}>Home One</Link>
                            </li>
                            <li>
                              <Link to={'/home2'}>Home Two</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                      <Link to={'/'}>Service</Link>
                    </li>
                    <li>
                      <Link to={'/'}>Portfolio</Link>
                    </li>
                    <li className='has-dropdown -mr-[26px]'>
                      <Link
                        to={'/'}
                        className='group'
                      >
                        Blog
                        <span className='relative top-0 text-xl transition-all duration-500 group-hover:opacity-0'>
                          <HiPlusSm />
                        </span>
                        <span className='relative top-0 right-6 text-xl transition-all duration-500 opacity-0 group-hover:opacity-100'>
                          <HiMinusSm />
                        </span>
                      </Link>
                      <ul className='submenu'>
                        <li>
                          <Link to={'/blog_grid'}>blog grid</Link>
                        </li>
                        <li>
                          <Link to={'/blog_details'}>blog details</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to={'/contact'}>Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className='header-right-box flex justify-end'>
                <div className='header-btn hidden lg:block'>
                  <Link to={'/'}>Hire Me!</Link>
                </div>
                <div className='header-bar lg:hidden'>
                  <button
                    ref={menuBarRef}
                    className='menu-bar'
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
