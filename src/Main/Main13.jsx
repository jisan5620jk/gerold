import { Outlet } from 'react-router-dom';
import ScrollToTop from '../Shared/BackToTop/BackToTop';
import FooterDark from '../Shared/Footer/FooterDark';
import PortfolioNavbarLight from '../Shared/Navbar/PortfolioNavbarLight';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Main13 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
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
