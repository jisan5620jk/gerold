import bannerThumb from '/images/hero/me.png';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import {
  FaDribbble,
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';
import { FiDownload } from 'react-icons/fi';

const Banner = () => {
  return (
    <section className='bg-BodyBg-0 relative z-10 overflow-hidden pt-[200px] pb-[50px]'>
      <span className='absolute -z-10 -top-[10%] -right-[5%] w-[322px] h-[308px] rounded-full bg-gradient-to-r to-PrimaryColor-0 from-transparent blur-[150px]'></span>
      <div className='Container'>
        <div className='relative z-10'>
          <div className='absolute -z-10 top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2'>
            <h1 className='font-Russo text-[270px] text-transparent text-stroke opacity-70 animate-zoomInOut2'>
              HI
            </h1>
          </div>
          <div className='grid grid-cols-2 items-center'>
            <div className='sm:gap-5'>
              <h3 className='font-Sora text-4xl font-bold text-TextColor-0 pb-2'>
                I am Gerold
              </h3>
              <h1 className='font-Sora text-[65px] leading-[78px] font-bold bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent'>
                Web Developer + <br /> UX Designer
              </h1>
              <p className='font-Sora text-xl font-light text-TextColor-0 max-w-[550px] w-full pt-4 pb-[50px]'>
                I break down complex user experinece problems to create
                integritiy focussed solutions that connect billions of people
              </p>
              <div className='flex items-center gap-[26px]'>
                <div className='inline-block'>
                  <Link to={'/'}>
                    <button className='primary-btn'>
                      Download CV{' '}
                      <FiDownload className='text-lg relative -top-[2px]' />
                    </button>
                  </Link>
                </div>
                <div>
                  <ul className='flex items-center gap-5'>
                    <li className='group relative'>
                      <Link to={'/'}>
                        <button className='size-[37px] flex justify-center items-center rounded-full overflow-hidden relative bg-transparent border border-PrimaryColor-0 transition-all duration-500 text-PrimaryColor-0 hover:text-white z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:rotate-180 before:-z-10 before:transition-all before:duration-500 before:scale-0 group-hover:before:scale-100 group-hover:before:rotate-0'>
                          <FaXTwitter />
                        </button>
                      </Link>
                      <span className='absolute -right-28 -top-16 opacity-0 inline-block transition-all duration-500 group-hover:opacity-100 group-hover:-top-[35px] group-hover:-right-[70px]'>
                        <span className='px-2 py-1 rounded bg-PrimaryColor-0 w-full text-white text-sm font-Sora  relative z-10 before:absolute before:-bottom-[8px] before:-left-[5px] before:w-2 before:h-3 before:bg-PrimaryColor-0 before:[clip-path:polygon(0%_0%,_0%_0%,_100%_0%,_50%_100%)] before:rotate-45'>
                          Twitter
                        </span>
                      </span>
                    </li>
                    <li className='group relative'>
                      <Link to={'/'}>
                        <button className='size-[37px] flex justify-center items-center rounded-full overflow-hidden relative bg-transparent border border-PrimaryColor-0 transition-all duration-500 text-PrimaryColor-0 hover:text-white z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:rotate-180 before:-z-10 before:transition-all before:duration-500 before:scale-0 group-hover:before:scale-100 group-hover:before:rotate-0'>
                          <FaDribbble />
                        </button>
                      </Link>
                      <span className='absolute -right-28 -top-16 opacity-0 inline-block transition-all duration-500 group-hover:opacity-100 group-hover:-top-[35px] group-hover:-right-[85px]'>
                        <span className='px-2 py-1 rounded bg-PrimaryColor-0 w-full text-white text-sm font-Sora  relative z-10 before:absolute before:-bottom-[8px] before:-left-[5px] before:w-2 before:h-3 before:bg-PrimaryColor-0 before:[clip-path:polygon(0%_0%,_0%_0%,_100%_0%,_50%_100%)] before:rotate-45'>
                          Dribbble
                        </span>
                      </span>
                    </li>
                    <li className='group relative'>
                      <Link to={'/'}>
                        <button className='size-[37px] flex justify-center items-center rounded-full overflow-hidden relative bg-transparent border border-PrimaryColor-0 transition-all duration-500 text-PrimaryColor-0 hover:text-white z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:rotate-180 before:-z-10 before:transition-all before:duration-500 before:scale-0 group-hover:before:scale-100 group-hover:before:rotate-0'>
                          <FaLinkedinIn size={'20'} />
                        </button>
                      </Link>
                      <span className='absolute -right-28 -top-16 opacity-0 inline-block transition-all duration-500 group-hover:opacity-100 group-hover:-top-[35px] group-hover:-right-[82px]'>
                        <span className='px-2 py-1 rounded bg-PrimaryColor-0 w-full text-white text-sm font-Sora  relative z-10 before:absolute before:-bottom-[8px] before:-left-[5px] before:w-2 before:h-3 before:bg-PrimaryColor-0 before:[clip-path:polygon(0%_0%,_0%_0%,_100%_0%,_50%_100%)] before:rotate-45'>
                          LinkedIn
                        </span>
                      </span>
                    </li>
                    <li className='group relative'>
                      <Link to={'/'}>
                        <button className='size-[37px] flex justify-center items-center rounded-full overflow-hidden relative bg-transparent border border-PrimaryColor-0 transition-all duration-500 text-PrimaryColor-0 hover:text-white z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:rotate-180 before:-z-10 before:transition-all before:duration-500 before:scale-0 group-hover:before:scale-100 group-hover:before:rotate-0'>
                          <FaGithub />
                        </button>
                      </Link>
                      <span className='absolute -right-28 -top-16 opacity-0 inline-block transition-all duration-500 group-hover:opacity-100 group-hover:-top-[35px] group-hover:-right-[70px]'>
                        <span className='px-2 py-1 rounded bg-PrimaryColor-0 w-full text-white text-sm font-Sora  relative z-10 before:absolute before:-bottom-[8px] before:-left-[5px] before:w-2 before:h-3 before:bg-PrimaryColor-0 before:[clip-path:polygon(0%_0%,_0%_0%,_100%_0%,_50%_100%)] before:rotate-45'>
                          Github
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='flex justify-center relative'>
              <span className='absolute -z-10 -left-[5%] -bottom-[5%] size-[220px] rounded-full bg-gradient-to-r to-PrimaryColor-0 from-transparent blur-[150px]'></span>
              <img
                src={bannerThumb}
                draggable='false'
                className='max-w-[inherit] border-2 border-Secondarycolor-0 rounded-[38px] rotate-[5deg] transition-all duration-500 hover:rotate-0 hover:border-PrimaryColor-0'
              />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 xl:gap-20 pt-32'>
          <div className='flex items-center gap-3'>
            <div>
              <CountUp
                start={-11}
                end={'14'}
                suffix={''}
                className='font-Sora text-3xl sm:text-4xl md:text-[64px] text-TextColor-0 font-bold'
              />
            </div>
            <p className='font-Sora text-TextColor-0 -mt-2'>
              Years of <br />
              Experience
            </p>
          </div>
          <div className='flex items-center gap-3'>
            <div>
              <CountUp
                start={-11}
                end={'50'}
                suffix={'+'}
                className='font-Sora text-3xl sm:text-4xl md:text-[64px] text-TextColor-0 font-bold'
              />
            </div>
            <p className='font-Sora text-TextColor-0 -mt-2'>
              Project <br />
              Completed
            </p>
          </div>
          <div className='flex items-center gap-3'>
            <div>
              <CountUp
                start={-11}
                prefix='1.'
                end={'5'}
                suffix='k+'
                className='font-Sora text-3xl sm:text-4xl md:text-[64px] text-TextColor-0 font-bold'
              />
            </div>
            <p className='font-Sora text-TextColor-0 -mt-2'>
              Happy <br />
              Clients
            </p>
          </div>
          <div className='flex items-center gap-3'>
            <div>
              <CountUp
                start={-11}
                end={'12'}
                suffix={''}
                className='font-Sora text-3xl sm:text-4xl md:text-[64px] text-TextColor-0 font-bold'
              />
            </div>
            <p className='font-Sora text-TextColor-0 -mt-2'>
              Creativity <br /> Award
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
