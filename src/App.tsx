import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import navPaths from './components/MainNavigation/navPaths';
import MainNavigation from './components/MainNavigation/MainNavigation';
import defaultTheme from './theme/theme';
import PageLoader from './components/PageLoader/PageLoader';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <MainNavigation />
        <React.Suspense fallback={<PageLoader />}>
          <Switch>
            {Object.keys(navPaths).map(key => {
              if (navPaths[key].component) {
                return (
                  <Route
                    key={key}
                    path={navPaths[key].path}
                    component={navPaths[key].component}
                    exact
                  />
                );
              } else return null;
            })}
          </Switch>
        </React.Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default App;
