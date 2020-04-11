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
import WebIcon from '@material-ui/icons/Web';
import HttpsIcon from '@material-ui/icons/Https';
import SaveIcon from '@material-ui/icons/Save';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PowerIcon from '@material-ui/icons/FlashOn';
import CodeIcon from '@material-ui/icons/Code';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const features = [
  {
    title: 'Simple API',
    subtitles: [
      'API is build so that it is easy to understand and simple to use, so you can start developing as fast, as possible.',
    ],
    icon: CodeIcon,
  },
  {
    title: 'Fast',
    subtitles: [
      "Size matters. That's why our library use almost none of third-party dependencies in build.",
    ],
    icon: PowerIcon,
  },
  {
    title: 'SEO',
    subtitles: [
      'If you know how Single Page Applications works, then you probably know that they are not quite SEO friendly.',
      'With our library you can easy manage your head, html and body elements.',
    ],
    icon: WebIcon,
  },
  {
    title: 'Fetching',
    subtitles: [
      'Fetching data from your server can be awful sometimes, because some methods are not friendly in using while others are outdated and unmanageable.',
      "Our fetch hook is based on Fetch API and with power of react hooks it let's you write async code in sync style with bunch of other features.",
    ],
    icon: HttpsIcon,
  },
  {
    title: 'Store',
    subtitles: [
      'We wanted to make store that is flexible, scalable and configurable.',
    ],
    icon: SaveIcon,
  },
  {
    title: 'Forms',
    subtitles: [
      'Form validation can become a mess, especially when they are big.',
      'Our library provide tools for handling different types of validation, so you can code less on focus more on your logic.',
    ],
    icon: VisibilityIcon,
  },
];

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
    pageTitle2: {
      textAlign: 'center',
      width: '35%',
      margin: '0 auto',
      marginTop: theme.spacing(7.5),
      color: theme.colors.textColors.brand,
      '&::before': {
        right: 10,
      },
      '&::after': {
        left: 10,
      },
      '&::before, &::after': {
        backgroundColor: theme.colors.textColors.brand,
        content: '""',
        display: 'inline-block',
        position: 'relative',
        verticalAlign: 'middle',
        height: 1,
        width: '35%',
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        '&::before, &::after': {
          width: '25%',
        },
      },
    },
    pageSubtitle: {
      textAlign: 'center',
      color: theme.colors.textColors.light,
    },
    featureItem: {
      minHeight: 230,
      display: 'flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    featureText: {
      color: theme.colors.textColors.light,
    },
    featureIcon: {
      width: '100%',
      fontSize: 50,
      color: theme.colors.textColors.brand,
    },
    infoText: {
      marginTop: theme.spacing(3),
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
    featuresContainer: {
      width: '80%',
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
        <img
          className={classes.bigLogo}
          src="../images/cool-react.png"
          alt=""
        />
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
        <Typography className={classes.pageTitle2} variant="h4" component="div">
          Features
        </Typography>
        {/* <Typography
          className={classes.infoText}
          variant="subtitle1"
          component="div"
        >
          The task of this library is to improve some parts of{' '}
          <b>client side</b> react apps with latest features like hooks.{' '}
        </Typography> */}
        <Grid className={classes.featuresContainer} container spacing={3}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Grid item xs={12} sm={6} key={index}>
                <Card className={classes.featureItem} elevation={0}>
                  <CardContent>
                    <Icon className={classes.featureIcon} />
                    <Typography
                      className={classes.featureText}
                      variant="h5"
                      component="div"
                    >
                      {feature.title}
                    </Typography>
                    {feature.subtitles.map((subtitle, subtitleIndex) => (
                      <Typography
                        className={classes.featureText}
                        variant="subtitle2"
                        component="div"
                        key={subtitleIndex}
                        style={{ marginTop: 10 }}
                      >
                        {subtitle}
                      </Typography>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </Fade>
  );
};

export default Home;
