import React from 'react';
import { Field, reduxForm } from 'redux-form';
import $ from 'jquery';
import firebase from 'firebase';

const onLogin = (values) => {
  const { email, password } = values;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      $('#signInForm').modal('hide');
    });
}

const onRegistration = (values) => {
  const { email, password } = values;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      firebase.auth().signInWithEmailAndPassword(email, password)
      $('#signUpForm').modal('hide');
    });
}

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit(onLogin)}>
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
  return (
    <form onSubmit={props.handleSubmit(onRegistration)}>
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
