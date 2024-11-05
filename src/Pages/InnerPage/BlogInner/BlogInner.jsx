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
import blogThumb3 from '/images/blog/blog-2.jpg';
import blogThumb4 from '/images/blog/blog-1.jpg';
import blogPost from '/images/blog/post-thumb-1.jpg';
import blogPost2 from '/images/blog/post-thumb-2.jpg';
import blogPost3 from '/images/blog/post-thumb-3.jpg';
import { PiPlayCircleLight, PiQuotes } from 'react-icons/pi';
import FsLightbox from 'fslightbox-react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import BlogNavigation from './BlogNavigation';
import { IoIosSearch } from 'react-icons/io';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

const BlogInner = () => {
  const [toggler, setToggler] = useState(false);
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    autoplay: true,
  };
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'Blog'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Blog'}
      />
      <section className='py-[120px]bg-BodyBlack-0'>
        <div className='Container'>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='col-span-2'>
              <article
                className='bg-BodyBg3-0 group rounded-lg overflow-hidden mb-10'
                data-aos='fade-up'
                data-aos-delay='300'
                data-aos-duration='1000'
              >
                <div className='overflow-hidden'>
                  <Link
                    to={'/blog_details'}
                    className='relative'
                  >
                    <img
                      src={blogThumb}
                      draggable='false'
                      className='min-h-[250px] h-auto object-cover origin-center transition-all ease-in-out duration-1000 group-hover:scale-110'
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
              <blockquote
                className='rounded-lg bg-BodyBg3-0 p-5 sm:py-10 sm:px-[30px] mb-10'
                data-aos='fade-up'
                data-aos-delay='300'
                data-aos-duration='1000'
              >
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
              <article
                className='bg-BodyBg3-0 group rounded-lg overflow-hidden mb-10'
                data-aos='fade-up'
                data-aos-delay='300'
                data-aos-duration='1000'
              >
                <div>
                  <div className='relative overflow-hidden'>
                    <img
                      src={blogThumb2}
                      draggable='false'
                      className='min-h-[250px] h-auto object-cover origin-center transition-all ease-in-out duration-1000 group-hover:scale-110'
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
              <article
                className='bg-BodyBg3-0 group rounded-lg overflow-hidden mb-10'
                data-aos='fade-up'
                data-aos-delay='300'
                data-aos-duration='1000'
              >
                <div className='overflow-hidden'>
                  <Swiper {...settings}>
                    <SwiperSlide>
                      <div className='relative'>
                        <img
                          src={blogThumb3}
                          draggable='false'
                          className='min-h-[250px] h-auto object-cover origin-center transition-all ease-in-out duration-1000 group-hover:scale-110'
                        />
                        <Link
                          to={'/blog_details'}
                          className='absolute top-[15px] right-[15px]'
                        >
                          <span className='font-Sora text-[13px] px-[14px] py-[8px] rounded-full text-white uppercase bg-PrimaryColor-0 overflow-hidden relative z-20 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-gradient-to-l before:from-Secondarycolor-0 before:from-5% before:to-PrimaryColor-0 before:opacity- before:transition-opacity before:duration-500 before:ease-linear before:rounded-full before:-z-10 hover:before:opacity-100'>
                            Freebies
                          </span>
                        </Link>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='relative'>
                        <img
                          src={blogThumb2}
                          draggable='false'
                          className='min-h-[250px] h-auto object-cover origin-center transition-all ease-in-out duration-1000 group-hover:scale-110'
                        />
                        <Link
                          to={'/blog_details'}
                          className='absolute top-[15px] right-[15px]'
                        >
                          <span className='font-Sora text-[13px] px-[14px] py-[8px] rounded-full text-white uppercase bg-PrimaryColor-0 overflow-hidden relative z-20 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-gradient-to-l before:from-Secondarycolor-0 before:from-5% before:to-PrimaryColor-0 before:opacity- before:transition-opacity before:duration-500 before:ease-linear before:rounded-full before:-z-10 hover:before:opacity-100'>
                            Freebies
                          </span>
                        </Link>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='relative'>
                        <img
                          src={blogThumb4}
                          draggable='false'
                          className='min-h-[250px] h-auto object-cover origin-center transition-all ease-in-out duration-1000 group-hover:scale-110'
                        />
                        <Link
                          to={'/blog_details'}
                          className='absolute top-[15px] right-[15px]'
                        >
                          <span className='font-Sora text-[13px] px-[14px] py-[8px] rounded-full text-white uppercase bg-PrimaryColor-0 overflow-hidden relative z-20 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-gradient-to-l before:from-Secondarycolor-0 before:from-5% before:to-PrimaryColor-0 before:opacity- before:transition-opacity before:duration-500 before:ease-linear before:rounded-full before:-z-10 hover:before:opacity-100'>
                            Freebies
                          </span>
                        </Link>
                      </div>
                    </SwiperSlide>
                    <BlogNavigation />
                  </Swiper>
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
              <article
                className='bg-BodyBg3-0 group rounded-lg overflow-hidden mb-14'
                data-aos='fade-up'
                data-aos-delay='300'
                data-aos-duration='1000'
              >
                <div className='overflow-hidden'>
                  <Link
                    to={'/blog_details'}
                    className='relative'
                  >
                    <img
                      src={blogThumb4}
                      draggable='false'
                      className='min-h-[250px] h-auto object-cover origin-center transition-all ease-in-out duration-1000 group-hover:scale-110'
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
              <div
                data-aos='fade-up'
                data-aos-delay='300'
                data-aos-duration='1000'
              >
                <ul className='flex items-center gap-5 flex-wrap'>
                  <li>
                    <Link
                      to={'#'}
                      className='size-10 rounded-full overflow-hidden relative bg-transparent flex items-center text-xl text-white justify-center transition-all duration-500 z-10 after:absolute after:top-0 after:rotate-180 after:left-0 after:bg-PrimaryColor-0 after:w-full after:h-full after:opacity-0 after:-z-10 after:transition-all after:duration-500 hover:after:opacity-100'
                    >
                      <GoArrowLeft />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'#'}
                      className='size-10 rounded-full overflow-hidden relative bg-transparent flex items-center font-Sora text-white justify-center transition-all duration-500 z-10 after:absolute after:top-0 after:rotate-180 after:left-0 after:bg-PrimaryColor-0 after:w-full after:h-full after:opacity-0 after:-z-10 after:transition-all after:duration-500 hover:after:opacity-100'
                    >
                      1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'#'}
                      className='size-10 rounded-full overflow-hidden relative bg-transparent flex items-center font-Sora text-white justify-center transition-all duration-500 z-10 after:absolute after:top-0 after:rotate-180 after:left-0 after:bg-PrimaryColor-0 after:w-full after:h-full after:opacity-100 after:-z-10 after:transition-all after:duration-500 hover:after:opacity-100'
                    >
                      2
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'#'}
                      className='size-10 rounded-full overflow-hidden relative bg-transparent flex items-center font-Sora text-white justify-center transition-all duration-500 z-10 after:absolute after:top-0 after:rotate-180 after:left-0 after:bg-PrimaryColor-0 after:w-full after:h-full after:opacity-0 after:-z-10 after:transition-all after:duration-500 hover:after:opacity-100'
                    >
                      3
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'#'}
                      className='size-10 rounded-full overflow-hidden relative bg-transparent flex items-center text-xl text-white justify-center transition-all duration-500 z-10 after:absolute after:top-0 after:rotate-180 after:left-0 after:bg-PrimaryColor-0 after:w-full after:h-full after:opacity-0 after:-z-10 after:transition-all after:duration-500 hover:after:opacity-100'
                    >
                      <GoArrowRight />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-span-2 lg:col-span-1'>
              <div
                className='px-[25px] py-[30px] rounded-lg bg-BodyBg3-0 mb-[30px]'
                data-aos='fade-up'
                data-aos-delay='400'
                data-aos-duration='1000'
              >
                <form
                  action='https://formspree.io/f/xkgngbnj'
                  method='get'
                  className='relative w-full overflow-hidden'
                >
                  <input
                    type='text'
                    name='search'
                    id='search'
                    placeholder='Search...'
                    required
                    className='bg-BodyBlack-0 rounded-lg w-full overflow-hidden font-Sora text-white placeholder:text-TextGrey-0 border border-BorderColor-0 focus:border-PrimaryColor-0 focus:bg-BodyBlack-0 focus:outline-none pl-5 py-4 pr-[60px]'
                  />
                  <button
                    type='submit'
                    className='absolute z-10 top-0 right-0 size-[60px] rounded-r-lg bg-PrimaryColor-0 flex items-center justify-center text-3xl text-white transition-all duration-500 hover:bg-Secondarycolor-0'
                  >
                    <IoIosSearch />
                  </button>
                </form>
              </div>
              <div
                className='px-4 sm:px-[25px] py-[30px] rounded-lg bg-BodyBg3-0 mb-[30px]'
                data-aos='fade-up'
                data-aos-delay='300'
                data-aos-duration='1000'
              >
                <h5 className='font-Sora font-bold text-white text-xl tracking-wide uppercase'>
                  Categories
                </h5>
                <ul className='space-y-5 mt-[23px]'>
                  <li className='flex items-center justify-between font-Sora font-medium text-PrimaryColor-0'>
                    <Link
                      to={'#'}
                      className='text-TextColor-0 transition-all duration-500 hover:text-PrimaryColor-0 capitalize'
                    >
                      Business
                    </Link>
                    (4)
                  </li>
                  <li className='flex items-center justify-between font-Sora font-medium text-PrimaryColor-0'>
                    <Link
                      to={'#'}
                      className='text-TextColor-0 transition-all duration-500 hover:text-PrimaryColor-0 capitalize'
                    >
                      Analysis
                    </Link>
                    (0)
                  </li>
                  <li className='flex items-center justify-between font-Sora font-medium text-PrimaryColor-0'>
                    <Link
                      to={'#'}
                      className='text-TextColor-0 transition-all duration-500 hover:text-PrimaryColor-0 capitalize'
                    >
                      Technology
                    </Link>
                    (1)
                  </li>
                  <li className='flex items-center justify-between font-Sora font-medium text-PrimaryColor-0'>
                    <Link
                      to={'#'}
                      className='text-TextColor-0 transition-all duration-500 hover:text-PrimaryColor-0 capitalize'
                    >
                      Technology
                    </Link>
                    (10)
                  </li>
                </ul>
              </div>
              <div
                className='px-4 sm:px-[25px] py-[30px] rounded-lg bg-BodyBg3-0 mb-[30px]'
                data-aos='fade-up'
                data-aos-delay='300'
                data-aos-duration='1000'
              >
                <h5 className='font-Sora font-bold text-white text-xl tracking-wide uppercase'>
                  Recent post
                </h5>
                <div className='space-y-[30px] mt-[25px]'>
                  <div className='flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start gap-5 group'>
                    <Link
                      to={'/blog_details'}
                      className='overflow-hidden'
                    >
                      <img
                        src={blogPost}
                        draggable='false'
                        className='max-w-20 w-full transition-all ease-linear duration-500 group-hover:scale-105'
                      />
                    </Link>
                    <div className='flex-1'>
                      <div className='flex flex-wrap items-center gap-y-1 gap-x-[25px] mb-1'>
                        <h6 className='font-Sora text-TextColor-0 flex items-center gap-2'>
                          <FaRegCalendarDays className='text-PrimaryColor-0' />
                          Jan 2024
                        </h6>
                        <Link
                          to={'#'}
                          className='font-Sora text-TextColor-0 flex items-center gap-2 transition-all duration-500 hover:text-PrimaryColor-0'
                        >
                          <FaRegComments className='text-PrimaryColor-0 text-lg' />
                          (3)
                        </Link>
                      </div>
                      <Link
                        to={'/blog_details'}
                        className='font-Sora font-medium tracking-wide text-base sm:text-lg leading-6 text-white transition-all duration-500 hover:text-PrimaryColor-0'
                      >
                        Definition and Principles of JIT Logistics
                      </Link>
                    </div>
                  </div>
                  <div className='flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start gap-5 group'>
                    <Link
                      to={'/blog_details'}
                      className='overflow-hidden'
                    >
                      <img
                        src={blogPost2}
                        draggable='false'
                        className='max-w-20 w-full transition-all ease-linear duration-500 group-hover:scale-105'
                      />
                    </Link>
                    <div className='flex-1'>
                      <div className='flex flex-wrap items-center gap-y-1 gap-x-[25px] mb-1'>
                        <h6 className='font-Sora text-TextColor-0 flex items-center gap-2'>
                          <FaRegCalendarDays className='text-PrimaryColor-0' />
                          Jan 2024
                        </h6>
                        <Link
                          to={'#'}
                          className='font-Sora text-TextColor-0 flex items-center gap-2 transition-all duration-500 hover:text-PrimaryColor-0'
                        >
                          <FaRegComments className='text-PrimaryColor-0 text-lg' />
                          (3)
                        </Link>
                      </div>
                      <Link
                        to={'/blog_details'}
                        className='font-Sora font-medium tracking-wide text-base sm:text-lg leading-6 text-white transition-all duration-500 hover:text-PrimaryColor-0'
                      >
                        Real-world Examples of Successful JIT Logistics
                      </Link>
                    </div>
                  </div>
                  <div className='flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start gap-5 group'>
                    <Link
                      to={'/blog_details'}
                      className='overflow-hidden'
                    >
                      <img
                        src={blogPost3}
                        draggable='false'
                        className='max-w-20 w-full transition-all ease-linear duration-500 group-hover:scale-105'
                      />
                    </Link>
                    <div className='flex-1'>
                      <div className='flex flex-wrap items-center gap-y-1 gap-x-[25px] mb-1'>
                        <h6 className='font-Sora text-TextColor-0 flex items-center gap-2'>
                          <FaRegCalendarDays className='text-PrimaryColor-0' />
                          Jan 2024
                        </h6>
                        <Link
                          to={'#'}
                          className='font-Sora text-TextColor-0 flex items-center gap-2 transition-all duration-500 hover:text-PrimaryColor-0'
                        >
                          <FaRegComments className='text-PrimaryColor-0 text-lg' />
                          (3)
                        </Link>
                      </div>
                      <Link
                        to={'/blog_details'}
                        className='font-Sora font-medium tracking-wide text-base sm:text-lg leading-6 text-white transition-all duration-500 hover:text-PrimaryColor-0'
                      >
                        Real-world Examples of Successful JIT Logistics
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='px-4 sm:px-[25px] py-[30px] rounded-lg bg-BodyBg3-0 mb-[30px]'
                data-aos='fade-up'
                data-aos-delay='300'
                data-aos-duration='1000'
              >
                <h5 className='font-Sora font-bold text-white text-xl tracking-wide uppercase'>
                  Popular tag
                </h5>
                <ul className='flex flex-wrap items-center gap-[15px] mt-[25px]'>
                  <li>
                    <Link
                      to={'#'}
                      className='font-Sora text-white inline-block border border-BorderGrey4-0 rounded-full px-[15px] py-2 transition-all duration-500 ease-linear hover:bg-PrimaryColor-0 hover:border-PrimaryColor-0'
                    >
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'#'}
                      className='font-Sora text-white inline-block border border-BorderGrey4-0 rounded-full px-[15px] py-2 transition-all duration-500 ease-linear hover:bg-PrimaryColor-0 hover:border-PrimaryColor-0'
                    >
                      Analysis
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'#'}
                      className='font-Sora text-white inline-block border border-BorderGrey4-0 rounded-full px-[15px] py-2 transition-all duration-500 ease-linear hover:bg-PrimaryColor-0 hover:border-PrimaryColor-0'
                    >
                      Technology
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'#'}
                      className='font-Sora text-white inline-block border border-BorderGrey4-0 rounded-full px-[15px] py-2 transition-all duration-500 ease-linear hover:bg-PrimaryColor-0 hover:border-PrimaryColor-0'
                    >
                      Finance
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'#'}
                      className='font-Sora text-white inline-block border border-BorderGrey4-0 rounded-full px-[15px] py-2 transition-all duration-500 ease-linear hover:bg-PrimaryColor-0 hover:border-PrimaryColor-0'
                    >
                      Design
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <FsLightbox
          toggler={toggler}
          sources={['https://youtu.be/6kYRUsXtS4s?si=PZDWPl1EAxKJQC0y']}
        />
      </section>
    </>
  );
};

export default BlogInner;
