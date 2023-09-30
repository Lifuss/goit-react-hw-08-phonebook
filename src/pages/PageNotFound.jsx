import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div>
      {' '}
      <h1>Page is not found</h1>
      <h2>
        back to <Link to="/">Home</Link>
      </h2>
    </div>
  );
};

export default PageNotFound;
