/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const BreadCrumb = ({
  breadCrumbTitle,
  breadCrumbIcon,
  url,
  breadCrumbLink,
}) => {
  return (
    <div className='bg-BodyBg-0'>
      <div className="bg-[url('/images/breadcrumb/breadcrumb-bg.jpg')] bg-no-repeat bg-cover bg-center flex items-center justify-center min-h-[350px] pt-[200px] pb-[100px]">
        <div className='Container text-center'>
          <h1 className='font-Sora font-bold text-2xl sm:text-4xl md:text-[50px] text-white uppercase'>
            {breadCrumbTitle}
          </h1>
          <ul className='flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center mt-[22px]'>
            <li>
              <Link to={'/'}>
                <button className='font-Sora text-white transition-all duration-500 hover:text-PrimaryColor-0 uppercase'>
                  Home
                </button>
              </Link>
            </li>
            <li>
              <div className='text-white hidden sm:block'>{breadCrumbIcon}</div>
            </li>
            <li>
              <Link to={url}>
                <button className='font-Sora text-white uppercase'>
                  {breadCrumbLink}
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
