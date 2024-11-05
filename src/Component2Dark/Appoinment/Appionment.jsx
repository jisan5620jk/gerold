import {
  FaDribbble,
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';
import { PiArrowRightBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const Appoinment = () => {
  return (
    <section className='bg-BodyBg-0 py-[60px] md:py-20 lg:py-[100px] xl:py-[120px] relative z-10 overflow-hidden'>
      <div className='Container'>
        <div className='flex flex-wrap lg:flex-nowrap lg:justify-between items-center gap-[45px] bg-BodyBg3-0 border px-5 py-[30px] lg:p-[50px] border-Secondarycolor-0 rounded-2xl relative z-10'>
          <div
            className='relative z-10 lg:max-w-[400px] md:hidden'
            data-aos='fade-up-left'
            data-aos-duration='1000'
          >
            <div>
              <p className='font-Sora text-TextColor-0'>
                {`I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact anytime at 24/7.`}
              </p>
            </div>
            <ul className='my-11 space-y-6'>
              <li>
                <Link
                  to={'/'}
                  className='font-Sora text-xl text-white transition-all duration-500 hover:text-PrimaryColor-0 underline underline-offset-4 decoration-1'
                >
                  +01 123 654 8096
                </Link>
              </li>
              <li>
                <Link
                  to={'/'}
                  className='font-Sora text-xl text-white transition-all duration-500 hover:text-PrimaryColor-0 underline underline-offset-4 decoration-1'
                >
                  gerolddesign@mail.com
                </Link>
              </li>
              <li>
                <p className='font-Sora text-xl text-white transition-all duration-500 hover:text-PrimaryColor-0 underline underline-offset-4 decoration-1'>
                  Warne Park Street Pine, FL <br /> 33157, New York
                </p>
              </li>
            </ul>
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
          <div
            data-aos='fade-up-right'
            data-aos-duration='1000'
          >
            <div className='max-w-[600px]'>
              <h1 className='font-Sora text-[30px] sm:text-[34px] md:leading-[40px] lg:text-[40px] lg:leading-[50px] xl:text-[45px] font-medium bg-gradient-to-r from-PrimaryColor-0 via-white to-white bg-clip-text text-transparent'>
                Let’s work <br /> together!
              </h1>
              <p className='font-Sora text-TextColor-0 pt-5'>
                I design and code beautifully simple things and i love what i
                do. Just simple like that!
              </p>
            </div>
            <form
              action='https://formspree.io/f/xkgngbnj'
              method='post'
              className='flex flex-col gap-y-8 mt-6'
            >
              <input
                type='text'
                name='first-name'
                id='first-name'
                placeholder='First Name*'
                required
                className='font-Sora text-white bg-transparent placeholder:text-white placeholder:text-opacity-40 font-light border-b border-BorderGrey3-0 py-[13px] h-[52px] w-full focus:border-PrimaryColor-0 focus:outline-none'
              />
              <input
                type='text'
                name='last-name'
                id='last-name'
                placeholder='Last Name*'
                required
                className='font-Sora text-white bg-transparent placeholder:text-white placeholder:text-opacity-40 font-light border-b border-BorderGrey3-0 py-[13px] h-[52px] w-full focus:border-PrimaryColor-0 focus:outline-none'
              />
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Enter E-Mail*'
                required
                className='font-Sora text-white bg-transparent placeholder:text-white placeholder:text-opacity-40 font-light border-b border-BorderGrey3-0 py-[13px] h-[52px] w-full focus:border-PrimaryColor-0 focus:outline-none'
              />
              <input
                type='text'
                name='number'
                id='number'
                placeholder='Enter Number*'
                required
                className='font-Sora text-white bg-transparent placeholder:text-white placeholder:text-opacity-40 font-light border-b border-BorderGrey3-0 py-[13px] h-[52px] w-full focus:border-PrimaryColor-0 focus:outline-none'
              />
              <textarea
                name='message'
                id='message'
                placeholder='Write a short meassage...'
                className='font-Sora text-white bg-transparent placeholder:text-white placeholder:text-opacity-40 font-light border-b border-BorderGrey3-0 py-[13px] h-[206px] w-full focus:border-PrimaryColor-0 focus:outline-none resize-none'
              ></textarea>
              <div className='inline-block mt-2'>
                <button
                  type='submit'
                  className='primary-btn2 !py-[20px]'
                >
                  Send Message
                  <span className='icon-box'>
                    <span className='first-icon'>
                      <PiArrowRightBold size={'17'} />
                    </span>
                    <span className='last-icon'>
                      <PiArrowRightBold size={'17'} />
                    </span>
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div
            className='relative z-10 lg:max-w-[400px] hidden md:block'
            data-aos='fade-up-left'
            data-aos-duration='1000'
          >
            <div>
              <p className='font-Sora text-TextColor-0'>
                {`I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact anytime at 24/7.`}
              </p>
            </div>
            <ul className='my-11 space-y-6'>
              <li>
                <Link
                  to={'/'}
                  className='font-Sora text-xl text-white transition-all duration-500 hover:text-PrimaryColor-0 underline underline-offset-4 decoration-1'
                >
                  +01 123 654 8096
                </Link>
              </li>
              <li>
                <Link
                  to={'/'}
                  className='font-Sora text-xl text-white transition-all duration-500 hover:text-PrimaryColor-0 underline underline-offset-4 decoration-1'
                >
                  gerolddesign@mail.com
                </Link>
              </li>
              <li>
                <p className='font-Sora text-xl text-white transition-all duration-500 hover:text-PrimaryColor-0 underline underline-offset-4 decoration-1'>
                  Warne Park Street Pine, FL <br /> 33157, New York
                </p>
              </li>
            </ul>
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
    </section>
  );
};

export default Appoinment;
