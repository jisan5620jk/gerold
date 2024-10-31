import { Outlet } from 'react-router-dom';
import ScrollToTop from '../Shared/BackToTop/BackToTop';
import FooterDark from '../Shared/Footer/FooterDark';
import ServiceNavbarLight from '../Shared/Navbar/ServiceNavbarLight';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Main12 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <ServiceNavbarLight />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <FooterDark />
    </>
  );
};
export default Main12;
