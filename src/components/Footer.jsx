import React from 'react';
import cn from 'classnames';

const Filters = (props) => {
  const { filter, onToggleFilter } = props;
  const filters = ['all', 'active', 'finished'];

  return filters.map(f => {
    const className = cn({
      btn: true,
      'btn-sm': true,
      'btn-secondary': f === filter,
    });
    return <button className={className} key={f} onClick={onToggleFilter}>{f}</button>;
  })
}

const Footer = (props) => {
  const { filter, handlers, isListEmpty, activeItemsCount } = props;
  const { onToggleFilter, onClearFinished } = handlers;

  if (isListEmpty) {
    return null;
  }

  return (
    <div className="mt-3 d-flex justify-content-around">
      <span>{`${activeItemsCount} items left`}</span>
      <Filters filter={filter} onToggleFilter={onToggleFilter} />
      <button className="btn btn-primary btn-sm" onClick={onClearFinished}>Clear finished</button>
    </div>
  )
}

export default Footer;
