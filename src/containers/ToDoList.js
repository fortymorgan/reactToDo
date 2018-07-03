import { connect } from 'react-redux';
import { ToDoListHeader } from '../components/ToDoList.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const { currentUser } = state;
  return { currentUser };
}

export default connect(
  mapStateToProps,
  actionCreators,
)(ToDoListHeader);
