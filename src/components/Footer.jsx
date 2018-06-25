import React from 'react';
import FiltersContainer from '../containers/Filters'

export default class Footer extends React.Component {
  onClearFinished = () => {
    const { removeFinishedTasks } = this.props;
    removeFinishedTasks();
  }

  render() {
    const { activeItemsCount, isListEmpty } = this.props;

    if (isListEmpty) {
      return null;
    }
    
    return (
      <div className="mt-3 d-flex justify-content-around">
        <span>{`${activeItemsCount} items left`}</span>
        <FiltersContainer />
        <button className="btn btn-primary btn-sm" onClick={this.onClearFinished}>Clear finished</button>
      </div>
    )
  }
}
