import bannerThumb from '/images/hero/hero-2.png';
import { Link } from 'react-router-dom';
import {
  FaDribbble,
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';
import { PiArrowRightBold } from 'react-icons/pi';

const Banner = () => {
  return (
    <section className='bg-BodyBg-0 relative z-10 overflow-hidden pt-[204px] pb-[57px]'>
      <div className='flex justify-center items-center m-auto'>
        <div className='Container'>
          <div className='flex items-center gap-[60px] p-[30px] border border-Secondarycolor-0 rounded-2xl'>
            <div className='relative z-10 rounded-xl overflow-hidden'>
              <img
                src={bannerThumb}
                draggable='false'
                className='brightness-0'
              />
            </div>
            <div>
              <h1 className='font-Sora text-3xl sm:text-5xl sm:leading-[60px] md:text-[40px] md:leading-[78px] lg:text-[48px] lg:leading-[70px] xl:text-[58px] xl:leading-[75px] 2xl:text-[58px] 2xl:leading-[78px] font-bold bg-gradient-to-r from-PrimaryColor-0 to-white bg-clip-text text-transparent'>
                Hi, I am Web <br /> Developer + UX Designer
              </h1>
              <p className='font-Sora text-TextColor-0 max-w-[530px] w-full'>
                I design and code beautifully simple things and i love what i
                do. Just simple like that!
              </p>
              <div className='flex flex-wrap items-center gap-[26px]'>
                <div className='inline-block'>
                  <Link to={'/'}>
                    <button className='primary-btn2'>
                      Hire Me!
                      <span className='icon-box'>
                        <span className='first-icon'>
                          <PiArrowRightBold size={'17'} />
                        </span>
                        <span className='last-icon'>
                          <PiArrowRightBold size={'17'} />
                        </span>
                      </span>
                    </button>
                  </Link>
                </div>
                <ul className='flex items-center gap-5'>
                  <li>
                    <Link to={'/'}>
                      <button className='size-[35px] flex justify-center items-center rounded-full overflow-hidden relative bg-transparent border border-PrimaryColor-0 transition-all duration-500 text-PrimaryColor-0 hover:text-white z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:rotate-180 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100 hover:before:rotate-0'>
                        <FaXTwitter />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/'}>
                      <button className='size-[35px] flex justify-center items-center rounded-full overflow-hidden relative bg-transparent border border-PrimaryColor-0 transition-all duration-500 text-PrimaryColor-0 hover:text-white z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:rotate-180 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100 hover:before:rotate-0'>
                        <FaDribbble />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/'}>
                      <button className='size-[35px] flex justify-center items-center rounded-full overflow-hidden relative bg-transparent border border-PrimaryColor-0 transition-all duration-500 text-PrimaryColor-0 hover:text-white z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:rotate-180 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100 hover:before:rotate-0'>
                        <FaLinkedinIn />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/'}>
                      <button className='size-[35px] flex justify-center items-center rounded-full overflow-hidden relative bg-transparent border border-PrimaryColor-0 transition-all duration-500 text-PrimaryColor-0 hover:text-white z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:rotate-180 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100 hover:before:rotate-0'>
                        <FaGithub />
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
