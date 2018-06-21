import React from 'react';
import cn from 'classnames';

const ListItem = (props) => {
  const { item, handlers } = props;
  const { onRemove, onToggle, onStartEdit, onEdit, onEndEdit } = handlers;
  const { id, text, state } = item;

  const textElement = item.editing ?
    <form className="form-inline" onSubmit={onEndEdit}>
      <input type="text" className="border-0 pl-1" autoFocus value={text} onChange={onEdit(id)} onBlur={onEndEdit} />
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
  render() {
    const { list, handlers } = this.props;

    if (list.length === 0) {
      return null;
    }

    return (
      <ul className="list-group">
        {list.map(item => <ListItem item={item} key={item.id} handlers={handlers} />)}
      </ul>
    )
  }
}
