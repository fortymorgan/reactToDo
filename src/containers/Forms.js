import { connect } from 'react-redux';
import { LoginReduxForm, RegistrationReduxForm, EditingReduxForm } from '../components/Forms.jsx';
import * as actionCreators from '../actions';

const signInMapStateToProps = (state) => {
  const { signInState, signInError } = state;

  return { signInState, signInError };
}

const signUpMapStateToProps = (state) => {
  const { signUpState, signUpError } = state;

  return { signUpState, signUpError };
}

export const LoginReduxFormContainer = connect(
  signInMapStateToProps,
  actionCreators,
)(LoginReduxForm);

export const RegistrationReduxFormContainer = connect(
  signUpMapStateToProps,
  actionCreators,
)(RegistrationReduxForm);
