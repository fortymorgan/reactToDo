import React from 'react';

const ListItem = (props) => {
  const { item, handlers } = props;
  const { onRemove, onToggle } = handlers;
  const { id, text, state } = item;

  return (
    <li className="list-group-item d-flex justify-content-end">
      <button className="btn border-0 btn-sm mr-3" onClick={onToggle(id)}>-</button>
      <div className="mr-auto">{state === 'finished' ? <s>{text}</s> : text}</div>
      <button className="btn border-0 btn-sm" onClick={onRemove(id)}>x</button>
    </li>
  )
}

export default class ListItems extends React.Component {
  render() {
    const { list, handlers } = this.props;

    return (
      <ul className="list-group">
        {list.map(item => <ListItem item={item} key={item.id} handlers={handlers} />)}
      </ul>
    )
  }
}
