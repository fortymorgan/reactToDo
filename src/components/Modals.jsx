import React from 'react';
import { LoginReduxForm, RegistrationReduxForm } from './Forms.jsx';

export const LoginModal = () => {
  return (
    <div className="modal" id="signInForm" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Sign in</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <LoginReduxForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export const RegistrationModal = () => {
  return (
    <div className="modal" id="signUpForm" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Sign up</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <RegistrationReduxForm />
          </div>
        </div>
      </div>
    </div>
  )
}
