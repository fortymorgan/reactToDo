import React from 'react';

export default class InputForm extends React.Component {
  render() {
    const { value, handlers } = this.props;
    const { onInput, onAdd, onToggleAll } = handlers;

    return (
      <form className="form-inline" onSubmit={onAdd}>
        <button type="button" className="btn btn-sm border-0 mr-1" onClick={onToggleAll}>Toggle all</button>
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
}
