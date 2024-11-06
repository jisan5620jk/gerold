import { Outlet } from 'react-router-dom';
import ScrollToTop from '../Shared/BackToTop/BackToTop';
import AboutNavbarLight from '../Shared/Navbar/AboutNavbarLight';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import FooterLight from '../Shared/Footer/FooterLight';

const Main11 = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <AboutNavbarLight />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <FooterLight />
    </>
  );
};
export default Main11;
