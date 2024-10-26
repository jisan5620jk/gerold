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
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home1 />,
      },
    ],
  },  
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Main2 />,
    children: [
      {
        path: '/home_light',
        element: <Home2 />,
      },
    ],
  },
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Main3 />,
    children: [
      {
        path: '/home2',
        element: <Home3 />,
      },
    ],
  },
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Main10 />,
    children: [
      {
        path: '/home2_light',
        element: <Home4 />,
      },
    ],
  },
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Main6 />,
    children: [
      {
        path: '/about',
        element: <AboutInner />,
      },
    ],
  },
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Main11 />,
    children: [
      {
        path: '/about_light',
        element: <AboutInnerLight />,
      },
    ],
  },
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Main4 />,
    children: [
      {
        path: '/service',
        element: <ServiceInner />,
      },
    ],
  },
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Main12 />,
    children: [
      {
        path: '/service_light',
        element: <ServiceInnerLight />,
      },
    ],
  },
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Main7 />,
    children: [
      {
        path: '/portfolio',
        element: <PortfolioInner />,
      },
    ],
  },
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Main13 />,
    children: [
      {
        path: '/portfolio_light',
        element: <PortfolioInnerLight />,
      },
    ],
  },
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Main8 />,
    children: [
      {
        path: '/blog',
        element: <BlogInner />,
      },
    ],
  },
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Main15 />,
    children: [
      {
        path: '/blog_light',
        element: <BlogInnerLight />,
      },
    ],
  },
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Main9 />,
    children: [
      {
        path: '/blog_details',
        element: <BlogDetails />,
      },
    ],
  },
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Main14 />,
    children: [
      {
        path: '/blog_details_light',
        element: <BlogDetailsLight />,
      },
    ],
  },
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Main5 />,
    children: [
      {
        path: '/contact',
        element: <ContactInner />,
      },
    ],
  },
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Main16 />,
    children: [
      {
        path: '/contact_light',
        element: <ContactInnerLight />,
      },
    ],
  },
]);

export default router;
