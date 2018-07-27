import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

const NoAuth = (props) => {
  const { withoutAuth, toggleNoAuth } = props;

  const toggleButtonClassName = cn({
    btn: true,
    'btn-check': true,
    'btn-toggled': withoutAuth,
  });

  return (
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
      <div className="without-auth">
        <button className={toggleButtonClassName} onClick={toggleNoAuth}>✓</button>
        <div className="without-label">Without authorization</div>
      </div>
    </div>
  );
};

export default NoAuth;
