import React from 'react';
import cn from 'classnames';

const ListItem = (props) => {
  const { item, handlers } = props;
  const { onRemove, onToggle, onStartEdit, onEndEdit, onEdit } = handlers;
  const { id, text, state, editing } = item;

  const textElement = editing ?
    <form className="form-inline" onSubmit={onEndEdit(id)}>
      <input type="text" className="border-0 pl-1" autoFocus value={text} onChange={onEdit(id)} onBlur={onEndEdit(id)} />
    </form> :
    <div className="ml-1" onDoubleClick={onStartEdit(id)}>{state === 'finished' ? <s>{text}</s> : text}</div>

  const toggleButtonClassName = cn({
    btn: true,
    'border-0': true,
    'btn-sm': true,
    'mr-2': true,
    'btn-secondary': item.state === 'finished',
  });

  return (
    <li className="list-group-item d-flex justify-content-start">
      <button className={toggleButtonClassName} onClick={onToggle(id)}>-</button>
      {textElement}
      <button className="btn border-0 btn-danger btn-sm ml-auto" onClick={onRemove(id)}>x</button>
    </li>
  )
}

export default class ListItems extends React.Component {
  onRemove = (id) => () => {
    const { removeTask } = this.props;
    removeTask(id);
  }

  onToggle = (id) => () => {
    const { toggleTaskState } = this.props;
    toggleTaskState(id);
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
    const { editTaskEnd } = this.props;
    editTaskEnd(id);
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
