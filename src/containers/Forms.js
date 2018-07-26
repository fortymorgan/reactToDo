import { connect } from 'react-redux';
import { SignInForm, SignUpForm } from '../components/Forms.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const { authError } = state;

  return { authError };
}

export const SignInFormContainer = connect(
  mapStateToProps,
  actionCreators,
)(SignInForm);

export const SignUpFormContainer = connect(
  mapStateToProps,
  actionCreators,
)(SignUpForm);
