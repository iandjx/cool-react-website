import Home from '../../pages/Home/Home';
import Docs from '../../pages/Docs/Docs';
import Tutorial from '../../pages/Tutorial/Tutorial';

export type navPathType = {
  component: () => JSX.Element | null;
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
    component: () => null,
    path: 'https://github.com/smashboy/cool-react',
    title: 'Github',
  },
};

export default navPaths;
