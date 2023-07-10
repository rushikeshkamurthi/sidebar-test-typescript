import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useContext } from "react";
import { RouteContext } from "../context/RouteContext";

const Breadcrumb: React.FC = () => {
  const { routes } = useContext(RouteContext);
  const location = useLocation();

  const getBreadcrumbItems = (): any[] => {
    const pathname = location.pathname;
    const breadcrumbs: any[] = [];

    for (let i = 0; i < routes.length; i++) {
      const route = routes[i];

      if (pathname.startsWith(route.path)) {
        breadcrumbs.push(route);

        if (route.subRoutes) {
          const subRoutes = route.subRoutes;
          for (let j = 0; j < subRoutes.length; j++) {
            const subRoute = subRoutes[j];

            if (pathname === subRoute.path) {
              breadcrumbs.push(subRoute);
              break;
            }
          }
        }

        break;
      }
    }

    return breadcrumbs;
  };

  const breadcrumbItems = getBreadcrumbItems();

  return (
    <div className="breadcrumb">
      {breadcrumbItems.map((route, index) => (
        <span key={index}>
          {index > 0 && " / "}
          {route.hideInMenu ? (
            <span>{route.name}</span>
          ) : (
            <Link to={route.path}>{route.name}</Link>
          )}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
