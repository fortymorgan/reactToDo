import { connect } from 'react-redux';
import InputForm from '../components/InputForm.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const { input, nextId, createTaskState } = state;

  return { input, nextId, createTaskState };
}

export default connect(
  mapStateToProps,
  actionCreators,
)(InputForm);
