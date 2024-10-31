import { Outlet } from 'react-router-dom';
import ScrollToTop from '../Shared/BackToTop/BackToTop';
import FooterDark from '../Shared/Footer/FooterDark';
import AboutNavbarLight from '../Shared/Navbar/AboutNavbarLight';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Main11 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <AboutNavbarLight />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <FooterDark />
    </>
  );
};
export default Main11;
