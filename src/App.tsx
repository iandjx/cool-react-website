import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import navPaths from './components/MainNavigation/navPaths';
import MainNavigation from './components/MainNavigation/MainNavigation';
import defaultTheme from './theme/theme';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <MainNavigation />
        <Switch>
          {Object.keys(navPaths).map(key => (
            <Route
              key={key}
              path={navPaths[key].path}
              component={navPaths[key].component}
              exact
            />
          ))}
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
