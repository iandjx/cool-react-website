import Home from '../../pages/Home/Home';
import Docs from '../../pages/Docs/Docs';
import Tutorial from '../../pages/Tutorial/Tutorial';

export type navPathType = {
  component: () => JSX.Element;
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
};

export default navPaths;
