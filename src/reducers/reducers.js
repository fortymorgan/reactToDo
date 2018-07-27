import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import _ from 'lodash';
import * as actions from '../actions';
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
  [actions.editTask](state, { payload: { dbId } }) {
    return _.mapValues(state, (value, key) => key === dbId ? { ...value, editing: true } : value);
  },
  [actions.editTaskSuccess](state, { payload: { dbId, text } }) {
    return _.mapValues(state, (value, key) => key === dbId ? { ...value, editing: false, text } : value);
  },
}, {});

const input = handleActions({
  [actions.createTaskSuccess]() {
    return '';
  },
  [actions.changeInput](state, { payload: { text } }) {
    return text;
  },
}, '');

const filter = handleActions({
  [actions.toggleFilter](state, { payload: { filter } }) {
    return filter;
  }
}, 'all');

const currentUser = handleActions({
  [actions.signInSuccess](state, { payload: { email } }) {
    return email;
  },
}, '');

const requestEmptyTask = handleActions({
  [actions.addEmptyTask]() {
    return true;
  },
  [actions.changeInput]() {
    return false;
  },
}, false);

const authError = handleActions({
  [actions.authFailure](state, { payload: { code } }) {
    return code;
  },
  [actions.clearAuthError]() {
    return 'none';
  }
}, 'none')

export default combineReducers({
  ...tasksStateReducers,
  authError,
  requestEmptyTask,
  items,
  input,
  filter,
  currentUser,
  form: formReducer,
  routing: routerReducer,
});