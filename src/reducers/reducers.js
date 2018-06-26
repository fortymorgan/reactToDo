import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';
import { toLocalStorage } from '../storage';

const items = handleActions({
  [actions.addTask](state, { payload: { id, text } }) {
    const newState = [...state, { id, text, state: 'active', editing: false }];
    toLocalStorage('todo-list', newState);
    return newState;
  },
  [actions.removeTask](state, { payload: { id } }) {
    const newState = state.filter(item => item.id !== id);
    toLocalStorage('todo-list', newState);
    return newState;
  },
  [actions.toggleTaskState](state, { payload: { id } }) {
    const newState = state.map(item => item.id !== id ? item :
      { ...item, state: item.state === 'active' ? 'finished' : 'active' });
    toLocalStorage('todo-list', newState);
    return newState;
  },
  [actions.toggleAllTaskState](state) {
    const toggledState = state.every(({ state }) => state === 'finished') ? 'active' : 'finished';
    const newState = state.map(item => ({ ...item, state: toggledState }));
    toLocalStorage('todo-list', newState);
    return newState;
  },
  [actions.removeFinishedTasks](state) {
    const newState = state.filter(({ state }) => state !== 'finished');
    toLocalStorage('todo-list', newState);
    return newState;
  },
  [actions.editTaskStart](state, { payload: { id } }) {
    return state.map(item => item.id === id ? { ...item, editing: true } : item);
  },
  [actions.editTaskEnd](state, { payload: { id } }) {
    const newState = state.map(item => item.id === id ? { ...item, editing: false } : item);
    toLocalStorage('todo-list', newState);
    return newState;
  },
  [actions.editTask](state, { payload: { id, text } }) {
    return state.map(item => (item.id === id ? { ...item, text } : item));
  }
}, []);

const input = handleActions({
  [actions.addTask]() {
    return '';
  },
  [actions.changeInput](state, { payload: { text } }) {
    return text;
  },
}, '');

const nextId = handleActions({
  [actions.addTask](state) {
    return state + 1;
  }
}, 0);

const filter = handleActions({
  [actions.toggleFilter](state, { payload: { filter } }) {
    return filter;
  }
}, 'all');

const user = handleActions({
  [actions.signIn](state, { payload: { email } }) {
    return email;
  },
  [actions.signOut]() {
    return '';
  }
}, '');

export default combineReducers({
  items,
  input,
  nextId,
  filter,
  user,
  form: formReducer,
});