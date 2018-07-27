import { connect } from 'react-redux';
import InputForm from '../components/InputForm.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const { input, requestEmptyTask } = state;

  return { input, requestEmptyTask };
}

export default connect(
  mapStateToProps,
  actionCreators,
)(InputForm);
