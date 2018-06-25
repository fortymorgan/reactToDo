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
  
    return filters.map(f => {
      const className = cn({
        btn: true,
        'btn-sm': true,
        'btn-secondary': f === filter,
      });
      return <button className={className} key={f} onClick={this.onToggleFilter}>{f}</button>;
    })
  }
}
