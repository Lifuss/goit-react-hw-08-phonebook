import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { logoutThunk } from 'redux/user/operations';
import { selectEmail, selectIsLogin } from 'redux/user/selectors';

const Layout = () => {
  const email = useSelector(selectEmail);
  const isLogin = useSelector(selectIsLogin);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <>
      <header className="border-b-2 border-gray-500 mb-8">
        <nav className="navbar bg-base-100">
          <div className="flex-1">
            <NavLink className="btn btn-ghost normal-case text-xl" to="/">
              Phone book
            </NavLink>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              {isLogin ? (
                <li>
                  <details>
                    <summary>{email}</summary>
                    <ul className="p-2 bg-base-100">
                      <li>
                        <button onClick={handleLogout}>Logout</button>
                      </li>
                    </ul>
                  </details>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/register">Register</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
