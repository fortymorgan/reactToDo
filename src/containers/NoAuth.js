import { connect } from 'react-redux';
import NoAuth from '../components/NoAuth.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const { withoutAuth } = state;

  return { withoutAuth };
}

export default connect(
  mapStateToProps,
  actionCreators,
)(NoAuth);
