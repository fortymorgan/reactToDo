import React from 'react';
import { reduxForm, Field } from 'redux-form';

class NewTaskForm extends React.Component {
  onAdd = (values) => {
    const { onTaskAdd, pristine } = this.props;

    const newTask = { text: values.newTask, state: 'active', editing: false };
    return !pristine && onTaskAdd(newTask);
  }

  render() {
    const { submitting } = this.props;
    return (
      <form className="new-task-form" onSubmit={this.props.handleSubmit(this.onAdd)}>
        <div className="new-task">
          <Field
            type="text"
            name="newTask"
            className="new-task-input"
            placeholder="Enter new task"
            component="input"
          />
        </div>
        <button type="submit" className="btn" disabled={submitting}>Add</button>
      </form>
    )
  }
}

const NewTask = reduxForm({
  form: 'newTask',
})(NewTaskForm);

export default NewTask;
