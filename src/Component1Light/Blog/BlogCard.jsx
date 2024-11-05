/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const BlogCard = ({
  blogThumb,
  thumbTitle,
  blogDateIcon,
  blogDate,
  blogComment,
  blogUrl,
  blogTitle,
  blogCommentIcon,
}) => {
  return (
    <div className='group transition-all duration-500 rounded-2xl relative z-10 overflow-hidden max-w-[400px] w-full mx-auto'>
      <Link to={blogUrl}>
        <img
          src={blogThumb}
          className='transition-all duration-700 scale-100 group-hover:scale-110 w-full'
        />
      </Link>
      <Link
        to={blogUrl}
        className='absolute top-[15px] left-[15px]'
      >
        <span className='font-Sora font-medium text-[13px] px-[10px] py-[5px] rounded-full text-white uppercase bg-PrimaryColor-0 overflow-hidden relative z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-gradient-to-l before:from-Secondarycolor-0 before:from-5% before:to-PrimaryColor-0 before:opacity-0 before:transition-opacity before:duration-500 before:ease-linear before:rounded-full before:-z-10 group-hover:before:opacity-100'>
          {thumbTitle}
        </span>
      </Link>
      <div className='absolute left-0 bottom-[10px] md:bottom-[15px] z-20 w-full'>
        <div className='relative z-10 rounded-2xl px-[15px] pt-3 pb-[18px] bg-BodyBgLight-0 w-[calc(100%-20px)] xl:w-[calc(100%-40px)] mx-auto before:absolute before:left-0 before:top-0 before:bg-gradient-to-l before:to-PrimaryColor-0 before:from-Secondarycolor-0 before:opacity-0 before:w-full before:h-full before:-z-10 before:[transition:opacity_0.5s_linear] group-hover:before:opacity-100 overflow-hidden'>
          <div className='flex flex-wrap gap-3 sm:gap-6 lg:gap-2 xl:gap-6 mb-[2px] md:mb-2'>
            <p className='font-Sora text-sm font-medium text-PrimaryColor-0 transition-all duration-500 group-hover:text-white flex gap-2 items-center capitalize'>
              <span className='text-[16px] relative bottom-[1px]'>
                {blogDateIcon}
              </span>
              <span>{blogDate}</span>
            </p>
            <Link
              to={'/'}
              className='font-Sora text-sm font-medium text-PrimaryColor-0 transition-all duration-500 group-hover:text-white flex gap-2 items-center capitalize'
            >
              <span className='text-[18px] relative bottom-[1px]'>
                {blogCommentIcon}
              </span>
              <span>{blogComment}</span>
            </Link>
          </div>
          <Link to={blogUrl}>
            <button className='font-Sora text-left font-semibold text-lg sm:text-[22px] md:text-[22px] lg:text-lg xl:text-[21px] 2xl:text-[23px] text-Secondarycolor-0 transition-all duration-500 group-hover:text-white capitalize'>
              {blogTitle}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
