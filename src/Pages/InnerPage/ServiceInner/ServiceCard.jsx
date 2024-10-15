/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const ServiceCard = ({
  serviceIcon,
  serviceUrl,
  serviceTitle,
  serviceDesc,
}) => {
  return (
    <div className='rounded-2xl bg-transparent border border-PrimaryColor-0 transition-all duration-500 hover:border-white bg-PrimaryColor-0 group relative z-10 pt-10 px-4 sm:px-9 md:px-6 lg:px-4 xl:px-9 pb-9'>
      <div className='flex items-center gap-5'>
        <div className='size-[72px] rounded-full bg-white bg-opacity-20 border-2 border-white border-opacity-75 relative overflow-hidden'>
          <img
            src={serviceIcon}
            draggable='false'
            className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
          />
        </div>
        <div className='flex-1 inline-block'>
          <Link to={serviceUrl}>
            <button className='font-Sora font-bold text-left text-white'>
              {serviceTitle}
            </button>
          </Link>
        </div>
      </div>
      <p className='font-Sora text-white'>
        {serviceDesc}
      </p>
    </div>
  );
};

export default ServiceCard;
