import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  makeStyles,
  Theme as AugmentedTheme,
  withStyles,
  createStyles,
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import TutorialIcon from '@material-ui/icons/School';
import DocsIcon from '@material-ui/icons/Description';
import Avatar from '@material-ui/core/Avatar';
import navPaths, { navPathType } from './navPaths';

const useStyles = makeStyles((theme: AugmentedTheme) =>
  createStyles({
    grow: {
      flexGrow: 1,
      backgroundColor: theme.colors.paperColors.light,
    },
    title: {
      color: theme.colors.textColors.brand,
      fontWeight: 'bold',
      lineHeight: '40px',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    navLinksGroup: {
      margin: theme.spacing(1),
      flexGrow: 1,
      display: 'inline-flex',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    activeNavButton: {
      '& button': {
        color: theme.colors.textColors.brand,
        fontWeight: 'bolder',
      },
    },
    brandIcon: {
      marginRight: theme.spacing(1),
    },
    bigHomeLink: {
      textDecoration: 'none',
      display: 'inline-flex',
      marginRight: theme.spacing(1),
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.colors.backgroundColors.light,
      color: theme.colors.textColors.light,
      transition: theme.transition,
      '&:hover': {
        backgroundColor: theme.colors.paperColors.dark,
        color: theme.colors.textColors.dark,
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  })
);

const StyledNavButton = withStyles((theme: AugmentedTheme) => ({
  root: {
    color: theme.colors.textColors.light,
    textDecoration: 'none',
    margin: theme.spacing(0.5),
  },
}))(Button);

const MainNanLink = (props: {
  route: navPathType;
  classes: Record<string, string>;
}) => (
  <NavLink
    activeClassName={props.classes.activeNavButton}
    style={{ textDecoration: 'none' }}
    to={props.route.path}
    exact
  >
    <StyledNavButton
      disableElevation
      startIcon={
        props.route.title === 'Home' ? (
          <HomeIcon />
        ) : props.route.title === 'Docs' ? (
          <DocsIcon />
        ) : props.route.title === 'Tutorial' ? (
          <TutorialIcon />
        ) : null
      }
    >
      {props.route.title}
    </StyledNavButton>
  </NavLink>
);

const MainNavigation = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.grow} elevation={1}>
      <Toolbar>
        <Link to={navPaths.home.path} className={classes.bigHomeLink}>
          <Avatar
            src="../images/cool-react.png"
            alt=""
            className={classes.brandIcon}
          />
          <Typography
            className={classes.title}
            variant="h6"
            component="div"
            noWrap
          >
            CoolReact
          </Typography>
        </Link>
        <div className={classes.navLinksGroup}>
          {Object.keys(navPaths).map(key => (
            <MainNanLink key={key} route={navPaths[key]} classes={classes} />
          ))}
        </div>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default MainNavigation;
