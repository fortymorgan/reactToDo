import React from 'react';

export default class InputForm extends React.Component {
  onAdd = (e) => {
    e.preventDefault();

    const { input, nextId, onTaskAdd } = this.props;

    const newTask = { id: nextId, text: input, state: 'active', editing: false };
    onTaskAdd(newTask);
  }

  onInput = (e) => {
    const { changeInput } = this.props;
    changeInput(e.target.value);
  }

  render() {
    const { input, createTaskState } = this.props;

    const disabled = createTaskState === 'requested';
  
    return (
      <form className="new-task-form" onSubmit={this.onAdd}>
        <div className="new-task">
          <label htmlFor="new-task-input" className="new-task-label">New task:</label>
          <input type="text" id="new-task-input" className="new-task-input" placeholder="Enter new task" value={input} onChange={this.onInput} />
        </div>
        <button type="submit" className="btn" disabled={disabled}>Add</button>
      </form>
    )
  }
}
