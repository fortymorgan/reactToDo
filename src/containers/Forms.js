import { connect } from 'react-redux';
import { LoginReduxForm, RegistrationReduxForm, EditingReduxForm } from '../components/Forms.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = () => ({})

export const LoginReduxFormContainer = connect(
  mapStateToProps,
  actionCreators,
)(LoginReduxForm);

export const RegistrationReduxFormContainer = connect(
  mapStateToProps,
  actionCreators,
)(RegistrationReduxForm);
