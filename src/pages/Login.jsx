import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { loginThunk } from 'redux/user/operations';
import { selectIsLogin } from 'redux/user/selectors';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLogin);

  if (isLogin) return <Navigate to="/" />;

  const submit = data => {
    dispatch(loginThunk(data));
  };

  return (
    <div className="flex flex-col justify-center items-center h-[60vh]">
      <h1 className="text-4xl mb-4">Login</h1>
      <form className="w-80 flex gap-2 flex-col">
        <label className="input-group input-group-vertical">
          <span>Email</span>
          <input
            {...register('email', { required: true })}
            type="email"
            placeholder="info@site.com"
            className="input input-bordered"
          />
        </label>
        <label className="input-group input-group-vertical">
          <span>Password</span>
          <input
            {...register('password', { required: true })}
            type="password"
            placeholder="qwe123"
            className="input input-bordered"
          />
        </label>
        <button className="btn btn-neutral" onClick={handleSubmit(submit)}>
          login
        </button>
        <p className="text-center">
          Have not{' '}
          <Link className="text-white underline" to="/register">
            register
          </Link>{' '}
          yet?{' '}
        </p>
      </form>
    </div>
  );
};

export default Login;
