import { connect } from 'react-redux';
import Footer from '../components/Footer.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const { items, filter } = state;

  const activeItemsCount = items.filter(item => item.state === 'active').length;
  const isListEmpty = items.length === 0;

  return { filter, activeItemsCount, isListEmpty };
}

export default connect(
  mapStateToProps,
  actionCreators,
)(Footer);
