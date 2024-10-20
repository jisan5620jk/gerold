import { Outlet } from 'react-router-dom';
import ScrollToTop from '../Shared/ScrollToTop/ScrollToTop';
import NavbarDark from '../Shared/Navbar/NavbarDark';
import FooterDark from '../Shared/Footer/FooterDark';

const Main3 = () => {
  return (
    <>
      <NavbarDark />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <FooterDark />
    </>
  );
};
export default Main3;
