import { Outlet } from 'react-router-dom';
import ScrollToTop from '../Shared/BackToTop/BackToTop';
import Footer2Dark from '../Shared/Footer/Footer2Dark';
import ContactNavbar from '../Shared/Navbar/ContactNavbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Main5 = () => {
  return (
    <>
      <ContactNavbar />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <Footer2Dark />
    </>
  );
};
export default Main5;
