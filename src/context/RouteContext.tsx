import React, { createContext, ReactNode } from 'react';
import { Route } from '../RouteConfig';
interface RouteProviderProps {
  children: ReactNode;
  routes: Route; // Update with the appropriate type for routes
}

export const RouteContext = createContext<any>(null);

const RouteProvider: React.FC<RouteProviderProps> = ({ children, routes }) => {
  return (
    <RouteContext.Provider value={{ routes }}>
      {children}
    </RouteContext.Provider>
  );
};

export default RouteProvider;
