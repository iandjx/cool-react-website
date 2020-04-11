import React from 'react';

const Home = React.lazy(() => import('../../pages/Home/Home'));
const Docs = React.lazy(() => import('../../pages/Docs/Docs'));
const Tutorial = React.lazy(() => import('../../pages/Tutorial/Tutorial'));
const TestComponent = React.lazy(() => import('../TestComponent'));

export type NavPathType = {
  path: string;
  title: string;
  component: any;
  routes?: NavPathType[];
};

export type NavPathsType = {
  [key: string]: NavPathType;
};

const navPaths = (): NavPathsType => {
  const globalRoutes = {
    home: '/',
    docs: {
      index: '/docs',
      introduction: '/introduction',
    },
    tutorial: '/tutorial',
  };

  return {
    home: {
      component: Home,
      path: globalRoutes.home,
      title: 'Home',
    },
    docs: {
      component: Docs,
      path: globalRoutes.docs.index,
      title: 'Docs',
      routes: [
        {
          title: 'Installation',
          path: '/installation',
          component: TestComponent,
        },
        {
          title: 'Introduction',
          path: globalRoutes.docs.introduction,
          component: TestComponent,
          routes: [
            {
              title: 'What is Cool React?',
              path: `/what-is-cool-react`,
              component: TestComponent,
            },
            {
              title: 'Alpha status',
              path: `/alpha-status`,
              component: TestComponent,
            },
            {
              title: "Why you don't need the whole package?",
              path: `/dont-need-the-whole-package`,
              component: TestComponent,
            },
          ],
        },
      ],
    },
    tutorial: {
      component: Tutorial,
      path: globalRoutes.tutorial,
      title: 'Tutorial',
      routes: [],
    },
  };
};

export default navPaths;
