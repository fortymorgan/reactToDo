import React from 'react';
import cn from 'classnames';

const InputForm = (props) => {
  const { value, onInput, onAdd } = props;

  return (
    <form className="form-inline" onSubmit={onAdd}>
      <div className="input-group mx-sm-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">New task</span>
        </div>
        <input type="text" className="form-control" placeholder="Enter new task" aria-label="Enter new task" aria-describedby="basic-addon1" value={value} onChange={onInput} />
      </div>
      <button type="submit" className="btn btn-primary btn-sm">Add</button>
    </form>
  )
}

const Header = (props) => {
  const { value, handlers, list } = props;
  const { onInput, onAdd, onToggleAll } = handlers;

  const toggleAllButtonClassName = cn({
    btn: true,
    'btn-sm': true,
    'border-0': true,
    'mr-1': true,
    'btn-secondary': list.every(item => item.state === 'finished'),
  });

  return (
    <div className="mb-3 d-flex justify-content-between">
      <button type="button" className={toggleAllButtonClassName} onClick={onToggleAll}>Toggle all</button>
      <InputForm onInput={onInput} onAdd={onAdd} value={value} />
    </div>
  )
}

export default Header;
