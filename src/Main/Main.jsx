import { Outlet } from 'react-router-dom';
import ScrollToTop from '../Shared/ScrollToTop/ScrollToTop';
import NavbarDark from '../Shared/Navbar/NavbarDark';
import FooterDark from '../Shared/Footer/FooterDark';

const Main = () => {
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
export default Main;
