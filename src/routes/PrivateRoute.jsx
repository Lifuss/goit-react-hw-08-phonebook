import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLogin } from 'redux/user/selectors';

const PrivateRoute = ({ children }) => {
  const isLogin = useSelector(selectIsLogin);
  if (isLogin) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
