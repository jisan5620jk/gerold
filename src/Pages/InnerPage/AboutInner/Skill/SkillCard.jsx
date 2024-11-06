/* eslint-disable react/prop-types */

import CountUp from 'react-countup';

const SkillCard = ({ skillIcon, skillTitle, skillPercent, skillSuffix }) => {
  return (
    <div className='text-center group'>
      <div className='bg-BodyBg3-0 pt-6 md:pt-10 pb-5 md:pb-[26px] rounded-[20px] px-[52px] md:px-[59px] xl:px-[52px] 2xl:px-[59px] border border-BodyBg3-0 transition-all duration-700 group-hover:border-PrimaryColor-0 relative z-10 overflow-hidden'>
        <div className='mb-[25px]'>
          <img
            src={skillIcon}
            draggable='false'
            className='max-w-[60px] w-full mx-auto grayscale-[90%] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110'
          />
        </div>
        <CountUp
          start={-11}
          end={skillPercent}
          suffix={skillSuffix}
          className='font-Sora text-xl text-TextGrey-0 font-extrabold transition-all duration-500 group-hover:text-PrimaryColor-0'
        />
      </div>
      <h4 className='font-Sora text-white mt-[15px]'>{skillTitle}</h4>
    </div>
  );
};

export default SkillCard;
