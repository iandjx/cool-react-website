import React from 'react';
import { Link } from 'react-router-dom';
import {
  makeStyles,
  Theme as AugmentedTheme,
  createStyles,
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import GotoIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles((theme: AugmentedTheme) =>
  createStyles({
    root: {
      marginTop: theme.marginFromMainNav,
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.marginFromMainNavMobile,
      },
    },
    pageTitle: {
      textAlign: 'center',
      color: theme.colors.textColors.brand,
    },
    pageSubtitle: {
      textAlign: 'center',
      color: theme.colors.textColors.light,
    },
    bigLogo: {
      display: 'block',
      margin: '0 auto',
      width: 300,
      height: 'auto',
    },
    introBtnsContainer: {
      width: '40%',
      margin: 'auto',
      marginTop: theme.spacing(5),
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    introBtnItem: {
      display: 'flex',
      justifyContent: 'center',
    },
    introLink: {
      width: '100%',
      textDecoration: 'none',
    },
    getStartedBtn: {
      backgroundColor: theme.colors.paperColors.dark,
      color: theme.colors.textColors.dark,
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: theme.colors.backgroundColors.dark,
      },
    },
    docsBtn: {
      color: theme.colors.textColors.light,
      textTransform: 'capitalize',
    },
  })
);

const Home = () => {
  const classes = useStyles();

  return (
    <Fade in timeout={500}>
      <div className={classes.root}>
        <Typography
          className={classes.pageTitle}
          variant="h2"
          component="div"
          noWrap
        >
          Cool React
        </Typography>
        <Typography
          className={classes.pageSubtitle}
          variant="subtitle1"
          component="div"
          gutterBottom
        >
          Cool component and hook based library for your react app.
        </Typography>
        <img className={classes.bigLogo} src="../images/cool-react.png" alt="" />
        <Grid container className={classes.introBtnsContainer} spacing={2}>
          <Grid className={classes.introBtnItem} item xs={12} sm={6}>
            <Link className={classes.introLink} to="/tutorial/get-started">
              <Button
                className={classes.getStartedBtn}
                disableElevation
                fullWidth
              >
                Get Started
              </Button>
            </Link>
          </Grid>
          <Grid className={classes.introBtnItem} item xs={12} sm={6}>
            <Link className={classes.introLink} to="/docs">
              <Button
                endIcon={<GotoIcon />}
                className={classes.docsBtn}
                disableElevation
                fullWidth
              >
                Documentation
              </Button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </Fade>
  );
};

export default Home;
