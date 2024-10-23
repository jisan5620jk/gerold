import { Link } from 'react-router-dom';
import Logo from '/images/logo/logo.png';
import './navbar.css';
import { useEffect, useRef } from 'react';
import { HiMinusSm, HiPlusSm } from 'react-icons/hi';
import { IoCloseOutline } from 'react-icons/io5';

const ContactNavbar = () => {
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
              <IoCloseOutline />
            </button>
          </div>
          <div className='offcanvas_logo inline-block'>
            <Link
              to={'/'}
              title='Gerold'
            >
              <img
                src={Logo}
                draggable='false'
              />
            </Link>
          </div>
          <div className='main-menu-mobile lg:none'></div>
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
            <div className='col-span-4'>
              <div className='header-logo inline-block'>
                <ul className='flex items-center gap-[35px]'>
                  <li>
                    <Link
                      to={'/'}
                      title='Gerold'
                    >
                      <img
                        src={Logo}
                        draggable='false'
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to={'/'}>
                      <button className='hidden sm:block font-Sora font-medium text-[15px] text-white transition-all duration-500 hover:text-PrimaryColor-0 relative bottom-[1px]'>
                        mail@gerolddesign.com
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-span-8 lg:flex lg:items-center lg:gap-[32px] lg:justify-end'>
              <div className='header-main-menu text-center hidden lg:block'>
                <nav className='main-menu-content'>
                  <ul>
                    <li className='has-dropdown group'>
                      <Link
                        to={'/'}
                        className='!pr-5'
                      >
                        Home{' '}
                        <span className='absolute top-1/2 -translate-y-1/2 -right-[6px] text-[22px] transition-all duration-500 group-hover:opacity-0'>
                          <HiPlusSm />
                        </span>
                        <span className='absolute top-1/2 -translate-y-1/2 -right-[6px] text-[22px] transition-all duration-500 opacity-0 group-hover:opacity-100'>
                          <HiMinusSm />
                        </span>
                      </Link>
                      <ul className='submenu'>
                        <li className='has-dropdown current'>
                          <Link to={'/'}>
                            Dark Mode
                            <span className='absolute top-1/2 -translate-y-1/2 right-4 text-xl transition-all duration-500'>
                              <HiPlusSm />
                            </span>
                            <span className='absolute top-1/2 -translate-y-1/2 right-4 text-xl transition-all duration-500 opacity-0'>
                              <HiMinusSm />
                            </span>
                          </Link>
                          <ul className='submenu'>
                            <li>
                              <Link to={'/'}>Home One</Link>
                            </li>
                            <li>
                              <Link to={'/home2'}>Home Two</Link>
                            </li>
                          </ul>
                        </li>
                        <li className='has-dropdown'>
                          <Link to={'/'}>
                            Light Mode
                            <span className='absolute top-1/2 -translate-y-1/2 right-4 text-xl transition-all duration-500'>
                              <HiPlusSm />
                            </span>
                            <span className='absolute top-1/2 -translate-y-1/2 right-4 text-xl transition-all duration-500 opacity-0'>
                              <HiMinusSm />
                            </span>
                          </Link>
                          <ul className='submenu !top-[58px]'>
                            <li>
                              <Link to={'/home_light'}>Home One</Link>
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
                      <Link to={'/service'}>Services</Link>
                    </li>
                    <li>
                      <Link to={'/'}>Portfolios</Link>
                    </li>
                    <li className='has-dropdown'>
                      <Link
                        to={'/'}
                        className='!pr-5'
                      >
                        Blog
                        <span className='absolute top-1/2 -translate-y-1/2 -right-[6px] text-[22px] transition-all duration-500 group-hover:opacity-0'>
                          <HiPlusSm />
                        </span>
                        <span className='absolute top-1/2 -translate-y-1/2 -right-[6px] text-[22px] transition-all duration-500 opacity-0 group-hover:opacity-100'>
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
                    <li className='current'>
                      <Link to={'/contact'}>Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className='header-right-box flex justify-end'>
                <div className='header-btn !mb-2 !mr-2 sm:!mr-8 lg:!mb-0 lg:!mr-0'>
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

export default ContactNavbar;
