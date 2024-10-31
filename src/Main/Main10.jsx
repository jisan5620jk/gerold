import { Outlet } from 'react-router-dom';
import ScrollToTop from '../Shared/BackToTop/BackToTop';
import Navbar2Light from '../Shared/Navbar/Navbar2Light';
import Footer2Light from '../Shared/Footer/Footer2Light';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Main10 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar2Light />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <Footer2Light />
    </>
  );
};
export default Main10;
