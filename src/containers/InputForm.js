import { connect } from 'react-redux';
import InputForm from '../components/InputForm.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const { input, createTaskState, requestEmptyTask } = state;

  return { input, createTaskState, requestEmptyTask };
}

export default connect(
  mapStateToProps,
  actionCreators,
)(InputForm);
