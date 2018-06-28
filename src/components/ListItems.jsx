import React from 'react';
import cn from 'classnames';

const ListItem = (props) => {
  const { item, handlers } = props;
  const { onRemove, onToggle } = handlers;
  const { dbId, text, state } = item;

  const toggleButtonClassName = cn({
    btn: true,
    'border-0': true,
    'btn-sm': true,
    'mr-2': true,
    'btn-secondary': item.state === 'finished',
  });

  return (
    <li className="list-group-item d-flex justify-content-start">
      <button className={toggleButtonClassName} onClick={onToggle(dbId, state === 'active' ? 'finished' : 'active')}>-</button>
      <div className="ml-1">{state === 'finished' ? <s>{text}</s> : text}</div>
      <button className="btn border-0 btn-danger btn-sm ml-auto" onClick={onRemove(dbId)}>x</button>
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

  onStartEdit = (id) => () => {
    const { editTaskStart } = this.props;
    editTaskStart(id);
  }

  onEdit = (id) => (e) => {
    const { editTask } = this.props;
    editTask(id, e.target.value);
  }

  onEndEdit = (id) => (e) => {
    e.preventDefault();
    const { editTaskEnd, currentUser } = this.props;
    editTaskEnd(id, currentUser.uid);
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
      onEdit: this.onEdit,
    }

    return (
      <ul className="list-group">
        {items.map(item => <ListItem item={item} key={item.id} handlers={handlers} />)}
      </ul>
    )
  }
}
