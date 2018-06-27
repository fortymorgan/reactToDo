import { connect } from 'react-redux';
import Header from '../components/Header.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const { items } = state;

  const itemsArray = Object.values(items);
  const dbIds = Object.keys(items);

  const isAllItemsFinished = itemsArray.length !== 0 && itemsArray.every(item => item.state === 'finished');

  return { isAllItemsFinished, dbIds };
}

export default connect(
  mapStateToProps,
  actionCreators,
)(Header);
