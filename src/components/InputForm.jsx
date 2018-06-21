import React from 'react';

export default class InputForm extends React.Component {
  render() {
    const { value, handlers } = this.props;
    const { onInput, onAdd } = handlers;

    return (
      <form className="form-inline" onSubmit={onAdd}>
        <div className="form-group mx-sm-3">
          <input type="text" value={value} onChange={onInput} />
        </div>
        <button type="submit" className="btn btn-primary btn-sm">Add</button>
      </form>
    )
  }
}
