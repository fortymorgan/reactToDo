import { connect } from 'react-redux';
import Footer from '../components/Footer.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const { items, filter } = state;

  const itemsArray = Object.values(items);
  const dbIds = Object.keys(items).filter(key => items[key].state === 'finished');

  const activeItemsCount = itemsArray.filter(item => item.state === 'active').length;
  const isListEmpty = itemsArray.length === 0;

  return { filter, activeItemsCount, isListEmpty, dbIds };
}

export default connect(
  mapStateToProps,
  actionCreators,
)(Footer);
