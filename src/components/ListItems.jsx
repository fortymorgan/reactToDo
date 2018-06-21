import React from 'react';

const ListItem = (props) => {
  const { item, handlers } = props;
  const { onRemove, onToggle, onStartEdit, onEdit, onEndEdit } = handlers;
  const { id, text, state } = item;

  const textElement = item.editing ?
    <form className="form-inline" onSubmit={onEndEdit}>
      <input type="text" className="form-control" autoFocus value={text} onChange={onEdit(id)} onBlur={onEndEdit} />
    </form> :
    <div className="mr-auto" onDoubleClick={onStartEdit(id)}>{state === 'finished' ? <s>{text}</s> : text}</div>

  return (
    <li className="list-group-item d-flex justify-content-end">
      <button className="btn border-0 btn-sm mr-3" onClick={onToggle(id)}>-</button>
      {textElement}
      <button className="btn border-0 btn-sm" onClick={onRemove(id)}>x</button>
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
