import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useSwiper } from "swiper/react";

const BlogNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className='flex justify-between w-full absolute gap-5 left-0 top-[45%] px-4'>
      <button
        className='size-[46px] rounded-full overflow-hidden relative bg-transparent flex items-center text-2xl text-white justify-center transition-all duration-500 z-10 after:absolute after:top-[0] after:rotate-180 after:left-[0] after:bg-PrimaryColor-0 after:w-full after:h-full after:opacity-70 after:-z-10 after:transition-all after:duration-500 hover:after:opacity-100'
        onClick={() => swiper.slidePrev()}
      >
        <GoArrowLeft />
      </button>
      <button
        className='size-[46px] rounded-full overflow-hidden relative bg-transparent flex items-center text-2xl text-white justify-center transition-all duration-500 z-10 after:absolute after:top-[0] after:rotate-180 after:left-[0] after:bg-PrimaryColor-0 after:w-full after:h-full after:opacity-70 after:-z-10 after:transition-all after:duration-500 hover:after:opacity-100'
        onClick={() => swiper.slideNext()}
      >
        <GoArrowRight />
      </button>
    </div>
  );
};

export default BlogNavigation;
