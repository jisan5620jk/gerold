import { Outlet } from 'react-router-dom';
import ScrollToTop from '../Shared/BackToTop/BackToTop';
import Footer2Dark from '../Shared/Footer/Footer2Dark';
import ServiceNavbar from '../Shared/Navbar/ServiceNavbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Main4 = () => {
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
