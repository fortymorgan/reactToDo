import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

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
      <Link to="/">
        <button type="button" className="btn btn-primary ml-1">Cancel</button>
      </Link>
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
      <Link to="/">
        <button type="button" className="btn btn-primary ml-1">Cancel</button>
      </Link>
    </form>
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
      <form className="form-inline" onSubmit={handleSubmit(onEndEdit(dbId))}>
        <Field name="text" required component="input" type="text" className="border-0 pl-1" onBlur={handleSubmit(onEndEdit(dbId))} autoFocus />
      </form>
    )
  }
}

export const EditingReduxForm = reduxForm({
  form: 'editing',
})(EditingForm);
