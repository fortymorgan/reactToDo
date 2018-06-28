import { connect } from 'react-redux';
import ToDoList from '../components/ToDoList.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const { currentUser } = state;
  return { currentUser };
}

export default connect(
  mapStateToProps,
  actionCreators,
)(ToDoList);
