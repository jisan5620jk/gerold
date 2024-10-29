import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Home1 from '../Pages/Home1/Home1';
import ErrorPage from '../Shared/ErrorPage/ErrorPage';
import Home2 from '../Pages/Home2/Home2';
import Main2 from '../Main/Main2';
import Main3 from '../Main/Main3';
import Home3 from '../Pages/Home3/Home3';
import Main4 from '../Main/Main4';
import ServiceInner from '../Pages/InnerPage/ServiceInner/ServiceInner';
import ContactInner from '../Pages/InnerPage/ContactInner/ContactInner';
import Main5 from '../Main/Main5';
import Main6 from '../Main/Main6';
import AboutInner from '../Pages/InnerPage/AboutInner/AboutInner';
import Main7 from '../Main/Main7';
import PortfolioInner from '../Pages/InnerPage/PortfolioInner/PortfolioInner';
import BlogInner from '../Pages/InnerPage/BlogInner/BlogInner';
import Main8 from '../Main/Main8';
import Main9 from '../Main/Main9';
import BlogDetails from '../Pages/InnerPage/BlogDetails/BlogDetails';
import Home4 from '../Pages/Home4/Home4';
import Main10 from '../Main/Main10';
import BlogDetailsLight from '../Pages/InnerPage/BlogDetailsLight/BlogDetailsLight';
import BlogInnerLight from '../Pages/InnerPage/BlogInnerLight/BlogInnerLight';
import ContactInnerLight from '../Pages/InnerPage/ContactInnerLight/ContactInnerLight';
import PortfolioInnerLight from '../Pages/InnerPage/PortfolioInnerLight/PortfolioInnerLight';
import ServiceInnerLight from '../Pages/InnerPage/ServiceInnerLight/ServiceInnerLight';
import AboutInnerLight from '../Pages/InnerPage/AboutInnerLight/AboutInnerLight';
import Main11 from '../Main/Main11';
import Main12 from '../Main/Main12';
import Main13 from '../Main/Main13';
import Main14 from '../Main/Main14';
import Main15 from '../Main/Main15';
import Main16 from '../Main/Main16';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [{ path: '/', element: <Home1 /> }],
  },
  {
    path: '/home_light',
    element: <Main2 />,
    errorElement: <ErrorPage />,
    children: [{ path: '/home_light', element: <Home2 /> }],
  },
  {
    path: '/home2',
    element: <Main3 />,
    errorElement: <ErrorPage />,
    children: [{ path: '/home2', element: <Home3 /> }],
  },
  {
    path: '/home2_light',
    element: <Main10 />,
    errorElement: <ErrorPage />,
    children: [{ path: '/home2_light', element: <Home4 /> }],
  },
  {
    path: '/about',
    element: <Main6 />,
    errorElement: <ErrorPage />,
    children: [{ path: '/about', element: <AboutInner /> }],
  },
  {
    path: '/about_light',
    element: <Main11 />,
    errorElement: <ErrorPage />,
    children: [{ path: '/about_light', element: <AboutInnerLight /> }],
  },
  {
    path: '/service',
    element: <Main4 />,
    errorElement: <ErrorPage />,
    children: [{ path: '/service', element: <ServiceInner /> }],
  },
  {
    path: '/service_light',
    element: <Main12 />,
    errorElement: <ErrorPage />,
    children: [{ path: '/service_light', element: <ServiceInnerLight /> }],
  },
  {
    path: '/portfolio',
    element: <Main7 />,
    errorElement: <ErrorPage />,
    children: [{ path: '/portfolio', element: <PortfolioInner /> }],
  },
  {
    path: '/portfolio_light',
    element: <Main13 />,
    errorElement: <ErrorPage />,
    children: [{ path: '/portfolio_light', element: <PortfolioInnerLight /> }],
  },
  {
    path: '/blog',
    element: <Main8 />,
    errorElement: <ErrorPage />,
    children: [{ path: '/blog', element: <BlogInner /> }],
  },
  {
    path: '/blog_light',
    element: <Main15 />,
    errorElement: <ErrorPage />,
    children: [{ path: '/blog_light', element: <BlogInnerLight /> }],
  },
  {
    path: '/blog_details',
    element: <Main9 />,
    errorElement: <ErrorPage />,
    children: [{ path: '/blog_details', element: <BlogDetails /> }],
  },
  {
    path: '/blog_details_light',
    element: <Main14 />,
    errorElement: <ErrorPage />,
    children: [{ path: '/blog_details_light', element: <BlogDetailsLight /> }],
  },
  {
    path: '/contact',
    element: <Main5 />,
    errorElement: <ErrorPage />,
    children: [{ path: '/contact', element: <ContactInner /> }],
  },
  {
    path: '/contact_light',
    element: <Main16 />,
    errorElement: <ErrorPage />,
    children: [{ path: '/contact_light', element: <ContactInnerLight /> }],
  },
]);

export default router;
