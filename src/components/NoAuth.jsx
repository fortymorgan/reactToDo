import React from 'react';
import { Link } from 'react-router-dom';

const NoAuth = () => (
  <div>
    <div className="m-1">
      <Link to="/signin">
        <button type="button" className="btn btn-primary btn-sm">
          Sign in
        </button>
      </Link>
    </div>
    <div className="m-1">
      <Link to="/signup">
        <button type="button" className="btn btn-primary btn-sm">
          Sign up
        </button>
      </Link>
    </div>
  </div>
)

export default NoAuth;
