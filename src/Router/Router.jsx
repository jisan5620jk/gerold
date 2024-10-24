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
    element: <Main5 />,
    children: [
      {
        path: '/contact',
        element: <ContactInner />,
      },
    ],
  },
]);

export default router;
