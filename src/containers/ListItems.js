import { connect } from 'react-redux';
import ListItems from '../components/ListItems.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const { items, filter, currentUser } = state;

  const itemsToRender = {
    all: items,
    active: items.filter(item => item.state === 'active'),
    finished: items.filter(item => item.state === 'finished'),
  }

  return { items: itemsToRender[filter], currentUser };
}

export default connect(
  mapStateToProps,
  actionCreators,
)(ListItems);
