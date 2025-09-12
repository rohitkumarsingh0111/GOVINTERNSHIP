import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(UserContext);

  if (!user) {
    // Not signed in, redirect to sign in page
    return <Navigate to="/authpage" replace />;
  }

  // Signed in, render the children (Dashboard)
  return children;
};

export default PrivateRoute;