import { Outlet } from 'react-router-dom';
import ScrollToTop from '../Shared/BackToTop/BackToTop';
import Footer2Dark from '../Shared/Footer/Footer2Dark';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ServiceNavbar from '../Shared/Navbar/ServiceNavbar';

const Main4 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <ServiceNavbar />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <Footer2Dark />
    </>
  );
};
export default Main4;
