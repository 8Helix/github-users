import { Routes as RoutesList, Route } from 'react-router-dom';
import { ROUTES_CONFIG } from './config/routes';

function Routes() {
  return (
    <RoutesList>
      {ROUTES_CONFIG.map((route) => {
        const Guard = route.guard;
        const Page = route.page;

        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              <Guard>
                <Page />
              </Guard>
            }
          />
        );
      })}
      <Route path="*" element={<h1>Not Found</h1>} />
    </RoutesList>
  );
}

export default Routes;
