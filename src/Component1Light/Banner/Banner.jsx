import bannerThumb from '/images/hero/me.png';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import {
  FaDribbble,
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';
import { BsDownload } from 'react-icons/bs';

const Banner = () => {
  return (
    <section className='bg-white relative z-10 overflow-hidden pt-[130px] lg:pt-[145px] xl:pt-[180px] pb-10'>
      <span className='absolute -z-10 -top-[10%] -right-[5%] w-[322px] h-[308px] rounded-full bg-gradient-to-r to-PrimaryColor-0 from-transparent blur-[150px]'></span>
      <div className='Container'>
        <div className='relative z-10'>
          <div className='absolute -z-10 top-1/2 -translate-x-2/3 -translate-y-2/3 left-1/2 hidden md:block'>
            <h1 className='font-Russo text-[270px] text-transparent text-stroke opacity-15 animate-zoomInOut2'>
              HI
            </h1>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 md:items-center'>
            <div>
              <h3 className='font-Sora text-[22px] md:text-[25px] lg:text-4xl font-bold text-Secondarycolor-0 pb-[17px] md:mb-4 lg:mb-[6px] xl:mb-4'>
                I am Gerold
              </h3>
              <h1 className='font-Sora text-[35px] leading-[42px] md:text-[38px] md:leading-[45px] lg:text-[50px] lg:leading-[60px] xl:text-[60px] xl:leading-[72px] 2xl:text-[65px] 2xl:leading-[78px] font-bold bg-gradient-to-r from-PrimaryColor-0 to-Secondarycolor-0 bg-clip-text text-transparent -mt-[17px] md:-mt-[33px] lg:-mt-4'>
                Next-Level Web <br /> Developer.
              </h1>
              <div className='flex justify-center relative mt-8 lg:mt-0 md:hidden'>
                <span className='absolute -z-10 -left-[5%] -bottom-[5%] size-[220px] rounded-full bg-gradient-to-r to-PrimaryColor-0 from-transparent blur-[150px]'></span>
                <img
                  src={bannerThumb}
                  draggable='false'
                  className='w-[80%] md:w-[inherit] lg:w-10/12 xl:w-[inherit] sm:max-w-[inherit] border-2 border-Secondarycolor-0 rounded-[38px] rotate-[5deg] transition-all duration-500 hover:rotate-0 hover:border-PrimaryColor-0'
                />
              </div>
              <p className='font-Sora text-xl font-light leading-[30px] text-TextLight-0 max-w-[550px] w-full pt-8 md:pt-[15px] pb-6 md:pb-[30px] lg:pb-[50px]'>
                I break down complex user experinece problems to create
                integritiy focussed solutions that connect billions of people
              </p>
              <div className='flex flex-wrap sm:items-center gap-y-7 gap-x-[26px]'>
                <div className='inline-block'>
                  <Link to={'/'}>
                    <button className='primary-btn'>
                      Download CV <BsDownload className='relative -top-[2px]' />
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
            <div className='md:flex justify-center relative mt-12 hidden'>
              <span className='absolute -z-10 -left-[5%] -bottom-[5%] size-[220px] rounded-full bg-gradient-to-r to-PrimaryColor-0 from-transparent blur-[150px]'></span>
              <img
                src={bannerThumb}
                draggable='false'
                className='w-full lg:w-11/12 xl:w-[inherit] sm:max-w-[inherit] md:max-w-full lg:max-w-[inherit] border-2 border-transparent rounded-[38px] rotate-[5deg] transition-all duration-500 hover:rotate-0 hover:border-PrimaryColor-0'
              />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 xl:gap-20 pt-16 2xl:pt-[84px]'>
          <div className='flex flex-col justify-center mx-auto lg:mx-0 lg:justify-start sm:flex-row sm:items-center gap-3'>
            <div>
              <CountUp
                start={-11}
                end={'14'}
                suffix={''}
                className='font-Sora text-[45px] md:text-[55px] xl:text-[64px] text-PrimaryColor-0 font-bold'
              />
            </div>
            <p className='font-Sora text-PrimaryColor-0 -mt-2'>
              Years of <br />
              Experience
            </p>
          </div>
          <div className='flex flex-col justify-center mx-auto lg:mx-0 lg:justify-start sm:flex-row sm:items-center gap-3'>
            <div>
              <CountUp
                start={-11}
                end={'50'}
                suffix={'+'}
                className='font-Sora text-[45px] md:text-[55px] xl:text-[64px] text-PrimaryColor-0 font-bold'
              />
            </div>
            <p className='font-Sora text-PrimaryColor-0 -mt-2'>
              Project <br />
              Completed
            </p>
          </div>
          <div className='flex flex-col justify-center mx-auto lg:mx-0 lg:justify-start sm:flex-row sm:items-center gap-3'>
            <div>
              <CountUp
                start={-11}
                prefix='1.'
                end={'5'}
                suffix='K'
                className='font-Sora text-[45px] md:text-[55px] xl:text-[64px] text-PrimaryColor-0 font-bold'
              />
            </div>
            <p className='font-Sora text-PrimaryColor-0 -mt-2'>
              Happy <br />
              Clients
            </p>
          </div>
          <div className='flex flex-col justify-center mx-auto lg:mx-0 lg:justify-start sm:flex-row sm:items-center gap-3'>
            <div>
              <CountUp
                start={-11}
                end={'14'}
                suffix={''}
                className='font-Sora text-[45px] md:text-[55px] xl:text-[64px] text-PrimaryColor-0 font-bold'
              />
            </div>
            <p className='font-Sora text-PrimaryColor-0 -mt-2'>
              Years of <br /> Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
