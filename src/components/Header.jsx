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
    const { isAllItemsFinished, toggleAllTaskState, isListEmpty } = this.props;

    const toggleAllButtonClassName = cn({
      btn: true,
      'btn-toggled': isAllItemsFinished,
    });

    const disabled = toggleAllTaskState === 'requested';

    const toggleAll = isListEmpty ? null :
      <div className="toggle-all">
        <button type="button" className={toggleAllButtonClassName} onClick={this.onToggleAll} disabled={disabled}>Toggle all</button>
      </div>
 
    return(
      <div className="app-body-header">
        {toggleAll}
        <InputFormContainer />
      </div>
    )
  }
}
