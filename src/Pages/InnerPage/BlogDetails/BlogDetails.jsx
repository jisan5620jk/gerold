import {
  FaAnglesLeft,
  FaAnglesRight,
  FaArrowRightLong,
  FaLinkedinIn,
  FaPinterestP,
  FaRegCalendarDays,
  FaRegComments,
  FaRegUser,
  FaXTwitter,
} from 'react-icons/fa6';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import { Link } from 'react-router-dom';
import blogThumb from '/images/blog/blog-4.jpg';
import blogBtnImg from '/images/blog/1.jpg';
import blogBtnImg2 from '/images/blog/2.jpg';
import blogPost from '/images/blog/post-thumb-1.jpg';
import blogPost2 from '/images/blog/post-thumb-2.jpg';
import blogPost3 from '/images/blog/post-thumb-3.jpg';
import userImg from '/images/blog/user-1.jpg';
import userImg2 from '/images/blog/user-2.jpg';
import userImg3 from '/images/blog/user-3.jpg';
import userImg4 from '/images/blog/user-4.jpg';
import { PiQuotes } from 'react-icons/pi';
import { IoIosCheckmarkCircle, IoIosSearch } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';

const BlogDetails = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'Blog Details'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Blog Detials'}
      />
      <section className='py-[120px]bg-BodyBlack2-0'>
        <div className='Container'>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='col-span-2'>
              <article
                data-aos='fade-up'
                data-aos-delay='300'
                data-aos-duration='1000'
              >
                <div
                  to={'/blog_details'}
                  className='relative'
                >
                  <img
                    src={blogThumb}
                    draggable='false'
                    className='min-h-[250px] h-auto object-cover origin-center rounded-t-lg'
                  />
                  <Link
                    to={'/blog_details'}
                    className='absolute top-[15px] right-[15px]'
                  >
                    <span className='font-Sora text-[13px] px-[14px] py-[8px] rounded-full text-white uppercase bg-PrimaryColor-0 overflow-hidden relative z-20 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-gradient-to-l before:from-Secondarycolor-0 before:from-5% before:to-PrimaryColor-0 before:opacity- before:transition-opacity before:duration-500 before:ease-linear before:rounded-full before:-z-10 hover:before:opacity-100'>
                      Tutorial
                    </span>
                  </Link>
                </div>
                <div className='flex items-center flex-wrap gap-y-3 gap-x-[25px] mb-4 mt-[30px]'>
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
                <h3
                  to={'/blog_details'}
                  className='font-Sora text-white font-bold text-xl leading-8 sm:text-2xl sm:leading-8 md:text-3xl md:leading-10'
                >
                  The Role of Technology in Modern Logistics Management
                </h3>
                <p className='font-Sora text-TextColor-0 mt-5 mb-5'>
                  Welcome to our blog, where we celebrate our achievement as an
                  AWS SaaS Competency Partner and share insights on how we
                  accomplished this significant milestone.
                </p>
                <p className='font-Sora text-TextColor-0 mb-5'>
                  As businesses unlock growth opportunities in the digital age,
                  harnessing the power of cloud computing has become essential.
                  Amazon Web Services (AWS) offers the AWS SaaS Competency
                  Partner program, recognizing companies with exceptional
                  expertise in delivering Software-as-a-Service solutions on the
                  AWS platform.
                </p>
                <p className='font-Sora text-TextColor-0 mb-5'>
                  In this blog, we will delve into the strategies, best
                  practices, and key factors that accelerated our business
                  growth and earned us the prestigious AWS SaaS Competency
                  Partner status.
                </p>
              </article>
              <blockquote className='rounded-lg bg-BodyBg3-0 p-5 sm:py-10 sm:px-[30px] mb-7'>
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
              <h4 className='font-Sora font-bold text-2xl text-white'>
                The Role of Technology in Modern Logistics Management
              </h4>
              <p className='font-Sora text-TextColor-0 mt-[14px] mb-5'>
                Welcome to our blog, where we celebrate our achievement as an
                AWS SaaS Competency Partner and share insights on how we
                accomplished this significant milestone.
              </p>
              <p className='font-Sora text-TextColor-0 mb-5'>
                As businesses unlock growth opportunities in the digital age,
                harnessing the power of cloud computing has become essential.
                Amazon Web Services (AWS) offers the AWS SaaS Competency Partner
                program, recognizing companies with exceptional expertise in
                delivering Software-as-a-Service solutions on the AWS platform.
              </p>
              <p className='font-Sora text-TextColor-0 mb-5'>
                In this blog, we will delve into the strategies, best practices,
                and key factors that accelerated our business growth and earned
                us the prestigious AWS SaaS Competency Partner status.
              </p>
              <p className='font-Sora text-TextColor-0 mb-[26px]'>
                Explore the transformative impact of technology on logistics
                management. Discuss how technologies like IoT, AI, and
                blockchain are reshaping the industry and improving efficiency.
              </p>
              <h5 className='font-Sora font-bold text-lg text-white mb-3'>
                Key Points
              </h5>
              <ul className='space-y-2'>
                <li className='flex items-center gap-2 font-Sora text-TextColor-0 font-medium'>
                  <IoIosCheckmarkCircle
                    size={'20'}
                    className='text-PrimaryColor-0'
                  />
                  <span className='flex-1'>IoT and Real-Time Tracking</span>
                </li>
                <li className='flex items-center gap-2 font-Sora text-TextColor-0 font-medium'>
                  <IoIosCheckmarkCircle
                    size={'20'}
                    className='text-PrimaryColor-0'
                  />
                  <span className='flex-1'>
                    Artificial Intelligence in Route Optimization and Predictive
                    Analytics
                  </span>
                </li>
                <li className='flex items-center gap-2 font-Sora text-TextColor-0 font-medium'>
                  <IoIosCheckmarkCircle
                    size={'20'}
                    className='text-PrimaryColor-0'
                  />
                  <span className='flex-1'>
                    Blockchain for Enhanced Transparency and Security
                  </span>
                </li>
                <li className='flex items-center gap-2 font-Sora text-TextColor-0 font-medium'>
                  <IoIosCheckmarkCircle
                    size={'20'}
                    className='text-PrimaryColor-0'
                  />
                  <span className='flex-1'>
                    Warehouse Automation and Robotics
                  </span>
                </li>
              </ul>
              <h4 className='font-Sora font-bold text-2xl text-white mt-7'>
                Conclusion
              </h4>
              <p className='font-Sora text-TextColor-0 mb-5 mt-[14px]'>
                {` Emphasize the long-term benefits of integrating sustainable
                practices into logistics operations, both for the planet and a
                company's reputation.`}
              </p>
              <p className='font-Sora text-TextColor-0 mb-12'>
                These outlines can be expanded into comprehensive blog posts,
                each providing valuable insights and information on the
                respective topics.
              </p>
              <div className='flex flex-col md:flex-row md:justify-between items-start gap-8 py-[31px] border-y border-BorderColor-0'>
                <div className='flex flex-col sm:flex-row items-start gap-[30px]'>
                  <h4 className='font-Sora font-bold text-2xl text-white'>
                    Tags:
                  </h4>
                  <ul className='flex flex-wrap items-center gap-[10px]'>
                    <li>
                      <Link
                        to={'#'}
                        className='font-Sora text-white inline-block bg-BodyBg3-0 rounded-full px-[15px] py-2 transition-all duration-500 ease-linear hover:bg-PrimaryColor-0'
                      >
                        Business
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={'#'}
                        className='font-Sora text-white inline-block bg-BodyBg3-0 rounded-full px-[15px] py-2 transition-all duration-500 ease-linear hover:bg-PrimaryColor-0'
                      >
                        Analysis
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={'#'}
                        className='font-Sora text-white inline-block bg-BodyBg3-0 rounded-full px-[15px] py-2 transition-all duration-500 ease-linear hover:bg-PrimaryColor-0'
                      >
                        Technology
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={'#'}
                        className='font-Sora text-white inline-block bg-BodyBg3-0 rounded-full px-[15px] py-2 transition-all duration-500 ease-linear hover:bg-PrimaryColor-0'
                      >
                        Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={'#'}
                        className='font-Sora text-white inline-block bg-BodyBg3-0 rounded-full px-[15px] py-2 transition-all duration-500 ease-linear hover:bg-PrimaryColor-0'
                      >
                        Strategy
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={'#'}
                        className='font-Sora text-white inline-block bg-BodyBg3-0 rounded-full px-[15px] py-2 transition-all duration-500 ease-linear hover:bg-PrimaryColor-0'
                      >
                        Tips
                      </Link>
                    </li>
                  </ul>
                </div>
                <ul className='flex items-center gap-[10px]'>
                  <li>
                    <Link
                      to={'#'}
                      className='size-10 rounded-full overflow-hidden relative bg-transparent flex items-center border border-PrimaryColor-0  text-white justify-center transition-all duration-500 z-10 after:absolute after:top-0 after:rotate-180 after:left-0 after:bg-PrimaryColor-0 after:w-full after:h-full after:opacity-0 after:-z-10 after:transition-all after:duration-500 hover:after:opacity-100'
                    >
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'#'}
                      className='size-10 rounded-full overflow-hidden relative bg-transparent flex items-center border border-PrimaryColor-0 text-white justify-center transition-all duration-500 z-10 after:absolute after:top-0 after:rotate-180 after:left-0 after:bg-PrimaryColor-0 after:w-full after:h-full after:opacity-0 after:-z-10 after:transition-all after:duration-500 hover:after:opacity-100'
                    >
                      <FaXTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'#'}
                      className='size-10 rounded-full overflow-hidden relative bg-transparent flex items-center border border-PrimaryColor-0 text-white justify-center transition-all duration-500 z-10 after:absolute after:top-0 after:rotate-180 after:left-0 after:bg-PrimaryColor-0 after:w-full after:h-full after:opacity-0 after:-z-10 after:transition-all after:duration-500 hover:after:opacity-100'
                    >
                      <FaLinkedinIn />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'#'}
                      className='size-10 rounded-full overflow-hidden relative bg-transparent flex items-center border border-PrimaryColor-0 text-white justify-center transition-all duration-500 z-10 after:absolute after:top-0 after:rotate-180 after:left-0 after:bg-PrimaryColor-0 after:w-full after:h-full after:opacity-0 after:-z-10 after:transition-all after:duration-500 hover:after:opacity-100'
                    >
                      <FaPinterestP />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-[31px] border-b border-BorderColor-0'>
                <div className='bg-BodyBg3-0 py-[35px] px-5 sm:px-[25px] md:px-5 lg:px-[25px] flex items-start gap-5'>
                  <Link to={'/blog_details'}>
                    <img
                      src={blogBtnImg}
                      draggable='false'
                      className='max-w-[85px] w-full'
                    />
                  </Link>
                  <div className='flex-1'>
                    <h6 className='flex items-center gap-2 font-Sora text-PrimaryColor-0 uppercase mb-2'>
                      <FaAnglesLeft
                        size={'15'}
                        className='relative bottom-[2px]'
                      />
                      Previous
                    </h6>
                    <Link
                      to={'/blog_datails'}
                      className='font-Sora font-bold text-white text-lg md:text-base xl:text-lg leading-6 transition-all duration-500 hover:text-PrimaryColor-0'
                    >
                      Building a Real Estate Website Tips and Ideas
                    </Link>
                  </div>
                </div>
                <div className='bg-BodyBg3-0 py-[35px] px-5 sm:px-[25px] md:px-5 lg:px-[25px] flex items-start gap-5'>
                  <div className='flex-1 text-right'>
                    <h6 className='flex items-center justify-end gap-2 font-Sora text-PrimaryColor-0 uppercase mb-2'>
                      Next{' '}
                      <FaAnglesRight
                        size={'15'}
                        className='relative bottom-[2px]'
                      />
                    </h6>
                    <Link
                      to={'/blog_datails'}
                      className='font-Sora font-bold text-white text-lg md:text-base xl:text-lg leading-6 transition-all duration-500 hover:text-PrimaryColor-0'
                    >
                      Architecture Is Not Based On Concrete And Steel
                    </Link>
                  </div>
                  <Link to={'/blog_details'}>
                    <img
                      src={blogBtnImg2}
                      draggable='false'
                      className='max-w-[85px] w-full'
                    />
                  </Link>
                </div>
              </div>
              <h3 className='font-Sora font-bold text-3xl text-white pb-3 relative before:absolute before:bottom-0 before:left-0 before:bg-PrimaryColor-0 before:h-[2px] before:w-[60px] mb-[30px] mt-[46px]'>
                3 Comments
              </h3>
              <div className='flex flex-col sm:flex-row items-start gap-5 border-b border-BorderColor-0 pb-[30px] mb-[30px]'>
                <div>
                  <img src={userImg} />
                </div>
                <div className='flex-1 -mt-1'>
                  <Link
                    to={'/blog_details'}
                    className='font-Sora font-bold text-[22px] text-white transition-all duration-500 hover:text-PrimaryColor-0'
                  >
                    Jane Doe
                  </Link>
                  <h6 className='font-Sora text-TextColor-0 text-sm'>
                    January 3, 2024
                  </h6>
                  <p className='font-Sora text-TextColor-0 pt-4 pb-[30px]'>
                    England dotted with a lush, green landscape, rustic villages
                    and throbbing with humanity. South Asian country that has
                    plenty to offer to visitors with its diverse wildlife.
                  </p>
                  <Link
                    to={'/blog_details'}
                    className='font-Sora text-PrimaryColor-0 px-5 py-[5px] border border-PrimaryColor-0 transition-all ease-linear duration-500 hover:text-white hover:bg-PrimaryColor-0'
                  >
                    Reply
                  </Link>
                </div>
              </div>
              <div className='flex flex-col sm:flex-row items-start gap-5 border-b border-BorderColor-0 pb-[30px] md:ml-[30px] mb-[30px]'>
                <div>
                  <img src={userImg2} />
                </div>
                <div className='flex-1 -mt-1'>
                  <Link
                    to={'/blog_details'}
                    className='font-Sora font-bold text-[22px] text-white transition-all duration-500 hover:text-PrimaryColor-0'
                  >
                    Fred Bloggs
                  </Link>
                  <h6 className='font-Sora text-TextColor-0 text-sm'>
                    February 3, 2024
                  </h6>
                  <p className='font-Sora text-TextColor-0 pt-4 pb-[30px]'>
                    {`It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here making it look like readable English.`}
                  </p>
                  <Link
                    to={'/blog_details'}
                    className='font-Sora text-PrimaryColor-0 px-5 py-[5px] border border-PrimaryColor-0 transition-all ease-linear duration-500 hover:text-white hover:bg-PrimaryColor-0'
                  >
                    Reply
                  </Link>
                </div>
              </div>
              <div className='flex flex-col sm:flex-row items-start gap-5 border-b border-BorderColor-0 pb-[30px] md:ml-[30px] mb-[30px]'>
                <div>
                  <img src={userImg3} />
                </div>
                <div className='flex-1 -mt-1'>
                  <Link
                    to={'/blog_details'}
                    className='font-Sora font-bold text-[22px] text-white transition-all duration-500 hover:text-PrimaryColor-0'
                  >
                    Jane Bloggs
                  </Link>
                  <h6 className='font-Sora text-TextColor-0 text-sm'>
                    January 15, 2024
                  </h6>
                  <p className='font-Sora text-TextColor-0 pt-4 pb-[30px]'>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account
                  </p>
                  <Link
                    to={'/blog_details'}
                    className='font-Sora text-PrimaryColor-0 px-5 py-[5px] border border-PrimaryColor-0 transition-all ease-linear duration-500 hover:text-white hover:bg-PrimaryColor-0'
                  >
                    Reply
                  </Link>
                </div>
              </div>
              <div className='flex flex-col sm:flex-row items-start gap-5 border-b border-BorderColor-0 pb-[30px]'>
                <div>
                  <img src={userImg4} />
                </div>
                <div className='flex-1 -mt-1'>
                  <Link
                    to={'/blog_details'}
                    className='font-Sora font-bold text-[22px] text-white transition-all duration-500 hover:text-PrimaryColor-0'
                  >
                    Themedemos
                  </Link>
                  <h6 className='font-Sora text-TextColor-0 text-sm'>
                    January 20, 2024
                  </h6>
                  <p className='font-Sora text-TextColor-0 pt-4 pb-[30px]'>
                    {`There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage you need to be sure there isn't anything
                    embarrassing hidden in the middle of text. All the`}
                  </p>
                  <Link
                    to={'/blog_details'}
                    className='font-Sora text-PrimaryColor-0 px-5 py-[5px] border border-PrimaryColor-0 transition-all ease-linear duration-500 hover:text-white hover:bg-PrimaryColor-0'
                  >
                    Reply
                  </Link>
                </div>
              </div>
              <h3 className='font-Sora font-bold text-3xl text-white pb-3 relative before:absolute before:bottom-0 before:left-0 before:bg-PrimaryColor-0 before:h-[2px] before:w-[60px] mb-[20px] mt-[50px]'>
                Leave A Reply
              </h3>
              <p className='font-Sora text-TextColor-0'>
                Your email address will not be published. Required fields are
                marked *
              </p>
              <form
                action='https://formspree.io/f/xkgngbnj'
                method='post'
                className='flex flex-col gap-y-5 mt-4'
              >
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                  <input
                    type='text'
                    name='Enter Name'
                    id='Enter Name'
                    placeholder='Enter Name*'
                    required
                    className='font-Sora text-white bg-BodyBg3-0 placeholder:text-white placeholder:text-opacity-40 font-light border border-BorderColor-0 rounded-lg py-2 px-5 h-[52px] w-full focus:border-PrimaryColor-0 focus:outline-none'
                  />
                  <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Enter E-Mail*'
                    required
                    className='font-Sora text-white bg-BodyBg3-0 placeholder:text-white placeholder:text-opacity-40 font-light border border-BorderColor-0 rounded-lg py-2 px-5 h-[52px] w-full focus:border-PrimaryColor-0 focus:outline-none'
                  />
                </div>
                <input
                  type='url'
                  name='url'
                  id='url'
                  placeholder='Enter Website*'
                  required
                  className='font-Sora text-white bg-BodyBg3-0 placeholder:text-white placeholder:text-opacity-40 font-light border border-BorderColor-0 rounded-lg py-2 px-5 h-[52px] w-full focus:border-PrimaryColor-0 focus:outline-none'
                />
                <textarea
                  name='message'
                  id='message'
                  placeholder='Enter Your Comments'
                  className='font-Sora text-white bg-BodyBg3-0 placeholder:text-white placeholder:text-opacity-40 font-light border border-BorderColor-0 rounded-lg py-2 px-5 h-[200px] w-full focus:border-PrimaryColor-0 focus:outline-none resize-none'
                ></textarea>
                <label
                  htmlFor='terms'
                  className='flex items-center gap-2 font-Sora text-TextColor-0'
                >
                  <input
                    type='checkbox'
                    name='terms'
                    id='terms'
                  />
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
                <div className='inline-block header-btn mt-2'>
                  <button
                    type='submit'
                    className=''
                  >
                    Post Comment
                  </button>
                </div>
              </form>
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
      </section>
    </>
  );
};

export default BlogDetails;
