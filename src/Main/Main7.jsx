import { Outlet } from 'react-router-dom';
import ScrollToTop from '../Shared/BackToTop/BackToTop';
import Footer2Dark from '../Shared/Footer/Footer2Dark';
import PortfolioNavbar from '../Shared/Navbar/PortfolioNavbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Main7 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <PortfolioNavbar />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <Footer2Dark />
    </>
  );
};
export default Main7;
