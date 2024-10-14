/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const SkillCard = ({
  skillNumber,
  skillTitle,
  skillDesc,
  skillUrl,
  btnIcon,
}) => {
  return (
    <div className='grid grid-cols-12 relative z-10 overflow-hidden group border-b border-Secondarycolor-0 py-8'>
      <div className='col-span-5 flex items-center gap-5'>
        <h6 className='font-Sora font-bold text-xl text-PrimaryColor-0 uppercase'>
          {skillNumber}
        </h6>
        <h4 className='font-Sora font-bold text-xl sm:text-2xl lg:text-3xl text-white mt-1'>
          {skillTitle}
        </h4>
      </div>
      <div className='col-span-7 flex items-center justify-between max-w-[490px] w-full'>
        <p className='font-Sora text-TextColor-0'>{skillDesc}</p>
      </div>
      <div className='absolute top-1/2 -translate-y-1/2 right-8 inline-block'>
        <Link
          to={skillUrl}
          className='inline-block relative'
        >
          <button className='text-2xl text-PrimaryColor-0'>{btnIcon}</button>
        </Link>
      </div>
    </div>
  );
};

export default SkillCard;
