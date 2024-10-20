import { Outlet } from 'react-router-dom';
import ScrollToTop from '../Shared/ScrollToTop/ScrollToTop';
import Navbar2Dark from '../Shared/Navbar/Navbar2Dark';
import Footer2Dark from '../Shared/Footer/Footer2Dark';

const Main3 = () => {
  return (
    <>
      <Navbar2Dark />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <Footer2Dark />
    </>
  );
};
export default Main3;
