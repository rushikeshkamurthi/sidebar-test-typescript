import { ReactElement, lazy } from 'react';
import { FaProjectDiagram } from 'react-icons/fa';
import { BiSolidDashboard, BiSolidLogInCircle } from 'react-icons/bi';

const Login = lazy(() => import('./pages/User/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Analysis = lazy(() => import('./pages/Dashboard/Analysis'));
const Monitor = lazy(() => import('./pages/Dashboard/Monitor'));
const Workplace = lazy(() => import('./pages/Dashboard/Workplace'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectList = lazy(() => import('./pages/Projects/ProjectList'));
const ProjectDetails = lazy(() => import('./pages/Projects/ProjectDetailes'));
const ProjectSettings = lazy(() => import('./pages/Projects/ProjectSettings'));
const NotFound = lazy(() => import('./pages/NotFound'));

export interface Route {
  name?: string;
  locale?: string;
  path: string;
  element: ReactElement;
  hideInMenu?: boolean;
  icon?: ReactElement;
  exact?: boolean;
  redirect?: string;
  subRoutes?: Route[];
  relativePath?: string;
  accessTO?: string[];
  key?: string;
  parentKey?: string;
}

const RouteConfig: Route[] = [
  {
    name: 'Login',
    locale: 'user.login',
    path: '/login',
    element: <Login />,
    hideInMenu: true,
    icon: <BiSolidLogInCircle />,
  },
  {
    path: '/dashboard',
    locale: 'dashboard',
    name: 'Dashboard',
    icon: <BiSolidDashboard />,
    exact: true,
    element: <Dashboard />,
    subRoutes: [
      {
        path: '/dashboard/analysis',
        relativePath: 'analysis',
        locale: 'dashboard.analysis',
        name: 'Analysis',
        element: <Analysis />,
        exact: true,
        accessTO: ['admin'],
      },
      {
        path: '/dashboard/monitor',
        relativePath: 'monitor',
        locale: 'dashboard.monitor',
        name: 'Monitor',
        element: <Monitor />,
        exact: true,
      },
      {
        path: '/dashboard/workplace',
        relativePath: 'workplace',
        locale: 'dashboard.workplace',
        name: 'Workplace',
        element: <Workplace />,
        exact: true,
      },
    ],
  },
  {
    path: '/projects',
    locale: 'projects',
    name: 'Projects',
    icon: <FaProjectDiagram />,
    element: <Projects />,
    redirect: '/projects/list',
    subRoutes: [
      {
        path: '/projects/list',
        locale: 'projects.list',
        name: 'Projects',
        exact: true,
        element: <ProjectList />,
      },
      {
        path: '/projects/:id',
        locale: 'projects.details',
        name: 'Project Details',
        hideInMenu: true,
        key: 'projects',
        exact: true,
        element: <ProjectDetails />,
      },
      {
        path: '/projects/:id/settings',
        locale: 'projects.settings',
        name: 'Settings',
        parentKey: 'details',
        exact: true,
        element: <ProjectSettings />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default RouteConfig;
