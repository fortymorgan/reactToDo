import React from 'react';

export default class InputForm extends React.Component {
  render() {
    const { value, handlers } = this.props;
    const { onInput, onAdd } = handlers;

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
}
