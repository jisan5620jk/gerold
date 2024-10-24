import { Outlet } from 'react-router-dom';
import ScrollToTop from '../Shared/BackToTop/BackToTop';
import Footer2Dark from '../Shared/Footer/Footer2Dark';;
import BlogNavbar from '../Shared/Navbar/BlogNavbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Main8 = () => {
  return (
    <>
      <BlogNavbar />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <Footer2Dark />
    </>
  );
};
export default Main8;
