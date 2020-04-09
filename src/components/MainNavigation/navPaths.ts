import React, { LazyExoticComponent } from 'react';

const Home = React.lazy(() => import('../../pages/Home/Home'));
const Docs = React.lazy(() => import('../../pages/Docs/Docs'));
const Tutorial = React.lazy(() => import('../../pages/Tutorial/Tutorial'));

export type navPathType = {
  component?: LazyExoticComponent<() => JSX.Element>;
  path: string;
  title: string;
};

export type navPathsType = {
  [key: string]: navPathType;
};

const navPaths: navPathsType = {
  home: {
    component: Home,
    path: '/',
    title: 'Home',
  },
  docs: {
    component: Docs,
    path: '/docs',
    title: 'Docs',
  },
  tutorial: {
    component: Tutorial,
    path: '/tutorial',
    title: 'Tutorial',
  },
  github: {
    path: 'https://github.com/smashboy/cool-react',
    title: 'Github',
  },
};

export default navPaths;
