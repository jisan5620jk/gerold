import { Outlet } from 'react-router-dom';
import ScrollToTop from '../Shared/BackToTop/BackToTop';
import ServiceNavbarLight from '../Shared/Navbar/ServiceNavbarLight';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import FooterLight from '../Shared/Footer/FooterLight';

const Main12 = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <ServiceNavbarLight />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <FooterLight />
    </>
  );
};
export default Main12;
