import React from 'react';

const filters = ['all', 'active', 'finished'];

export default class FilterFooter extends React.Component {
  render() {
    const { filter, handlers } = this.props;
    const { onToggleFilter } = handlers;

    return (
      <div className="col-8 mt-3 d-flex justify-content-around">
        {filters.map(f => {
          const className = f === filter ? "btn btn-secondary border-0" : "btn border-0";
          return <button className={className} key={f} onClick={onToggleFilter}>{f}</button>;
          })}
      </div>
    )
  }
}