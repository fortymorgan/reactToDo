import React from 'react';
import cn from 'classnames';

export default class InputForm extends React.Component {
  onAdd = (e) => {
    e.preventDefault();

    const { input, nextId, onTaskAdd, addEmptyTask } = this.props;

    if (input === '') {
      addEmptyTask();
    } else {
      const newTask = { id: nextId, text: input, state: 'active', editing: false };
      onTaskAdd(newTask);
    }
  }

  onInput = (e) => {
    const { changeInput } = this.props;
    changeInput(e.target.value);
  }

  render() {
    const { input, createTaskState, requestEmptyTask } = this.props;

    const disabled = createTaskState === 'requested';

    const formClassName = cn({
      'new-task-form': true,
      'invalid-input': requestEmptyTask,
    });

    const inputError = requestEmptyTask ? <p className="input-error">Write something</p> : null;
  
    return (
      <form className={formClassName} onSubmit={this.onAdd}>
        <div className="new-task">
          <input type="text" id="new-task-input" className="new-task-input" placeholder="Enter new task" value={input} onChange={this.onInput} />
          {inputError}
        </div>
        <button type="submit" className="btn" disabled={disabled}>Add</button>
      </form>
    )
  }
}
