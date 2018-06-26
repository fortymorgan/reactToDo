import { connect } from 'react-redux';
import InputForm from '../components/InputForm.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const { input, nextId, currentUser } = state;

  return { input, nextId, currentUser };
}

export default connect(
  mapStateToProps,
  actionCreators,
)(InputForm);
