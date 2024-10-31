import { Outlet } from 'react-router-dom';
import ScrollToTop from '../Shared/BackToTop/BackToTop';
import FooterDark from '../Shared/Footer/FooterDark';
import BlogNavbar from '../Shared/Navbar/BlogNavbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Main8 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <BlogNavbar />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <FooterDark />
    </>
  );
};
export default Main8;
