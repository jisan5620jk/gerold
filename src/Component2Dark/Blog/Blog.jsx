import { FaRegCalendarDays, FaRegComments } from 'react-icons/fa6';
import blogThumb from '/images/blog/1.jpg';
import blogThumb2 from '/images/blog/2.jpg';
import blogThumb3 from '/images/blog/3.jpg';
import BlogCard from './BlogCard';

const BlogData = [
  {
    id: 1,
    blogThumb: blogThumb,
    thumbTitle: 'Tutorial',
    blogCommentIcon: <FaRegComments />,
    blogDateIcon: <FaRegCalendarDays />,
    blogDate: 'Oct 01, 2024',
    blogComment: 'Comment (0)',
    blogUrl: '/blog_details',
    blogTitle: 'Top 10 ui ux designers',
  },
  {
    id: 2,
    blogThumb: blogThumb2,
    thumbTitle: 'Tips',
    blogCommentIcon: <FaRegComments />,
    blogDateIcon: <FaRegCalendarDays />,
    blogDate: 'Nov 01, 2024',
    blogComment: 'Comment (0)',
    blogUrl: '/blog_details',
    blogTitle: 'App Development Guides',
  },
  {
    id: 3,
    blogThumb: blogThumb3,
    thumbTitle: 'Freebies',
    blogDate: 'Dec 01, 2024',
    blogCommentIcon: <FaRegComments />,
    blogDateIcon: <FaRegCalendarDays />,
    blogComment: 'Comment (0)',
    blogUrl: '/blog_details',
    blogTitle: 'learn graphic design free',
  },
];

const Blog = () => {

  return (
    <section className='py-28 bg-BodyBg-0'>
      <div className='Container'>
        <div className='text-center'>
          <h1 className='font-Sora text-[27px] sm:text-[34px] md:text-[45px] font-bold bg-gradient-to-l to-PrimaryColor-0 via-PrimaryColor-0 from-white from-30% bg-clip-text text-transparent'>
            Recent Blogs
          </h1>
          <p className='font-Sora text-TextColor-0 mt-2 mx-auto max-w-[640px] w-full'>
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10 lg:gap-5 xl:gap-7 2xl:gap-10 mt-[48px]'>
          {BlogData.map(
            ({
              id,
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
                <div key={id}>
                  <BlogCard
                    blogThumb={blogThumb}
                    thumbTitle={thumbTitle}
                    blogDateIcon={blogDateIcon}
                    blogDate={blogDate}
                    blogComment={blogComment}
                    blogCommentIcon={blogCommentIcon}
                    blogUrl={blogUrl}
                    blogTitle={blogTitle}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
