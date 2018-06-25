import React from 'react';
import cn from 'classnames';
import InputFormContainer from '../containers/InputForm';

export default class Header extends React.Component {
  onToggleAll = () => {
    const { toggleAllTaskState } = this.props;
    toggleAllTaskState();
  }

  render() {
    const { isAllItemsFinished } = this.props;

    const toggleAllButtonClassName = cn({
      btn: true,
      'btn-sm': true,
      'border-0': true,
      'btn-secondary': isAllItemsFinished,
    });
  
    return(
      <div className="mb-3 d-flex justify-content-start">
        <div className="m-1">
          <button type="button" className={toggleAllButtonClassName} onClick={this.onToggleAll}>Toggle all</button>
        </div>
        <InputFormContainer />
      </div>
    )
  }
}
