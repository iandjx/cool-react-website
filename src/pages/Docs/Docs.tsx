import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import { NavPathType } from '../../components/MainNavigation/navPaths';
import SideNavigataion from '../../components/MainNavigation/SideNavigation';

interface DocsPropsType extends RouteComponentProps {
  routes?: NavPathType[];
};

const Docs = (props: DocsPropsType) => {
  const { routes, match } = props;

  console.log(routes);

  return (
    <React.Fragment>
      <SideNavigataion parentPath={match.path} routes={routes} />
      {routes ? (
        routes.map((route, index) => {
          const Component = route.component;

          return (
            <Route
              path={`${match.path}${route.path}`}
              exact
              key={index}
              component={(props: any) => (
                <Component {...props} routes={route.routes} />
              )}
            />
          );
        })
      ) : (
        <h1>gavno</h1>
      )}
    </React.Fragment>
  );
};

export default Docs;
