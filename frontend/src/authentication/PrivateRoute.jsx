import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Check if user is authenticated

  // REDIRECTION LOGIC
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
