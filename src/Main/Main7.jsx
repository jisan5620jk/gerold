import { Outlet } from 'react-router-dom';
import ScrollToTop from '../Shared/BackToTop/BackToTop';
import Footer2Dark from '../Shared/Footer/Footer2Dark';;
import AOS from 'aos';
import 'aos/dist/aos.css';
import PortfolioNavbar from '../Shared/Navbar/PortfolioNavbar';

AOS.init();

const Main7 = () => {
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
