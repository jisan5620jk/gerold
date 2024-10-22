import { Outlet } from 'react-router-dom';
import ScrollToTop from '../Shared/ScrollToTop/ScrollToTop';
import Navbar2Dark from '../Shared/Navbar/Navbar2Dark';
import Footer2Dark from '../Shared/Footer/Footer2Dark';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Main3 = () => {
  return (
    <>
      <Navbar2Dark />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <Footer2Dark />
    </>
  );
};
export default Main3;
