import { Outlet } from 'react-router-dom';
import ScrollToTop from '../Shared/BackToTop/BackToTop';
import NavbarDark from '../Shared/Navbar/NavbarDark';
import FooterDark from '../Shared/Footer/FooterDark';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    gsap.to(window, {
      duration: 0.8,
      ease: 'true',
      scrollTrigger: {
        trigger: '#bottom',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
    return () => {
      lenis.destroy();
    };
  }, []);

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
