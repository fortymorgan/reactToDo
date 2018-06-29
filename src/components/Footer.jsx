import React from 'react';
import FiltersContainer from '../containers/Filters'

export default class Footer extends React.Component {
  onClearFinished = () => {
    const { onRemoveFinishedTasks, dbIds } = this.props;
    onRemoveFinishedTasks(dbIds);
  }

  render() {
    const { activeItemsCount, isListEmpty, removeFinishedTasksState } = this.props;

    if (isListEmpty) {
      return null;
    }

    const disabled = removeFinishedTasksState === 'requested';
    
    return (
      <div className="mt-3 d-flex justify-content-around">
        <span>{`${activeItemsCount} items left`}</span>
        <FiltersContainer />
        <button className="btn btn-primary btn-sm" onClick={this.onClearFinished} disabled={disabled}>Clear finished</button>
      </div>
    )
  }
}
