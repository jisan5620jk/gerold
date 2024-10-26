import { Outlet } from 'react-router-dom';
import ScrollToTop from '../Shared/BackToTop/BackToTop';
import FooterDark from '../Shared/Footer/FooterDark';;
import AOS from 'aos';
import 'aos/dist/aos.css';
import BlogNavbarLight from '../Shared/Navbar/BlogNavbarLight';

AOS.init();

const Main15 = () => {
  return (
    <>
      <BlogNavbarLight />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <FooterDark />
    </>
  );
};
export default Main15;
