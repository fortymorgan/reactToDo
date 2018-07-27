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
    const { isAllItemsFinished, isListEmpty } = this.props;

    const toggleAllButtonClassName = cn({
      btn: true,
      'btn-check': true,
      'btn-toggled': isAllItemsFinished,
    });

    const toggleAll = isListEmpty ? null :
      <div className="toggle-all">
        <button type="button" className={toggleAllButtonClassName} onClick={this.onToggleAll}>✓</button>
      </div>
 
    return(
      <div className="app-body-header">
        {toggleAll}
        <InputFormContainer />
      </div>
    )
  }
}
