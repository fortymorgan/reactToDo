import React from 'react';
import cn from 'classnames';
import InputFormContainer from '../containers/InputForm';

export default class Header extends React.Component {
  onToggleAll = () => {
    const { dbIds, isAllItemsFinished, onTaskToggleAll } = this.props;
    const state = isAllItemsFinished ? 'active' : 'finished';

    onTaskToggleAll(dbIds, state);
  }

  render() {
    const { isAllItemsFinished, toggleAllTaskState } = this.props;

    const toggleAllButtonClassName = cn({
      btn: true,
      'btn-sm': true,
      'border-0': true,
      'btn-secondary': isAllItemsFinished,
    });

    const disabled = toggleAllTaskState === 'requested';
 
    return(
      <div className="mb-3 d-flex justify-content-start">
        <div className="m-1">
          <button type="button" className={toggleAllButtonClassName} onClick={this.onToggleAll} disabled={disabled}>Toggle all</button>
        </div>
        <InputFormContainer />
      </div>
    )
  }
}
