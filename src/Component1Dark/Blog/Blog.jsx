import { FaRegCalendarDays, FaRegComments } from 'react-icons/fa6';
import blogThumb from '/images/blog/1.jpg';
import blogThumb2 from '/images/blog/2.jpg';
import blogThumb3 from '/images/blog/3.jpg';
import BlogCard from './BlogCard';

const Blog = () => {
  return (
    <section className='py-[60px] md:py-20 lg:py-[100px] xl:py-[120px] bg-BodyBg-0'>
      <div className='Container'>
        <div className='text-center'>
          <h1
            className='font-Sora text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] font-bold bg-gradient-to-l to-PrimaryColor-0 via-PrimaryColor-0 from-white from-30% bg-clip-text text-transparent'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            Recent Blogs
          </h1>
          <p
            className='font-Sora text-TextColor-0 mt-2 mx-auto max-w-[640px] w-full'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 lg:gap-5 xl:gap-7 2xl:gap-10 mt-10 md:mt-[48px]'>
          <div
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <BlogCard
              blogThumb={blogThumb}
              thumbTitle={'Tutorial'}
              blogDateIcon={<FaRegCalendarDays />}
              blogCommentIcon={<FaRegComments />}
              blogDate={'Oct 01, 2024'}
              blogComment={'Comment (0)'}
              blogUrl={'/blog_details'}
              blogTitle={'Top 10 ui ux designers'}
            />
          </div>
          <div
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <BlogCard
              blogThumb={blogThumb2}
              thumbTitle={'Tips'}
              blogDateIcon={<FaRegCalendarDays />}
              blogCommentIcon={<FaRegComments />}
              blogDate={'Nov 01, 2024'}
              blogComment={'Comment (0)'}
              blogUrl={'/blog_details'}
              blogTitle={'App Development Guides'}
            />
          </div>
          <div
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <BlogCard
              blogThumb={blogThumb3}
              thumbTitle={'Tutorial'}
              blogDateIcon={<FaRegCalendarDays />}
              blogCommentIcon={<FaRegComments />}
              blogDate={'Dec 01, 2024'}
              blogComment={'Comment (0)'}
              blogUrl={'/blog_details'}
              blogTitle={'learn graphic design free'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
