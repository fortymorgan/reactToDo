import { connect } from 'react-redux';
import Filters from '../components/Filters.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const { filter } = state;

  return { filter };
}

export default connect(
  mapStateToProps,
  actionCreators,
)(Filters);
