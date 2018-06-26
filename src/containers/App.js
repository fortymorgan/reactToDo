import { connect } from 'react-redux';
import App from '../components/App.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const props = {};
  return props;
}

export default connect(
  mapStateToProps,
  actionCreators,
)(App);
