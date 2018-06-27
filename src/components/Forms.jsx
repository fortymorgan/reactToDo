import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
  const { onSignIn } = props;
  return (
    <form onSubmit={props.handleSubmit(onSignIn)}>
      <div className="form-group">
        <label htmlFor="emailSignInInput">Email address</label>
        <Field name="email" required component="input" type="email" className="form-control" id="emailSignInInput" placeholder="Enter email" />
      </div>
      <div className="form-group">
        <label htmlFor="passwordSignInInput">Password</label>
        <Field name="password" required component="input" type="password" className="form-control" id="passwordSignInInput" placeholder="Password" />
      </div>
      <button type="submit" className="btn btn-primary">Sign in</button>
    </form>
  )
}

export const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);

const RegistrationForm = (props) => {
  const { onSignUp } = props;
  return (
    <form onSubmit={props.handleSubmit(onSignUp)}>
      <div className="form-group">
        <label htmlFor="emailSignUpInput">Email address</label>
        <Field name="email" required component="input" type="email" className="form-control" id="emailSignUpInput" placeholder="Enter email" />
      </div>
      <div className="form-group">
        <label htmlFor="passwordSignUpInput">Password</label>
        <Field name="password" required component="input" type="password" className="form-control" id="passwordSignUpInput" placeholder="Password" />
      </div>
      <button type="submit" className="btn btn-primary">Sign up</button>
    </form>
  )
}

export const RegistrationReduxForm = reduxForm({
  form: 'registration',
})(RegistrationForm);
