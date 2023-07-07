import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import useAuth from '../auth/useAuth';

function PrivateRoute({ path, element: Element, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route 
      path={path} 
      {...rest}
      element={currentUser ? Element : <Navigate to="/login" />}
    />
  );
}

export default PrivateRoute;
