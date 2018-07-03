import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import cn from 'classnames';

class LoginForm extends React.Component {
  componentWillUnmount() {
    const { clearAuthError } = this.props;

    clearAuthError();
  }
  
  render() {
    const { onSignIn, signInState, signInError } = this.props;
  
    const disabled = signInState === 'requested';

    const formClassName = cn({
      'auth-form': true,
      'invalid-input': signInError !== 'none',
    });
  
    const errorMessages = {
      none: {
        email: null,
        password: null,
      },
      'auth/user-not-found': {
        email: <p className="input-error">User not found</p>,
        password: null,
      },
      'auth/invalid-email': {
        email: <p className="input-error">Invalid email</p>,
        password: null,
      },
      'auth/wrong-password': {
        email: null,
        password: <p className="input-error">Wrong password</p>,
      }
    };
  
    return (
      <div className="app">
        <div className="app-header">
          <h1>To-do list</h1>
          <form onSubmit={this.props.handleSubmit(onSignIn)} className={formClassName}>
            <div className="auth-input-group">
              <label htmlFor="emailSignInInput" className="auth-input-label">Email:</label>
              <Field name="email" required component="input" type="email" className="auth-input" id="emailSignInInput" placeholder="Email" />
              {errorMessages[signInError].email}
            </div>
            <div className="auth-input-group">
              <label htmlFor="passwordSignInInput" className="auth-input-label">Password:</label>
              <Field name="password" required component="input" type="password" className="auth-input" id="passwordSignInInput" placeholder="Password" />
              {errorMessages[signInError].password}
            </div>
            <div className="auth-button">
              <button type="submit" className="btn" disabled={disabled}>Submit</button>
            </div>
            <div className="auth-button">
              <Link to="/">
                <button type="button" className="btn" disabled={disabled}>Cancel</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);

class RegistrationForm extends React.Component {
  componentWillUnmount() {
    const { clearAuthError } = this.props;

    clearAuthError();
  }

  render() {
    const { onSignUp, signUpState, signUpError } = this.props;
  
    const disabled = signUpState === 'requested';
  
    const errorMessages = {
      none: {
        email: null,
        password: null,
      },
      'auth/email-already-in-use': {
        email: <p className="input-error">Email is already in use</p>,
        password: null,
      },
      'auth/invalid-email': {
        email: <p className="input-error">Invalid email</p>,
        password: null,
      },
      'auth/weak-password': {
        email: null,
        password: <p className="input-error">Should be at least 6 characters</p>,
      }
    };
  
    const formClassName = cn({
      'auth-form': true,
      'invalid-input': signUpError !== 'none',
    });
    
    return (
      <div className="app">
        <div className="app-header">
          <h1>To-do list</h1>
          <form onSubmit={this.props.handleSubmit(onSignUp)} className={formClassName}>
            <div className="auth-input-group">
              <label htmlFor="emailSignUpInput" className="auth-input-label">Email:</label>
              <Field name="email" required component="input" type="email" className="auth-input" id="emailSignUpInput" placeholder="Email" />
              {errorMessages[signUpError].email}
            </div>
            <div className="auth-input-group">
              <label htmlFor="passwordSignUpInput" className="auth-input-label">Password:</label>
              <Field name="password" required component="input" type="password" className="auth-input" id="passwordSignUpInput" placeholder="Password" />
              {errorMessages[signUpError].password}
            </div>
            <div className="auth-button">
              <button type="submit" className="btn" disabled={disabled}>Submit</button>
            </div>
            <div className="auth-button">
              <Link to="/">
                <button type="button" className="btn" disabled={disabled}>Cancel</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export const RegistrationReduxForm = reduxForm({
  form: 'registration',
})(RegistrationForm);

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
