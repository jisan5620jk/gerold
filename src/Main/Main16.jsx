import { Outlet } from 'react-router-dom';
import ScrollToTop from '../Shared/BackToTop/BackToTop';
import FooterDark from '../Shared/Footer/FooterDark';;
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactNavbarLight from '../Shared/Navbar/ContactNavbarLight';

AOS.init();

const Main16 = () => {
  return (
    <>
      <ContactNavbarLight />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <FooterDark />
    </>
  );
};
export default Main16;
