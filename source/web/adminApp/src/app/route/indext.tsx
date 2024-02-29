import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './private-route';
import { RoutingConstraints } from './constraints';
import CombineModule from '../login/index';
import InfluencerList from '../chanakya-list/list';
import { Dashboard } from '../dashboard';
import ChanakyaList from '../chanakya-list/list';
import LeaderList from '../leaders-list/list';

const AppRoutes: React.FC = () => {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to={RoutingConstraints.MODULE} />} />

        <Route
          path={RoutingConstraints.MODULE}
          element={
            isAuthenticated ? (
              <Navigate to="/home/dashboard" />
            ) : (
              <CombineModule />
            )
          }
        />
        <Route
          path="/home"
          element={<PrivateRoute isAuthenticated={isAuthenticated} />}
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="chanakyalist" element={<ChanakyaList />} />
          <Route path="leaderlist" element={<LeaderList />} />
          <Route path="*" element={<p>404 Not Found</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
