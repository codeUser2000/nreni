import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function NotFound() {
  return (
    <div className="notFound">
      <Helmet>
        <body className="notFoundBody" />
      </Helmet>
      <div className="notFoundPage">
        <h1 className="notFoundTitle">Oops!</h1>
        <h4 className="notFoundSecondTitle">404 - page not found</h4>
        <p className="notFoundInfo">
          The page you are looking for might have been removed
          <br />
          had its name changed or is temporarily unavailable.
        </p>
        <button className="notFoundBtn" type="button">
          <Link className="notFoundLink" to="/home">Go to homepage</Link>
        </button>
      </div>
    </div>
  );
}

export default NotFound;
