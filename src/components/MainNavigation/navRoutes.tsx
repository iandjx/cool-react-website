import React from 'react';

const Home = React.lazy(() => import('../../pages/Home/Home'));
const Docs = React.lazy(() => import('../../pages/Docs/Docs'));
const Tutorial = React.lazy(() => import('../../pages/Tutorial/Tutorial'));
const MdxView = React.lazy(() => import('../MdxView/MdxView'));

export type NavRouteType = {
  path: string;
  title: string;
  component: typeof MdxView | typeof Home | typeof Docs | typeof Tutorial;
  routes?: NavRouteType[];
};

export const mainNavRoutes: NavRouteType[] = [
  {
    path: '/',
    title: 'Home',
    component: Home,
  },
  {
    path: '/docs',
    title: 'Docs',
    component: Docs,
  },
  {
    path: '/tutorial',
    title: 'Tutorial',
    component: Tutorial,
  },
];

export const docsRoutes: NavRouteType[] = [
  {
    path: `/introduction`,
    title: 'Introduction',
    component: MdxView,
    routes: [
      {
        title: 'What is Cool React?',
        path: `/what-is-cool-react`,
        component: MdxView,
      },
      {
        title: 'Alpha status',
        path: `/alpha-status`,
        component: MdxView,
      },
      {
        title: "Why you don't need the whole package?",
        path: `/dont-need-the-whole-package`,
        component: MdxView,
      },
    ],
  },
  {
    title: 'Installation',
    path: '/installation',
    component: MdxView,
  },
];
