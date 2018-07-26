import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import cn from 'classnames';

class AuthForm extends React.Component {
  onSubmit = handler => values => handler(values)

  render() {
    const { handler, submitting, authError } = this.props;

    const formClassName = cn({
      'auth-form': true,
      'invalid-input': authError !== 'none',
    });
  
    const errorMessages = {
      none: {
        email: null,
        password: null,
      },
      'auth/user-not-found': {
        email: <p className="auth-error">User not found</p>,
        password: null,
      },
      'auth/invalid-email': {
        email: <p className="auth-error">Invalid email</p>,
        password: null,
      },
      'auth/wrong-password': {
        email: null,
        password: <p className="auth-error">Wrong password</p>,
      },
      'auth/email-already-in-use': {
        email: <p className="auth-error">Email is already in use</p>,
        password: null,
      },
      'auth/weak-password': {
        email: null,
        password: <p className="auth-error">Should be at least 6 characters</p>,
      }
    };
  
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit(handler))} className={formClassName}>
        <div className="auth-input-group">
          <Field name="email" required component="input" type="email" className="auth-input" placeholder="Email" />
          {errorMessages[authError].email}
        </div>
        <div className="auth-input-group">
          <Field name="password" required component="input" type="password" className="auth-input" placeholder="Password" />
          {errorMessages[authError].password}
        </div>
        <div className="auth-buttons">
          <div className="auth-button">
            <button type="submit" className="btn" disabled={submitting}>Submit</button>
          </div>
          <div className="auth-button">
            <Link to="/">
              <button type="button" className="btn" disabled={submitting}>Cancel</button>
            </Link>
          </div>
        </div>
      </form>
    )
  }
}

const AuthReduxForm = reduxForm({
  form: 'sign',
})(AuthForm);

export class SignInForm extends React.Component {
  componentWillUnmount() {
    const { clearAuthError } = this.props;

    clearAuthError();
  }
  
  render() {
    const { onSignIn, authError } = this.props;

    return (
      <AuthReduxForm handler={onSignIn} authError={authError} />
    )
  }
}

export class SignUpForm extends React.Component {
  componentWillUnmount() {
    const { clearAuthError } = this.props;

    clearAuthError();
  }
  
  render() {
    const { onSignUp, authError } = this.props;

    return (
      <AuthReduxForm handler={onSignUp} authError={authError} />
    )
  }
}

class EditingForm extends React.Component {
  constructor(props) {
    super(props)
    this.props.initialize({ text: this.props.text });
  }
  
  render() {
    const { handleSubmit, onEndEdit, dbId } = this.props;
    return (
      <form className="edit-form" onSubmit={handleSubmit(onEndEdit(dbId))}>
        <Field name="text" required component="input" type="text" className="edit-input" onBlur={handleSubmit(onEndEdit(dbId))} autoFocus />
      </form>
    )
  }
}

export const EditingReduxForm = reduxForm({
  form: 'editing',
})(EditingForm);
