import { Outlet } from 'react-router-dom';
import ScrollToTop from '../Shared/BackToTop/BackToTop';
import Navbar2Light from '../Shared/Navbar/Navbar2Light';
import Footer2Light from '../Shared/Footer/Footer2Light';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HelmetChanger from '../Shared/Helmet/Helmet';

const Main10 = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  const lenis = new Lenis();

  lenis.on('scroll', (e) => {
    console.log(e);
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return (
    <>
      <HelmetChanger title={'Home Page Two Light Version'} />
      <Navbar2Light />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <Footer2Light />
    </>
  );
};
export default Main10;
