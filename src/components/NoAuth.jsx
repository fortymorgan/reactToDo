import React from 'react';
import { Link } from 'react-router-dom';

const NoAuth = () => (
  <div className="auth">
    <div className="auth-buttons">
      <div className="auth-button">
        <Link to="/signup">
          <button type="button" className="btn">
            Sign up
          </button>
        </Link>
      </div>
      <div className="auth-button">
        <Link to="/signin">
          <button type="button" className="btn">
            Sign in
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default NoAuth
