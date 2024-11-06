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
      <div className="bg-[url('/images/breadcrumb/breadcrumb-bg.jpg')] bg-no-repeat bg-cover bg-center flex items-center justify-center min-h-[250px] md:min-h-[350px] pt-[145px] md:pt-[194px] pb-[60px] md:pb-[100px] relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-BodyBg3-0 before:-z-10 before:bg-opacity-70">
        <div className='Container text-center'>
          <h1 className='font-Sora font-bold text-[35px] md:text-[50px] text-white capitalize'>
            {breadCrumbTitle}
          </h1>
          <ul className='flex gap-[10px] items-center justify-center mt-2 md:mt-0'>
            <li>
              <Link to={'/'}>
                <button className='font-Sora font-medium text-white transition-all duration-500 hover:text-PrimaryColor-0 capitalize'>
                  Home
                </button>
              </Link>
            </li>
            <li>
              <div className='text-white'>{breadCrumbIcon}</div>
            </li>
            <li>
              <Link to={url}>
                <button className='font-Sora font-medium text-white capitalize'>
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
