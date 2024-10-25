import bannerThumb from '/images/hero/hero-2.png';
import icon from '/images/counter/counter-icon.png';
import icon2 from '/images/counter/counter-icon2.png';
import icon3 from '/images/counter/counter-icon3.png';
import icon4 from '/images/counter/counter-icon4.png';
import { Link } from 'react-router-dom';
import {
  FaDribbble,
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';
import { PiArrowRightBold } from 'react-icons/pi';
import CountUp from 'react-countup';
import About from '../About/About';

const Banner = () => {
  return (
    <section className='bg-white relative z-10 overflow-hidden pt-[135px]'>
      <div className='Container'>
        <div className='flex flex-col md:flex-row items-center group gap-[60px] md:gap-8 lg:gap-[60px] p-6 sm:p-[30px] border border-BorderGrey2-0 bg-BodyBgLight-0 rounded-2xl'>
          <div className='relative z-10 rounded-xl overflow-hidden max-w-[325px] w-full transition-all duration-500 border border-transparent group-hover:border-PrimaryColor-0'>
            <img
              src={bannerThumb}
              draggable='false'
            />
          </div>
          <div>
            <h1 className='font-Sora text-3xl sm:text-4xl sm:leading-[50px] md:text-[34px] md:leading-[42px] lg:text-[38px] lg:leading-[52px] xl:text-[52px] xl:leading-[62px] 2xl:text-[58px] 2xl:leading-[69px] font-medium bg-gradient-to-r from-PrimaryColor-0 to-Secondarycolor-0 bg-clip-text text-transparent'>
              Hi, I am Web <br /> Developer + UX Designer
            </h1>
            <p className='font-Sora text-TextLight-0 text-lg sm:text-xl sm:leading-[30px] font-light max-w-[530px] w-full pt-[15px]'>
              I design and code beautifully simple things and i love what i do.
              Just simple like that!
            </p>
            <div className='flex flex-wrap items-center gap-[26px] mt-[35px]'>
              <div className='inline-block'>
                <Link to={'/'}>
                  <button className='primary-btn2'>
                    Hire me!
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
                    <button className='size-[35px] flex justify-center items-center rounded-full overflow-hidden relative bg-transparent border border-PrimaryColor-0 transition-all duration-500 text-PrimaryColor-0 hover:text-white z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:rounded-full before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
                      <FaXTwitter />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={'/'}>
                    <button className='size-[35px] flex justify-center items-center rounded-full overflow-hidden relative bg-transparent border border-PrimaryColor-0 transition-all duration-500 text-PrimaryColor-0 hover:text-white z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:rounded-full before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
                      <FaDribbble />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={'/'}>
                    <button className='size-[35px] flex justify-center items-center rounded-full overflow-hidden relative bg-transparent border border-PrimaryColor-0 transition-all duration-500 text-PrimaryColor-0 hover:text-white z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:rounded-full before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
                      <FaLinkedinIn />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={'/'}>
                    <button className='size-[35px] flex justify-center items-center rounded-full overflow-hidden relative bg-transparent border border-PrimaryColor-0 transition-all duration-500 text-PrimaryColor-0 hover:text-white z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:rounded-full before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
                      <FaGithub />
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex items-center flex-wrap md:justify-between gap-7 md:gap-0 px-6 sm:px-[30px] lg:px-[75px] py-[35px] mt-[35px] border border-BorderGrey-0 bg-BodyBgLight-0 rounded-2xl'>
          <div>
            <div className='mb-[22px]'>
              <img
                src={icon}
                draggable='false'
                className='max-w-[32px] w-full'
              />
            </div>
            <div>
              <CountUp
                start={-11}
                end={'14'}
                suffix={'%'}
                className='font-Sora text-4xl sm:text-6xl md:text-[50px] lg:text-[64px] text-PrimaryColor-0 font-medium'
              />
            </div>
            <p className='font-Sora text-PrimaryColor-0 mt-2'>
              Job achievements
            </p>
          </div>
          <div>
            <div className='mb-[22px]'>
              <img
                src={icon2}
                draggable='false'
                className='max-w-[32px] w-full'
              />
            </div>
            <div>
              <CountUp
                start={-11}
                end={'50'}
                suffix={'+'}
                className='font-Sora text-4xl sm:text-6xl md:text-[50px] lg:text-[64px] text-PrimaryColor-0 font-medium'
              />
            </div>
            <p className='font-Sora text-PrimaryColor-0 mt-2'>
              Years of Experience
            </p>
          </div>
          <div>
            <div className='mb-[22px]'>
              <img
                src={icon3}
                draggable='false'
                className='max-w-[32px] w-full'
              />
            </div>
            <div>
              <CountUp
                start={-11}
                prefix='1.'
                end={'5'}
                suffix={'+'}
                className='font-Sora text-4xl sm:text-6xl md:text-[50px] lg:text-[64px] text-PrimaryColor-0 font-medium'
              />
            </div>
            <p className='font-Sora text-PrimaryColor-0 mt-2'>Happy Clients</p>
          </div>
          <div>
            <div className='mb-[22px]'>
              <img
                src={icon4}
                draggable='false'
                className='max-w-[32px] w-full'
              />
            </div>
            <div>
              <CountUp
                start={-11}
                end={'14'}
                suffix={'+'}
                className='font-Sora text-4xl sm:text-6xl md:text-[50px] lg:text-[64px] text-PrimaryColor-0 font-medium'
              />
            </div>
            <p className='font-Sora text-PrimaryColor-0 mt-2'>
              Project Completed
            </p>
          </div>
        </div>
        <About />
      </div>
    </section>
  );
};

export default Banner;
