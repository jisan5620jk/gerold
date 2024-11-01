import './dance-text.css';
import { GoArrowRight } from 'react-icons/go';
import { useEffect } from 'react';

const DanceText = () => {
useEffect(() => {
  const target = document.getElementById('anim');
  const splitTextToSpans = (targetElement) => {
    if (targetElement) {
      const text = targetElement.textContent;
      targetElement.innerHTML = '';
      [...text].forEach((character) => {
        const span = document.createElement('span');
        span.innerHTML = character === ' ' ? ' ' : character;
        targetElement.appendChild(span);
      });
    }
  };
  splitTextToSpans(target);
}, []);

  return (
    <div className='bg-BodyBgLight-0 pt-[60px] md:pt-20 lg:pt-[134px] pb-[60px] md:pb-20 lg:pb-[106px]'>
      <div className='Container'>
        <div className='mx-auto max-w-[1080px] w-full'>
          <p
            className='font-Sora text-Secondarycolor-0 md-mb-[14px]'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            Want to start a project?
          </p>
          <div>
            <h1
              id='anim'
              className='font-Sora text-[40px] md:text-[82px] lg:text-[110px] xl:text-[128px] font-bold text-PrimaryColor-0'
            >
              Let’s&nbsp;have&nbsp;a&nbsp;chat
            </h1>
          </div>
          <div className='flex md:justify-end md:-mt-2 lg:-mt-6'>
            <a
              href='mailto:info@taylor.com'
              className='flex items-center gap-4 font-Sora text-xl md:text-[32px] group text-PrimaryColor-0 pb-[14px] relative z-10 before:absolute before:right-0 before:bottom-0 before:h-[1px] before:w-0 before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full'
            >
              info@taylor.com{' '}
              <span className='size-7 md:size-[43px] rounded-full border border-PrimaryColor-0 flex items-center justify-center text-center text-xl md:text-2xl transition-all duration-500 -rotate-45 group-hover:rotate-0'>
                <GoArrowRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DanceText;
