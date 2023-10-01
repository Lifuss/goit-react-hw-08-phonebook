import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Login from 'pages/Login';
import Register from 'pages/Register';
import PageNotFound from 'pages/PageNotFound';
import PrivateRoute from 'routes/PrivateRoute';
// deploy test
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
