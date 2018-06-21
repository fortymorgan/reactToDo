import React from 'react';
import _ from 'lodash';
import InputForm from './InputForm.jsx';
import ListItems from './ListItems.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      items: [],
    }
  }

  onInput = (e) => {
    this.setState({ input: e.target.value });
  }

  onAdd = (e) => {
    e.preventDefault();
    const { input, items } = this.state;
    this.setState({ input: '', items: [...items, { id: _.uniqueId(), text: input, state: 'active' }] })
  }

  onRemove = (id) => () => {
    const { items } = this.state;
    this.setState({ items: items.filter(item => item.id !== id) })
  }

  onToggle = (id) => () => {
    const { items } = this.state;
    this.setState({ items: items.map(item => item.id !== id ? item :
      { ...item, state: item.state === 'active' ? 'finished' : 'active' }) });
  }

  render() {
    const { input, items } = this.state;

    return (
      <div className="jumbotron">
        <InputForm handlers={{ onInput: this.onInput, onAdd: this.onAdd }} value={input} />
        <hr className="my-4" />
        <ListItems handlers={{ onRemove: this.onRemove, onToggle: this.onToggle }} list={items} />
      </div>
    )
  }
}