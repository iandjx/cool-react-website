import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { mainNavRoutes } from './components/MainNavigation/navRoutes';
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
            {mainNavRoutes.map((route, index) => {
              const Component = route.component;

              return (
                <Route
                  path={route.path}
                  exact={route.path === '/' ? true : false}
                  key={index}
                  component={Component}
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
