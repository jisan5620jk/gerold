import { Outlet } from 'react-router-dom';
import ScrollToTop from '../Shared/BackToTop/BackToTop';
import Navbar2Light from '../Shared/Navbar/Navbar2Light';
import Footer2Dark from '../Shared/Footer/Footer2Dark';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Main10 = () => {
  return (
    <>
      <Navbar2Light />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <Footer2Dark />
    </>
  );
};
export default Main10;
