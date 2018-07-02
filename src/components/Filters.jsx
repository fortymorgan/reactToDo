import React from 'react';
import cn from 'classnames';

export default class Filters extends React.Component {
  onToggleFilter = (e) => {
    const { toggleFilter } = this.props;
    toggleFilter(e.target.innerHTML);
  }

  render() {
    const { filter } = this.props;
    const filters = ['all', 'active', 'finished'];
  
    return (
      <div className="filters">
        {filters.map(f => {
          const className = cn({
            btn: true,
            filter: true,
            'btn-toggled': f === filter,
          });
          return <button className={className} key={f} onClick={this.onToggleFilter}>{f}</button>;
        })}
      </div>
    )
  }
}
