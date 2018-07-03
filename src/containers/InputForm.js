import { connect } from 'react-redux';
import InputForm from '../components/InputForm.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const { input, nextId, createTaskState, requestEmptyTask } = state;

  return { input, nextId, createTaskState, requestEmptyTask };
}

export default connect(
  mapStateToProps,
  actionCreators,
)(InputForm);
