import About from '../pages/About';
import Pages from '../pages/Pages';
import PostIdPage from '../pages/PostIdPage';

export const routes = [
  { path: '/about', element: About, exact: true },
  { path: '/posts', element: Pages, exact: true },
  { path: '/posts/:id', element: PostIdPage, exact: true },
];
