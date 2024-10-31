import { Outlet } from 'react-router-dom';
import ScrollToTop from '../Shared/BackToTop/BackToTop';
import NavbarLight from '../Shared/Navbar/NavbarLight';
import FooterLight from '../Shared/Footer/FooterLight';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Main2 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <NavbarLight />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <FooterLight />
    </>
  );
};
export default Main2;
