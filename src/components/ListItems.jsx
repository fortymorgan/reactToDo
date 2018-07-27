import React from 'react';
import cn from 'classnames';
import { EditingReduxForm } from './Forms.jsx';

const ListItem = (props) => {
  const { item, handlers } = props;
  const { onRemove, onToggle, onStartEdit, onEndEdit } = handlers;
  const { dbId, text, state, editing } = item;

  const toggleButtonClassName = cn({
    btn: true,
    'btn-check': true,
    'btn-toggled': item.state === 'finished',
  });

  const textField = editing ? <EditingReduxForm text={text} onEndEdit={onEndEdit} dbId={dbId} /> : <div className="task-text" onDoubleClick={onStartEdit(dbId)}>{state === 'finished' ? <s>{text}</s> : text}</div>

  return (
    <li className="list-item">
      <button className={toggleButtonClassName} onClick={onToggle(dbId, state === 'active' ? 'finished' : 'active')}>✓</button>
      {textField}
      <button className="btn btn-remove" onClick={onRemove(dbId)}>×</button>
    </li>
  )
}

export default class ListItems extends React.Component {
  onRemove = (dbId) => () => {
    const { onTaskRemove } = this.props;
    onTaskRemove(dbId);
  }

  onToggle = (dbId, task) => () => {
    const { onTaskToggle } = this.props;
    onTaskToggle(dbId, task);
  }

  onStartEdit = (dbId) => () => {
    const { editTask } = this.props;
    editTask(dbId);
  }

  onEndEdit = (dbId) => (values) => {
    const { onEditTask } = this.props;
    onEditTask(dbId, values.text);
  }

  render() {
    const { items } = this.props;
    
    if (items.length === 0) {
      return null;
    }
    
    const handlers = {
      onRemove: this.onRemove,
      onToggle: this.onToggle,
      onStartEdit: this.onStartEdit,
      onEndEdit: this.onEndEdit,
    }

    return (
      <ul className="app-body-list">
        {items.map(item => <ListItem item={item} key={item.dbId} handlers={handlers} />)}
      </ul>
    )
  }
}
