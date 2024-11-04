import { Link } from 'react-router-dom';
import footerLogo from '/images/logo/logo.png';
import { useEffect, useRef } from 'react';

const FooterDark = () => {
  const yearRef = useRef(null);

  useEffect(() => {
    yearRef.current.textContent = new Date().getFullYear();
  }, []);

  return (
    <footer className='bg-BodyBg-0 relative z-10 pt-[50px] overflow-hidden pb-5'>
      <div className='Container'>
        <div className='text-center'>
          <div className='inline-block'>
            <Link
              to={'/'}
              title='Gerold'
            >
              <img
                src={footerLogo}
                draggable={false}
                className='size-[75px] mx-auto'
              />
            </Link>
          </div>
          <ul className='flex items-center justify-center gap-2 sm:gap-[35px] my-7'>
            <li>
              <Link
                to={'/about'}
                className='font-Sora font-bold text-[15px] text-white relative z-10 before:bottom-0 before:right-0 before:absolute before:w-0 before:h-[2px] before:bg-gradient-to-r before:to-Secondarycolor-0 before:from-PrimaryColor-0 hover:before:left-0 hover:w-full'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={'/service'}
                className='font-Sora font-bold text-[15px] text-white relative z-10 before:bottom-0 before:right-0 before:absolute before:w-0 before:h-[2px] before:bg-gradient-to-r before:to-Secondarycolor-0 before:from-PrimaryColor-0 hover:before:left-0 hover:w-full'
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to={'/portfolio'}
                className='font-Sora font-bold text-[15px] text-white relative z-10 before:bottom-0 before:right-0 before:absolute before:w-0 before:h-[2px] before:bg-gradient-to-r before:to-Secondarycolor-0 before:from-PrimaryColor-0 hover:before:left-0 hover:w-full'
              >
                Portfolios
              </Link>
            </li>
            <li>
              <Link
                to={'/contact'}
                className='font-Sora font-bold text-[15px] text-white relative z-10 before:bottom-0 before:right-0 before:absolute before:w-0 before:h-[2px] before:bg-gradient-to-r before:to-Secondarycolor-0 before:from-PrimaryColor-0 hover:before:left-0 hover:w-full'
              >
                Contact
              </Link>
            </li>
          </ul>
          <p className='font-Sora font-light inline-block sm:flex gap-1 items-center justify-center text-TextGrey2-0'>
            <span>&copy;</span> <span ref={yearRef}></span> All rights reserved
            by <Link to={'/'} className='font-medium text-white'>ThemeJunction</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterDark;
