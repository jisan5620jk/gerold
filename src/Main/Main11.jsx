import { Outlet } from 'react-router-dom';
import ScrollToTop from '../Shared/BackToTop/BackToTop';
import FooterDark from '../Shared/Footer/FooterDark';;
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutNavbarLight from '../Shared/Navbar/AboutNavbarLight';

AOS.init();

const Main11 = () => {
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
