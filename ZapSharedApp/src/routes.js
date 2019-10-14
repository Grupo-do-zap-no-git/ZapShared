import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import DashboardLayout from './layouts/Dashboard/Dashboard';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/dash/home" />
  },
  {
    route: '/dash',
    component: DashboardLayout,
    routes: [
      {
        path: '/dash/home',
        exact: true,
        component: lazy(() => import('./views/Home'))
      },
      {
        component: () => <Redirect to="/" />
      }
    ]
  }
];

export default routes;
