import { PiArrowRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import aboutImg from '/images/hero/about-1.png';

const About = () => {
    return (
      <div className='grid grid-cols-12 items-center lg:items-start 2xl:items-center gap-6 mt-[35px]'>
        <div className='col-span-12 lg:col-span-7 py-10 px-6 sm:px-10 xl:px-[65px] border border-Secondarycolor-0 bg-BodyBg3-0 rounded-2xl'>
          <h1 className='font-Sora text-[23px] leading-8 sm:text-[34px] md:text-[45px] lg:text-[40px] xl:text-[45px] md:leading-[54px] lg:leading-[48px] xl:leading-[54px] font-medium bg-gradient-to-l to-PrimaryColor-0 via-white from-white bg-clip-text text-transparent'>
            Achievements in my <br /> professional life.
          </h1>
          <p className='font-Sora font-light text-lg sm:text-xl leading-[30px] text-TextColor-0 pt-[21px]'>
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
        <div className='col-span-12 lg:col-span-5 border border-Secondarycolor-0 bg-BodyBg3-0 rounded-2xl'>
          <div className='pt-[28px] px-6 sm:px-10'>
            <h5 className='font-Sora font-medium text-xl text-white'>
              Interface Designer
            </h5>
            <p className='font-Sora text-TextColor-0 pt-[8px] max-w-[340px] w-full'>
              {`As a UI designer, I work closely with clients to understand their needs and goals for their software or website.`}
            </p>
          </div>
          <div className="-mt-10">
            <img
              src={aboutImg}
              draggable='false'
              className="w-full"
            />
          </div>
        </div>
      </div>
    );
};

export default About;