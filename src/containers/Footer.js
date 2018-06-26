import { connect } from 'react-redux';
import Footer from '../components/Footer.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const { items, filter, currentUser } = state;

  const activeItemsCount = items.filter(item => item.state === 'active').length;
  const isListEmpty = items.length === 0;

  return { filter, activeItemsCount, isListEmpty, currentUser };
}

export default connect(
  mapStateToProps,
  actionCreators,
)(Footer);
