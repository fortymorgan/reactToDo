import { connect } from 'react-redux';
import Header from '../components/Header.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const { items, currentUser } = state;

  const isAllItemsFinished = items.length !== 0 && items.every(item => item.state === 'finished');

  return { isAllItemsFinished, currentUser };
}

export default connect(
  mapStateToProps,
  actionCreators,
)(Header);
