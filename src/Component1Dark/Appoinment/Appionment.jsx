/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { FaChevronDown, FaRegEnvelope } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import './custom-select.css';

const Appoinment = () => {
  const selectRef = useRef(null);
  const itemsRef = useRef([]);
  useEffect(() => {
    const handleClick = () => {
      selectRef.current.classList.toggle('select-arrow-active');
    };
    const handleItemClick = (item) => {
      const textElement = selectRef.current.querySelector('.select-text');
      textElement.innerText = item.innerText;
      selectRef.current.classList.remove('select-arrow-active');
    };
    const handleDocumentClick = (e) => {
      if (!selectRef.current.contains(e.target)) {
        selectRef.current.classList.remove('select-arrow-active');
      }
    };
    if (selectRef.current) {
      selectRef.current.onclick = handleClick;
    }
    itemsRef.current.forEach((item) => {
      if (item) {
        item.onclick = () => handleItemClick(item);
      }
    });
    document.onclick = handleDocumentClick;
    return () => {
      if (selectRef.current) {
        selectRef.current.onclick = null;
      }
      itemsRef.current.forEach((item) => {
        if (item) {
          item.onclick = null;
        }
      });
      document.onclick = null;
    };
  }, []);
  return (
    <section className='bg-BodyBg2-0 py-[60px] md:py-20 lg:py-[100px] xl:py-[120px] relative z-10 overflow-hidden'>
      <div className='Container'>
        <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-2 items-center gap-[22px] md:gap-0 lg:gap-[22px] relative z-10'>
          <div
            className='relative z-10 lg:pl-28 md:hidden mb-1'
            data-aos='fade-up-left'
            data-aos-duration='1000'
          >
            <div className='flex items-start gap-[25px] md:gap-[14px] lg:gap-[25px] mb-[40px]'>
              <div className='size-[50px] rounded-full bg-[linear-gradient(161deg,_#2a1454_0%,_#8750f7_100%)] text-TextColor-0 flex items-center justify-center'>
                <FiPhoneCall size={'22'} />
              </div>
              <div className='flex-1 inline-block'>
                <h6 className='font-Sora text-TextColor-0 pb-[4px]'>Phone</h6>
                <Link
                  to={'/'}
                  className='font-Sora font-medium text-lg lg:text-xl text-white transition-all duration-500 hover:text-PrimaryColor-0'
                >
                  +01 123 654 8096
                </Link>
              </div>
            </div>
            <div className='flex items-start gap-[25px] md:gap-[14px] lg:gap-[25px] mb-[40px]'>
              <div className='size-[50px] rounded-full bg-[linear-gradient(161deg,_#2a1454_0%,_#8750f7_100%)] text-TextColor-0 flex items-center justify-center'>
                <FaRegEnvelope size={'21'} />
              </div>
              <div className='flex-1 inline-block'>
                <h6 className='font-Sora text-TextColor-0 pb-[4px]'>Email</h6>
                <Link
                  to={'/'}
                  className='font-Sora font-medium text-lg lg:text-xl text-white transition-all duration-500 hover:text-PrimaryColor-0'
                >
                  gerolddesign@mail.com
                </Link>
              </div>
            </div>
            <div className='flex items-start gap-[25px] md:gap-[14px] lg:gap-[25px]'>
              <div className='size-[50px] rounded-full bg-[linear-gradient(161deg,_#2a1454_0%,_#8750f7_100%)] text-TextColor-0 flex items-center justify-center'>
                <IoLocationOutline size={'22'} />
              </div>
              <div className='flex-1 inline-block'>
                <h6 className='font-Sora text-TextColor-0 pb-[4px]'>Address</h6>
                <p className='font-Sora font-medium text-lg lg:text-xl text-white transition-all duration-500 hover:text-PrimaryColor-0'>
                  Warne Park Street Pine, <br /> FL 33157, New York
                </p>
              </div>
            </div>
          </div>
          <div className='md:col-span-7 lg:col-span-1 md:mr-[20px] lg:mr-0 px-4 md:px-5 lg:px-6 xl:px-10 pt-9 pb-7 md:py-7 lg:pt-[38px] lg:pb-10 bg-BodyBg3-0 rounded-2xl mt-6 lg:mt-0'>
            <h1
              className='font-Sora text-[30px] sm:text-[34px] md:leading-[40px] lg:text-[40px] lg:leading-[50px] xl:text-[45px] font-bold bg-gradient-to-r from-PrimaryColor-0 to-white bg-clip-text text-transparent'
              data-aos='fade-up-right'
              data-aos-duration='1000'
            >
              Let’s work together!
            </h1>
            <p
              className='font-Sora text-TextColor-0 pt-4'
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
                  placeholder='First name'
                  required
                  className='font-Sora text-TextColor-0 bg-BodyBg2-0 placeholder:text-TextGrey-0 border border-BorderColor-0 rounded-lg py-2 px-5 h-[52px] w-full transition-all duration-500 ease-linear outline-none focus:border-PrimaryColor-0 focus:outline-none'
                />
                <input
                  type='text'
                  name='last-name'
                  id='last-name'
                  placeholder='Last name'
                  required
                  className='font-Sora text-TextColor-0 bg-BodyBg2-0 placeholder:text-TextGrey-0 border border-BorderColor-0 rounded-lg py-2 px-5 h-[52px] w-full transition-all duration-500 ease-linear outline-none focus:border-PrimaryColor-0 focus:outline-none'
                />
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email address'
                  required
                  className='font-Sora text-TextColor-0 bg-BodyBg2-0 placeholder:text-TextGrey-0 border border-BorderColor-0 rounded-lg py-2 px-5 h-[52px] w-full transition-all duration-500 ease-linear outline-none focus:border-PrimaryColor-0 focus:outline-none'
                />
                <input
                  type='text'
                  name='number'
                  id='number'
                  placeholder='Phone number'
                  required
                  className='font-Sora text-TextColor-0 bg-BodyBg2-0 placeholder:text-TextGrey-0 border border-BorderColor-0 rounded-lg py-2 px-5 h-[52px] w-full transition-all duration-500 ease-linear outline-none focus:border-PrimaryColor-0 focus:outline-none'
                />
              </div>
              <div>
                <div
                  ref={selectRef}
                  className='select-box relative cursor-pointer flex items-center justify-between border bg-BodyBg2-0 border-BorderColor-0 rounded-lg py-2 pl-5 pr-2 h-[52px] w-full transition-all duration-500 ease-linear outline-none focus:border-PrimaryColor-0 focus:outline-none'
                >
                  <span className='select-text font-Sora text-TextColor-0'>
                    Choose Service
                  </span>
                  <span className='select-icon text-TextColor-0'>
                    <FaChevronDown />
                  </span>
                </div>
                <div className='select-options w-[240px]'>
                  <div ref={(el) => (itemsRef.current[0] = el)}>
                    Branding Design
                  </div>
                  <div ref={(el) => (itemsRef.current[1] = el)}>Web Design</div>
                  <div ref={(el) => (itemsRef.current[2] = el)}>
                    UI/UX Design
                  </div>
                  <div ref={(el) => (itemsRef.current[3] = el)}>App Design</div>
                </div>
              </div>
              <textarea
                name='message'
                id='message'
                placeholder='Meassage'
                className='font-Sora text-TextColor-0 bg-BodyBg2-0 placeholder:text-TextGrey-0 border border-BorderColor-0 rounded-lg py-2 px-5 h-[198px] w-full transition-all duration-500 ease-linear outline-none focus:border-PrimaryColor-0 focus:outline-none resize-none'
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
            className='md:col-span-5 lg:col-span-1 relative z-10 lg:pl-28 hidden md:block'
            data-aos='fade-up-left'
            data-aos-delay='400'
            data-aos-duration='1000'
          >
            <div className='flex items-start gap-[25px] md:gap-[14px] lg:gap-[25px] mb-[40px]'>
              <div className='size-[50px] rounded-full bg-[linear-gradient(161deg,_#2a1454_0%,_#8750f7_100%)] text-TextColor-0 flex items-center justify-center'>
                <FiPhoneCall size={'22'} />
              </div>
              <div className='flex-1 inline-block'>
                <h6 className='font-Sora text-TextColor-0 pb-[4px]'>Phone</h6>
                <Link
                  to={'/'}
                  className='font-Sora font-medium text-lg lg:text-xl text-white transition-all duration-500 hover:text-PrimaryColor-0'
                >
                  +01 123 654 8096
                </Link>
              </div>
            </div>
            <div className='flex items-start gap-[25px] md:gap-[14px] lg:gap-[25px] mb-[40px]'>
              <div className='size-[50px] rounded-full bg-[linear-gradient(161deg,_#2a1454_0%,_#8750f7_100%)] text-TextColor-0 flex items-center justify-center'>
                <FaRegEnvelope size={'21'} />
              </div>
              <div className='flex-1 inline-block'>
                <h6 className='font-Sora text-TextColor-0 pb-[4px]'>Email</h6>
                <Link
                  to={'/'}
                  className='font-Sora font-medium text-lg lg:text-xl text-white transition-all duration-500 hover:text-PrimaryColor-0'
                >
                  gerolddesign@mail.com
                </Link>
              </div>
            </div>
            <div className='flex items-start gap-[25px] md:gap-[14px] lg:gap-[25px]'>
              <div className='size-[50px] rounded-full bg-[linear-gradient(161deg,_#2a1454_0%,_#8750f7_100%)] text-TextColor-0 flex items-center justify-center'>
                <IoLocationOutline size={'22'} />
              </div>
              <div className='flex-1 inline-block'>
                <h6 className='font-Sora text-TextColor-0 pb-[4px]'>Address</h6>
                <p className='font-Sora font-medium text-lg lg:text-xl text-white transition-all duration-500 hover:text-PrimaryColor-0'>
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
