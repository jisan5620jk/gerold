import {
  FaArrowRightLong,
  FaRegCalendarDays,
  FaRegComments,
  FaRegUser,
} from 'react-icons/fa6';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import { Link } from 'react-router-dom';
import blogThumb from '/images/blog/blog-4.jpg';
import blogThumb2 from '/images/blog/blog-3.jpg';
import { PiPlayCircleLight, PiQuotes } from 'react-icons/pi';
import FsLightbox from 'fslightbox-react';
import { useState } from 'react';

const BlogInner = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'Blog'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Blog'}
      />
      <section className='py-28 bg-BodyBlack-0'>
        <div className='Container'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-7'>
            <div className='col-span-2'>
              <article className='bg-BodyBg3-0 group rounded-lg overflow-hidden mb-10'>
                <div className='overflow-hidden'>
                  <Link
                    to={'/blog_details'}
                    className='relative'
                  >
                    <img
                      src={blogThumb}
                      draggable='false'
                      className='origin-center transition-all ease-in-out duration-1000 group-hover:scale-110'
                    />
                    <Link
                      to={'/blog_details'}
                      className='absolute top-[15px] right-[15px]'
                    >
                      <span className='font-Sora text-[13px] px-[14px] py-[8px] rounded-full text-white uppercase bg-PrimaryColor-0 overflow-hidden relative z-20 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-gradient-to-l before:from-Secondarycolor-0 before:from-5% before:to-PrimaryColor-0 before:opacity- before:transition-opacity before:duration-500 before:ease-linear before:rounded-full before:-z-10 hover:before:opacity-100'>
                        Tutorial
                      </span>
                    </Link>
                  </Link>
                </div>
                <div className='p-5 sm:p-[30px]'>
                  <div className='flex items-center flex-wrap gap-y-3 gap-x-[25px]'>
                    <Link
                      to={'#'}
                      className='font-Sora font-light text-white flex items-center gap-2 transition-all ease-in-out duration-500 hover:text-PrimaryColor-0'
                    >
                      <FaRegUser className='text-PrimaryColor-0' />
                      By Admin
                    </Link>
                    <h6 className='font-Sora font-light text-white flex items-center gap-2'>
                      <FaRegCalendarDays className='text-PrimaryColor-0' />
                      11 Jul, 2024
                    </h6>
                    <div className='flex items-center gap-2'>
                      <FaRegComments
                        size={'18'}
                        className='text-PrimaryColor-0'
                      />
                      <Link
                        to={'#'}
                        className='font-Sora font-light text-white transition-all ease-in-out duration-500 hover:text-PrimaryColor-0'
                      >
                        Comments (3)
                      </Link>
                    </div>
                  </div>
                  <div className='inline-block mt-4'>
                    <Link
                      to={'/blog_details'}
                      className='font-Sora text-white font-bold text-xl leading89 sm:text-2xl sm:leading-8 md:text-3xl md:leading-10 bg-gradient-to-r from-current to-current bg-no-repeat bg-[0_100%] bg-[length:0_1px] transition-all duration-700 ease-linear hover:bg-[length:100%_1px] hover:text-PrimaryColor-0'
                    >
                      The Role of Technology in Modern Logistics Management
                    </Link>
                  </div>
                  <p className='font-Sora text-TextColor-0 mt-5 mb-[30px]'>
                    Lorem ipsum is simply free text used by copytyping
                    refreshing. Neque porro est qui dolorem ipsum quia quaed
                    inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo. Aelltes port lacus quis enim var sed
                    efficitur turpis gilla sed sit...
                  </p>
                  <div className='inline-block'>
                    <Link
                      to={'/blog_details'}
                      className='header-btn'
                    >
                      <button>Read More</button>
                    </Link>
                  </div>
                </div>
              </article>
              <blockquote className='rounded-lg bg-BodyBg3-0 py-10 px-[30px] mb-10'>
                <div className='text-white'>
                  <PiQuotes size={'40'} />
                </div>
                <p className='font-Sora text-TextColor-0 pt-4 pb-[14px]'>
                  “Welcome to our blog, where we celebrate our achievement as an
                  AWS SaaS Competency Partner and share insights on how we
                  accomplished this significant milestone. As businesses unlock
                  growth opportunities in the digital age, harnessing the power
                  of cloud computing has become essential. Amazon Web Services
                  (AWS) offers the AWS SaaS Competency.”
                </p>
                <cite className='font-Sora text-white font-medium text-xl italic pl-[50px] relative z-10 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:h-[2px] before:w-[35px] before:bg-PrimaryColor-0'>
                  Silvester Scott
                </cite>
              </blockquote>
              <article className='bg-BodyBg3-0 group rounded-lg overflow-hidden mb-10'>
                <div className='overflow-hidden'>
                  <div className='relative'>
                    <img
                      src={blogThumb2}
                      draggable='false'
                      className='origin-center transition-all ease-in-out duration-1000 group-hover:scale-110'
                    />
                    <Link
                      to={'/blog_details'}
                      className='absolute top-[15px] right-[15px]'
                    >
                      <span className='font-Sora text-[13px] px-[14px] py-[8px] rounded-full text-white uppercase bg-PrimaryColor-0 overflow-hidden relative z-20 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-gradient-to-l before:from-Secondarycolor-0 before:from-5% before:to-PrimaryColor-0 before:opacity- before:transition-opacity before:duration-500 before:ease-linear before:rounded-full before:-z-10 hover:before:opacity-100'>
                        Tips
                      </span>
                    </Link>
                    <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20'>
                      <button
                        className='size-[70px] rounded-full flex items-center justify-center text-white bg-PrimaryColor-0 bg-opacity-80 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-transparent before:animate-Pulse before:-z-10 before:rounded-full'
                        onClick={() => setToggler(!toggler)}
                      >
                        <PiPlayCircleLight size={'38'} />
                      </button>
                      <FsLightbox
                        toggler={toggler}
                        sources={[
                          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                        ]}
                      />
                    </span>
                  </div>
                </div>
                <div className='p-5 sm:p-[30px]'>
                  <div className='flex items-center flex-wrap gap-y-3 gap-x-[25px]'>
                    <Link
                      to={'#'}
                      className='font-Sora font-light text-white flex items-center gap-2 transition-all ease-in-out duration-500 hover:text-PrimaryColor-0'
                    >
                      <FaRegUser className='text-PrimaryColor-0' />
                      By Admin
                    </Link>
                    <h6 className='font-Sora font-light text-white flex items-center gap-2'>
                      <FaRegCalendarDays className='text-PrimaryColor-0' />
                      11 Jul, 2024
                    </h6>
                    <div className='flex items-center gap-2'>
                      <FaRegComments
                        size={'18'}
                        className='text-PrimaryColor-0'
                      />
                      <Link
                        to={'#'}
                        className='font-Sora font-light text-white transition-all ease-in-out duration-500 hover:text-PrimaryColor-0'
                      >
                        Comments (3)
                      </Link>
                    </div>
                  </div>
                  <div className='inline-block mt-4'>
                    <Link
                      to={'/blog_details'}
                      className='font-Sora text-white font-bold text-xl leading89 sm:text-2xl sm:leading-8 md:text-3xl md:leading-10 bg-gradient-to-r from-current to-current bg-no-repeat bg-[0_100%] bg-[length:0_1px] transition-all duration-700 ease-linear hover:bg-[length:100%_1px] hover:text-PrimaryColor-0'
                    >
                      The Role of Technology in Modern Logistics Management
                    </Link>
                  </div>
                  <p className='font-Sora text-TextColor-0 mt-5 mb-[30px]'>
                    Lorem ipsum is simply free text used by copytyping
                    refreshing. Neque porro est qui dolorem ipsum quia quaed
                    inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo. Aelltes port lacus quis enim var sed
                    efficitur turpis gilla sed sit...
                  </p>
                  <div className='inline-block'>
                    <Link
                      to={'/blog_details'}
                      className='header-btn'
                    >
                      <button>Read More</button>
                    </Link>
                  </div>
                </div>
              </article>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogInner;
