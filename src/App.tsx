import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import navPaths, { navPathType } from './components/MainNavigation/navPaths';
import MainNavigation from './components/MainNavigation/MainNavigation';
import defaultTheme from './theme/theme';

const MainRoute = (props: { route: navPathType }) => (
  <Route path={props.route.path} component={props.route.component} exact />
);

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <MainNavigation />
        <Switch>
          {Object.keys(navPaths).map(key => (
            <MainRoute key={key} route={navPaths[key]} />
          ))}
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
