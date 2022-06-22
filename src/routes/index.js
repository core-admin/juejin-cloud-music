import Home from '../application/Home';
import Recommend from '../application/Recommend';
import Singers from '../application/Singers';
import Rank from '../application/Rank';
import { Navigate } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '',
        exact: true,
        element: <Navigate to="/recommend" />,
      },
      // {
      //   index: true,
      //   element: <Recommend />,
      // },
      {
        path: 'recommend',
        element: <Recommend />,
      },
      {
        path: 'singers',
        element: <Singers />,
      },
      {
        path: 'rank',
        element: <Rank />,
      },
    ],
  },
];

export default routes;
