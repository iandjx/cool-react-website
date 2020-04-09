import React from 'react';
import {
  makeStyles,
  createStyles,
  Theme as AugmentedTheme,
} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: AugmentedTheme) =>
  createStyles({
    container: {
      width: '100%',
      height: '100%',
      position: 'fixed',
      top: '0',
      left: '0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loader: {
      color: theme.colors.textColors.brand
    }
  })
);

const PageLoader = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <CircularProgress className={classes.loader} />
    </div>
  );
};

export default PageLoader;
