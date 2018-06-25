import { connect } from 'react-redux';
import InputForm from '../components/InputForm.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const { input, nextId } = state;

  return { input, nextId };
}

export default connect(
  mapStateToProps,
  actionCreators,
)(InputForm);
