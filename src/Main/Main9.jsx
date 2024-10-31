import { Outlet } from 'react-router-dom';
import ScrollToTop from '../Shared/BackToTop/BackToTop';
import FooterDark from '../Shared/Footer/FooterDark';
import BlogDetailsNavbar from '../Shared/Navbar/BlogDetailsNavbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Main9 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <BlogDetailsNavbar />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <FooterDark />
    </>
  );
};
export default Main9;
