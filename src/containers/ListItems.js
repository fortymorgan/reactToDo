import { connect } from 'react-redux';
import ListItems from '../components/ListItems.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const { items, filter } = state;

  const itemsToRender = {
    all: items,
    active: items.filter(item => item.state === 'active'),
    finished: items.filter(item => item.state === 'finished'),
  }

  return { items: itemsToRender[filter] };
}

export default connect(
  mapStateToProps,
  actionCreators,
)(ListItems);