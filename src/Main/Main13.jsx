import { Outlet } from 'react-router-dom';
import ScrollToTop from '../Shared/BackToTop/BackToTop';
import FooterDark from '../Shared/Footer/FooterDark';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PortfolioNavbarLight from '../Shared/Navbar/PortfolioNavbarLight';

AOS.init();

const Main13 = () => {
  return (
    <>
      <PortfolioNavbarLight />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <FooterDark />
    </>
  );
};
export default Main13;
