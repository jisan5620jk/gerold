import { Link } from 'react-router-dom';
import './dance-text.css';
import { GoArrowRight } from 'react-icons/go';

const DanceText = () => {
  const target = document.getElementById('anim');

  const splitTextToSpans = (targetElement) => {
    if (targetElement) {
      const text = targetElement.textContent;
      targetElement.innerHTML = '';
      [...text].forEach((character) => {
        const span = document.createElement('span');
        span.innerHTML = character === ' ' ? ' ' : character;
        targetElement.appendChild(span);
      });
    }
  };

  splitTextToSpans(target);

  return (
    <div className='bg-BodyBlack-0 py-[134px] pb-[106px]'>
      <div className='Container'>
        <div className='mx-auto max-w-[1080px] w-full'>
          <p
            className='font-Sora text-TextColor-0 -mb-[14px]'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            Want to start a project?
          </p>
          <div>
            <h1
              id='anim'
              className='font-Sora text-[27px] sm:text-[34px] md:text-[45px] lg:text-[128px] font-bold text-PrimaryColor-0'
            >
              Let’s have a chat
            </h1>
          </div>
          <div className='flex justify-end -mt-6'>
            <Link
              href='mailto:info@taylor.com'
              className='flex items-center gap-4 font-Sora text-[32px] group text-white pb-[14px] relative z-10 before:absolute before:right-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full'
            >
              info@taylor.com{' '}
              <span className='size-[43px] rounded-full border border-white flex items-center justify-center text-center text-2xl transition-all duration-500 -rotate-45 group-hover:rotate-0'>
                <GoArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DanceText;
