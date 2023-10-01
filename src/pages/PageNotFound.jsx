import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      {' '}
      <p className="text-4xl">😶‍🌫️</p>
      <h1 className="text-6xl mb-8">Page is not found</h1>
      <h2 className="text-2xl">
        Back to{' '}
        <Link className="text-white underline" to="/">
          Homepage
        </Link>
      </h2>
    </div>
  );
};

export default PageNotFound;
