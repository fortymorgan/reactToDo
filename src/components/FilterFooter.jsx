import React from 'react';

const filters = ['all', 'active', 'finished'];

export default class FilterFooter extends React.Component {
  render() {
    const { filter, handlers, list } = this.props;
    const { onToggleFilter } = handlers;

    if (list.length === 0) {
      return null;
    }

    return (
      <div className="mt-3 d-flex justify-content-around">
        <p>{`${list.filter(item => item.state === 'active').length} items left`}</p>
        {filters.map(f => {
          const className = f === filter ? "btn btn-secondary border-0" : "btn border-0";
          return <button className={className} key={f} onClick={onToggleFilter}>{f}</button>;
          })}
      </div>
    )
  }
}