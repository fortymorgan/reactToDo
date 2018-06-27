import { connect } from 'react-redux';
import App from '../components/App.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const { currentUser, screen } = state;
  return { currentUser, screen };
}

export default connect(
  mapStateToProps,
  actionCreators,
)(App);
