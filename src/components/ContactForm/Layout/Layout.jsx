import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <nav>
      <ul className="grid grid-cols-5">
        <li className="col-start-1 col-end-4">
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>

      <div>
        <Outlet />
      </div>
    </nav>
  );
};

export default Layout;
