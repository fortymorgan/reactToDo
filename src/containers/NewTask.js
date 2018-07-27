import { connect } from 'react-redux';
import NewTask from '../components/NewTask.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  actionCreators,
)(NewTask);
