import { Outlet } from 'react-router-dom';
import ScrollToTop from '../Shared/BackToTop/BackToTop';
import FooterDark from '../Shared/Footer/FooterDark';;
import AOS from 'aos';
import 'aos/dist/aos.css';
import BlogDetailsNavbarLight from '../Shared/Navbar/BlogDetailsNavbarLight';

AOS.init();

const Main14 = () => {
  return (
    <>
      <BlogDetailsNavbarLight />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <FooterDark />
    </>
  );
};
export default Main14;
