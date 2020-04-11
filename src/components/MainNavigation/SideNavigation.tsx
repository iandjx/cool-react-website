import React from 'react';
import {
  makeStyles,
  Theme as AugmentedTheme,
  createStyles,
} from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import { NavPathType } from './navPaths';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 240;

const useStyles = makeStyles((theme: AugmentedTheme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
  })
);

const mapSubRoutes = (routes: NavPathType[], parentPath: string) => {
  return routes.map((route, index) => (
    <React.Fragment key={index}>
      {route.routes ? (
        <TreeItem nodeId={`${index}`} label={route.title}>
          {mapSubRoutes(route.routes, parentPath)}
        </TreeItem>
      ) : (
        <NavLink to={`${parentPath}${route.path}`} exact>
          <TreeItem nodeId={`${index}`} label={route.title} />
        </NavLink>
      )}
    </React.Fragment>
  ));
};

type SideNavigationPropsType = {
  routes: NavPathType[] | undefined;
  parentPath: string;
};

const SideNavigation = (props: SideNavigationPropsType) => {
  const { routes, parentPath } = props;

  const classes = useStyles();

  return (
    <Drawer
      open={true}
      className={classes.drawer}
      variant="persistent"
      anchor="left"
    >
      <div className={classes.drawerHeader}>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      {routes ? (
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          {mapSubRoutes(routes, parentPath)}
        </TreeView>
      ) : null}
    </Drawer>
  );
};

export default SideNavigation;
