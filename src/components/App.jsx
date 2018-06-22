import React from 'react';
import InputForm from './InputForm.jsx';
import ListItems from './ListItems.jsx';
import Footer from './FilterFooter.jsx'
import { getItemsList, toLocalStorage } from '../scripts/storage';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextId: 0,
      input: '',
      items: getItemsList(),
      filter: 'all',
    }
  }

  onInput = (e) => {
    this.setState({ input: e.target.value });
  }

  onAdd = (e) => {
    e.preventDefault();
    const { input, items, nextId } = this.state;
    const newItems = [...items, { id: nextId, text: input, state: 'active', editing: false }];
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
    const toggledState = items.every(item => item.state === 'finished') ? 'active' : 'finished';
    const newItems = items.map(item => ({ ...item, state: toggledState }));
    toLocalStorage('todo-list', newItems);
    this.setState({ items: newItems });
  }

  onToggleFilter = (e) => {
    this.setState({ filter: e.target.innerHTML });
  }

  onClearFinished = () => {
    const { items } = this.state;
    const newItems = items.filter(item => item.state !== 'finished');
    toLocalStorage('todo-list', newItems);
    this.setState({ items: newItems });
  }

  onStartEdit = (id) => () => {
    const { items } = this.state;
    const newItems = items.map(item => ({ ...item, editing: item.id === id }));
    this.setState({ items: newItems });
  }

  onEdit = (id) => (e) => {
    const { items } = this.state;
    const newItems = items.map(item => (item.id === id ? { ...item, text: e.target.value } : item));
    this.setState({ items: newItems });
  }

  onEndEdit = (e) => {
    e.preventDefault();
    const { items } = this.state;
    const newItems = items.map(item => ({ ...item, editing: false }));
    toLocalStorage('todo-list', newItems);
    this.setState({ items: newItems });
  }

  render() {
    const { input, items, filter } = this.state;

    const itemsToRender = {
      all: items,
      active: items.filter(item => item.state === 'active'),
      finished: items.filter(item => item.state === 'finished'),
    }

    return (
      <div className="jumbotron">
        <InputForm handlers={{ onInput: this.onInput, onAdd: this.onAdd, onToggleAll: this.onToggleAll }} value={input} list={items} />
        <ListItems handlers={{ onRemove: this.onRemove, onToggle: this.onToggle, onStartEdit: this.onStartEdit, onEdit: this.onEdit, onEndEdit: this.onEndEdit }} list={itemsToRender[filter]} />
        <Footer filter={filter} list={items} handlers={{ onToggleFilter: this.onToggleFilter, onClearFinished: this.onClearFinished }} />
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