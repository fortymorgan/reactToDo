import React from 'react';

export default class InputForm extends React.Component {
  onAdd = (e) => {
    e.preventDefault();

    const { input, nextId, addTask } = this.props;
    addTask(nextId, input);
  }

  onInput = (e) => {
    const { changeInput } = this.props;
    changeInput(e.target.value);
  }

  render() {
    const { input } = this.props;
  
    return (
      <form className="form-inline" onSubmit={this.onAdd}>
        <div className="input-group mx-sm-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">New task</span>
          </div>
          <input type="text" className="form-control" placeholder="Enter new task" aria-label="Enter new task" aria-describedby="basic-addon1" value={input} onChange={this.onInput} />
        </div>
        <button type="submit" className="btn btn-primary btn-sm">Add</button>
      </form>
    )
  }
}
