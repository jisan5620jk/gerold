import { Outlet } from 'react-router-dom';
import ScrollToTop from '../Shared/ScrollToTop/ScrollToTop';
import NavbarLight from '../Shared/Navbar/NavbarLight';
import FooterLight from '../Shared/Footer/FooterLight';

const Main2 = () => {
  return (
    <>
      <NavbarLight />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <FooterLight />
    </>
  );
};
export default Main2;
