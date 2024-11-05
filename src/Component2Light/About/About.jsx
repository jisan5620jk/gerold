import { PiArrowRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import aboutImg from '/images/hero/about-1.png';

const About = () => {
    return (
      <div className='grid grid-cols-12 items-center lg:items-start 2xl:items-center gap-6 mt-[35px]'>
        <div className='col-span-12 lg:col-span-7 py-[30px] xl:py-10 px-[20px] xl:px-[65px] border border-BorderGrey2-0 bg-BodyBgLight-0 rounded-2xl'>
          <h1 className='font-Sora text-[30px] leading-9 md:text-[35px] lg:text-[40px] xl:text-[45px] md:leading-[54px] lg:leading-[48px] xl:leading-[54px] font-medium bg-gradient-to-l to-PrimaryColor-0 from-Secondarycolor-0 bg-clip-text text-transparent'>
            Achievements in my professional life.
          </h1>
          <p className='font-Sora font-light text-xl !leading-[30px] text-TextLight-0 pt-[21px]'>
            {`Since beginning my journey as a freelance designer nearly 8
                years ago, I've done remote work for agencies, consulted for
                startups, and collaborated with talented people to create
                digital products for both business and consumer use.`}
          </p>
          <div className='inline-block mt-14 xl:mt-20'>
            <Link to={'/'}>
              <button className='primary-btn2'>
                Contact Me
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
        </div>
        <div className='col-span-12 lg:col-span-5 border border-BorderGrey2-0 bg-BodyBgLight-0 rounded-2xl'>
          <div className='pt-[28px] px-5 xl:px-10'>
            <h5 className='font-Sora font-medium text-xl text-PrimaryColor-0'>
              Interface Designer
            </h5>
            <p className='font-Sora text-TextLight-0 pt-[8px] max-w-[340px] w-full'>
              {`As a UI designer, I work closely with clients to understand their needs and goals for their software or website.`}
            </p>
          </div>
          <div className='md:-mt-8 lg:mt-0 xl:-mt-8'>
            <img
              src={aboutImg}
              draggable='false'
              className='w-full'
            />
          </div>
        </div>
      </div>
    );
};

export default About;