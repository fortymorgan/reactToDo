import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import firebase from 'firebase';
import _ from 'lodash';
import * as actions from '../actions';
import authStateReducers from './authState';
import tasksStateReducers from './tasksState';

const items = handleActions({
  [actions.updateStateOnLogin](state, { payload: { items } }) {
    return items;
  },
  [actions.createTaskSuccess](state, { payload: { task } }) {
    return { ...state, ...task };
  },
  [actions.removeTaskSuccess](state, { payload: { dbId } }) {
    return _.omit(state, dbId);
  },
  [actions.toggleTaskSuccess](state, { payload: { dbId } }) {
    return _.mapValues(state, (value, key) => key !== dbId ? value :
      { ...value, state: value.state === 'active' ? 'finished' : 'active' });
  },
  [actions.toggleAllTaskSuccess](state, { payload: { itemsState } }) {
    return _.mapValues(state, value => ({ ...value, state: itemsState }));
  },
  [actions.removeFinishedTasksSuccess](state) {
    return _.omitBy(state, value => value.state === 'finished');
  },
  [actions.signOutSuccess]() {
    return {};
  }
}, {});

const input = handleActions({
  [actions.createTaskSuccess]() {
    return '';
  },
  [actions.changeInput](state, { payload: { text } }) {
    return text;
  },
}, '');

const nextId = handleActions({
  [actions.updateStateOnLogin](state, { payload: { nextId } }) {
    return nextId;
  },
  [actions.createTaskSuccess](state) {
    return state + 1;
  },
  [actions.signOutSuccess]() {
    return 0;
  }
}, 0);

const filter = handleActions({
  [actions.toggleFilter](state, { payload: { filter } }) {
    return filter;
  }
}, 'all');

const currentUser = handleActions({
  [actions.signInSuccess](state, { payload: { email } }) {
    return email;
  },
  [actions.signOutSuccess]() {
    return '';
  }
}, '');

export default combineReducers({
  ...authStateReducers,
  ...tasksStateReducers,
  items,
  input,
  nextId,
  filter,
  currentUser,
  form: formReducer,
  routing: routerReducer,
});