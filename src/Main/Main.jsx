import { Outlet } from 'react-router-dom';
import ScrollToTop from '../Shared/BackToTop/BackToTop';
import NavbarDark from '../Shared/Navbar/NavbarDark';
import FooterDark from '../Shared/Footer/FooterDark';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Main = () => {
  return (
    <>
      <NavbarDark />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <FooterDark />
    </>
  );
};
export default Main;
