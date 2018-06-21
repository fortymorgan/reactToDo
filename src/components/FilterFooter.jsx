import React from 'react';

const filters = ['all', 'active', 'finished'];

export default class FilterFooter extends React.Component {
  render() {
    const { filter, handlers, list } = this.props;
    const { onToggleFilter, onClearFinished } = handlers;

    if (list.length === 0) {
      return null;
    }

    return (
      <div className="mt-3 d-flex justify-content-around">
        <span>{`${list.filter(item => item.state === 'active').length} items left`}</span>
        {filters.map(f => {
          const className = f === filter ? "btn btn-secondary btn-sm" : "btn btn-sm";
          return <button className={className} key={f} onClick={onToggleFilter}>{f}</button>;
          })}
        <button className="btn btn-primary btn-sm" onClick={onClearFinished}>Clear finished</button>
      </div>
    )
  }
}