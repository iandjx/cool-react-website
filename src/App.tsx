import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import navPaths from './components/MainNavigation/navPaths';
import MainNavigation from './components/MainNavigation/MainNavigation';
import defaultTheme from './theme/theme';
import PageLoader from './components/PageLoader/PageLoader';

const App = () => {
  const routePaths = navPaths();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <MainNavigation />
        <React.Suspense fallback={<PageLoader />}>
          <Switch>
            {Object.keys(routePaths).map((key, index) => {
              const Component = routePaths[key].component;

              return (
                <Route
                  path={routePaths[key].path}
                  exact={routePaths[key].path === '/' ? true : false}
                  key={index}
                  component={(props: any) => (
                    <Component {...props} routes={routePaths[key].routes} />
                  )}
                />
              );
            })}
          </Switch>
        </React.Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default App;
