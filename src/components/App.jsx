import React from 'react';
import InputForm from './InputForm.jsx';
import ListItems from './ListItems.jsx';
import { getItemsList, toLocalStorage } from '../scripts/storage';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextId: 0,
      input: '',
      items: getItemsList(),
    }
  }

  onInput = (e) => {
    this.setState({ input: e.target.value });
  }

  onAdd = (e) => {
    e.preventDefault();
    const { input, items, nextId } = this.state;
    const newItems = [...items, { id: nextId, text: input, state: 'active' }];
    toLocalStorage('todo-list', newItems);
    this.setState({ input: '', items: newItems, nextId: nextId + 1 });
  }

  onRemove = (id) => () => {
    const { items } = this.state;
    const newItems = items.filter(item => item.id !== id);
    toLocalStorage('todo-list', newItems);
    this.setState({ items: newItems });
  }

  onToggle = (id) => () => {
    const { items } = this.state;
    const newItems = items.map(item => item.id !== id ? item :
      { ...item, state: item.state === 'active' ? 'finished' : 'active' });
    toLocalStorage('todo-list', newItems);
    this.setState({ items: newItems });
  }

  onToggleAll = () => {
    const { items } = this.state;
    const newItems = items.map(item => ({ ...item, state: item.state === 'active' ? 'finished' : 'active' }));
    toLocalStorage('todo-list', newItems);
    this.setState({ items: newItems });
  }

  render() {
    const { input, items } = this.state;

    return (
      <div className="jumbotron">
        <InputForm handlers={{ onInput: this.onInput, onAdd: this.onAdd, onToggleAll: this.onToggleAll }} value={input} />
        <hr className="my-4" />
        <ListItems handlers={{ onRemove: this.onRemove, onToggle: this.onToggle }} list={items} />
      </div>
    )
  }

  componentDidMount = () => {
    const { items } = this.state;

    if (items.length > 0) {
      const nextId = +items[items.length - 1].id + 1;
      this.setState({ nextId })
    }
  }
}