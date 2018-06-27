import { connect } from 'react-redux';
import ListItems from '../components/ListItems.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const { items, filter } = state;

  const itemsArray = Object.keys(items).map(key => ({ ...items[key], dbId: key }))

  const itemsToRender = {
    all: itemsArray,
    active: itemsArray.filter(item => item.state === 'active'),
    finished: itemsArray.filter(item => item.state === 'finished'),
  }

  return { items: itemsToRender[filter] };
}

export default connect(
  mapStateToProps,
  actionCreators,
)(ListItems);
