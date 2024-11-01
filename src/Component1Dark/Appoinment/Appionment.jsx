import { FaRegEnvelope } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Appoinment = () => {
  return (
    <section className='bg-BodyBg2-0 py-[60px] md:py-20 lg:py-28 relative z-10 overflow-hidden'>
      <div className='Container'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-[22px] relative z-10'>
          <div
            className='relative z-10 lg:pl-28 md:hidden'
            data-aos='fade-up-left'
            data-aos-delay='400'
            data-aos-duration='1000'
          >
            <div className='flex items-start gap-[26px] mb-[38px]'>
              <div className='size-[50px] rounded-full bg-[linear-gradient(161deg,_#2a1454_0%,_#8750f7_100%)] text-TextColor-0 flex items-center justify-center'>
                <FiPhoneCall size={'22'} />
              </div>
              <div className='flex-1 inline-block'>
                <h6 className='font-Sora text-TextColor-0 pb-[5px]'>Phone</h6>
                <Link
                  to={'/'}
                  className='font-Sora font-medium text-base sm:text-xl text-white transition-all duration-500 hover:text-PrimaryColor-0'
                >
                  +01 123 654 8096
                </Link>
              </div>
            </div>
            <div className='flex items-start gap-[26px] mb-[38px]'>
              <div className='size-[50px] rounded-full bg-[linear-gradient(161deg,_#2a1454_0%,_#8750f7_100%)] text-TextColor-0 flex items-center justify-center'>
                <FaRegEnvelope size={'21'} />
              </div>
              <div className='flex-1 inline-block'>
                <h6 className='font-Sora text-TextColor-0 pb-[5px]'>Email</h6>
                <Link
                  to={'/'}
                  className='font-Sora font-medium text-base sm:text-xl text-white transition-all duration-500 hover:text-PrimaryColor-0'
                >
                  gerolddesign@mail.com
                </Link>
              </div>
            </div>
            <div className='flex items-start gap-[26px]'>
              <div className='size-[50px] rounded-full bg-[linear-gradient(161deg,_#2a1454_0%,_#8750f7_100%)] text-TextColor-0 flex items-center justify-center'>
                <IoLocationOutline size={'22'} />
              </div>
              <div className='flex-1 inline-block'>
                <h6 className='font-Sora text-TextColor-0 pb-[5px]'>Address</h6>
                <p className='font-Sora font-medium text-base sm:text-xl text-white transition-all duration-500 hover:text-PrimaryColor-0'>
                  Warne Park Street Pine, <br /> FL 33157, New York
                </p>
              </div>
            </div>
          </div>
          <div className='px-4 sm:px-10 md:px-5 lg:px-6 xl:px-10 pt-9 pb-10 md:py-7 lg:pt-9 lg:pb-10 bg-BodyBg3-0 rounded-2xl mt-6 lg:mt-0'>
            <h1
              className='font-Sora text-[25px] sm:text-[34px] md:leading-[40px] lg:text-[38px] xl:text-[45px] font-bold bg-gradient-to-r from-PrimaryColor-0 to-white bg-clip-text text-transparent'
              data-aos='fade-up-right'
              data-aos-duration='1000'
            >
              Let’s work together!
            </h1>
            <p
              className='font-Sora text-TextColor-0 font-light pt-2'
              data-aos='fade-up-right'
              data-aos-duration='1000'
            >
              I design and code beautifully simple things and i love what i do.
              Just simple like that!
            </p>
            <form
              action='https://formspree.io/f/xkgngbnj'
              method='post'
              className='flex flex-col gap-y-4 mt-6'
              data-aos='fade-up-right'
              data-aos-duration='1000'
            >
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <input
                  type='text'
                  name='first-name'
                  id='first-name'
                  placeholder='First Name*'
                  required
                  className='font-Sora text-TextColor-0 bg-BodyBg2-0 placeholder:text-TextColor-0 placeholder:text-opacity-40 border border-BorderColor-0 rounded-lg py-2 px-5 h-[52px] w-full focus:border-PrimaryColor-0 focus:outline-none'
                />
                <input
                  type='text'
                  name='last-name'
                  id='last-name'
                  placeholder='Last Name*'
                  required
                  className='font-Sora text-TextColor-0 bg-BodyBg2-0 placeholder:text-TextColor-0 placeholder:text-opacity-40 font-light border border-BorderColor-0 rounded-lg py-2 px-5 h-[52px] w-full focus:border-PrimaryColor-0 focus:outline-none'
                />
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Enter E-Mail*'
                  required
                  className='font-Sora text-TextColor-0 bg-BodyBg2-0 placeholder:text-TextColor-0 placeholder:text-opacity-40 font-light border border-BorderColor-0 rounded-lg py-2 px-5 h-[52px] w-full focus:border-PrimaryColor-0 focus:outline-none'
                />
                <input
                  type='text'
                  name='number'
                  id='number'
                  placeholder='Enter Number*'
                  required
                  className='font-Sora text-TextColor-0 bg-BodyBg2-0 placeholder:text-TextColor-0 placeholder:text-opacity-40 font-light border border-BorderColor-0 rounded-lg py-2 px-5 h-[52px] w-full focus:border-PrimaryColor-0 focus:outline-none'
                />
              </div>
              <select
                name='select'
                id='select'
                className='font-Sora text-TextColor-0 bg-BodyBg2-0 placeholder:text-TextColor-0 placeholder:text-opacity-40 font-light border border-BorderColor-0 rounded-lg py-2 px-5 h-[52px] w-full focus:border-PrimaryColor-0 focus:outline-none'
              >
                <option value='subject'>Your Subject</option>
                <option value='subject2'>Bangla</option>
                <option value='subject3'>Arabic</option>
                <option value='subject4'>China</option>
              </select>
              <textarea
                name='message'
                id='message'
                placeholder='Write a short meassage...'
                className='font-Sora text-TextColor-0 bg-BodyBg2-0 placeholder:text-TextColor-0 placeholder:text-opacity-40 font-light border border-BorderColor-0 rounded-lg py-2 px-5 h-[198px] w-full focus:border-PrimaryColor-0 focus:outline-none resize-none'
              ></textarea>
              <div className='inline-block header-btn'>
                <button
                  type='submit'
                  className='!py-5'
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div
            className='relative z-10 lg:pl-28 hidden md:block'
            data-aos='fade-up-left'
            data-aos-delay='400'
            data-aos-duration='1000'
          >
            <div className='flex items-start gap-[26px] mb-[38px]'>
              <div className='size-[50px] rounded-full bg-[linear-gradient(161deg,_#2a1454_0%,_#8750f7_100%)] text-TextColor-0 flex items-center justify-center'>
                <FiPhoneCall size={'22'} />
              </div>
              <div className='flex-1 inline-block'>
                <h6 className='font-Sora text-TextColor-0 pb-[5px]'>Phone</h6>
                <Link
                  to={'/'}
                  className='font-Sora font-medium text-base sm:text-xl text-white transition-all duration-500 hover:text-PrimaryColor-0'
                >
                  +01 123 654 8096
                </Link>
              </div>
            </div>
            <div className='flex items-start gap-[26px] mb-[38px]'>
              <div className='size-[50px] rounded-full bg-[linear-gradient(161deg,_#2a1454_0%,_#8750f7_100%)] text-TextColor-0 flex items-center justify-center'>
                <FaRegEnvelope size={'21'} />
              </div>
              <div className='flex-1 inline-block'>
                <h6 className='font-Sora text-TextColor-0 pb-[5px]'>Email</h6>
                <Link
                  to={'/'}
                  className='font-Sora font-medium text-base sm:text-xl text-white transition-all duration-500 hover:text-PrimaryColor-0'
                >
                  gerolddesign@mail.com
                </Link>
              </div>
            </div>
            <div className='flex items-start gap-[26px]'>
              <div className='size-[50px] rounded-full bg-[linear-gradient(161deg,_#2a1454_0%,_#8750f7_100%)] text-TextColor-0 flex items-center justify-center'>
                <IoLocationOutline size={'22'} />
              </div>
              <div className='flex-1 inline-block'>
                <h6 className='font-Sora text-TextColor-0 pb-[5px]'>Address</h6>
                <p className='font-Sora font-medium text-base sm:text-xl text-white transition-all duration-500 hover:text-PrimaryColor-0'>
                  Warne Park Street Pine, <br /> FL 33157, New York
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appoinment;
