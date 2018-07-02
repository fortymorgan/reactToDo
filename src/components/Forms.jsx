import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

const LoginForm = (props) => {
  const { onSignIn } = props;
  return (
    <div className="app">
      <div className="app-header">
        <h1>To-do list</h1>
        <form onSubmit={props.handleSubmit(onSignIn)} className="auth-form">
          <div className="auth-input-group">
            <label htmlFor="emailSignInInput" className="auth-input-label">Email:</label>
            <Field name="email" required component="input" type="email" className="auth-input" id="emailSignInInput" placeholder="Email" />
          </div>
          <div className="auth-input-group">
            <label htmlFor="passwordSignInInput" className="auth-input-label">Password:</label>
            <Field name="password" required component="input" type="password" className="auth-input" id="passwordSignInInput" placeholder="Password" />
          </div>
          <div className="auth-button">
            <button type="submit" className="btn">Submit</button>
          </div>
          <div className="auth-button">
            <Link to="/">
              <button type="button" className="btn">Cancel</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);

const RegistrationForm = (props) => {
  const { onSignUp } = props;
  return (
    <div className="app">
      <div className="app-header">
        <h1>To-do list</h1>
        <form onSubmit={props.handleSubmit(onSignUp)} className="auth-form">
          <div className="auth-input-group">
            <label htmlFor="emailSignUpInput" className="auth-input-label">Email:</label>
            <Field name="email" required component="input" type="email" className="auth-input" id="emailSignUpInput" placeholder="Email" />
          </div>
          <div className="auth-input-group">
            <label htmlFor="passwordSignUpInput" className="auth-input-label">Password:</label>
            <Field name="password" required component="input" type="password" className="auth-input" id="passwordSignUpInput" placeholder="Password" />
          </div>
          <div className="auth-button">
            <button type="submit" className="btn">Submit</button>
          </div>
          <div className="auth-button">
            <Link to="/">
              <button type="button" className="btn">Cancel</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
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
