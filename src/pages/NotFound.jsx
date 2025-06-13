import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="page">
    <h1>404</h1>
    <p>Page not found</p>
    <Link to="/">Go Home</Link>
  </div>
);

export default NotFound;
