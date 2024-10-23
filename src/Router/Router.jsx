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
