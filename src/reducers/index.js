import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import _ from 'lodash';
import * as actions from '../actions';

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
  [actions.changeTaskSuccess](state, { payload: { task } }) {
    return { ...state, ...task };
  },
  [actions.editTask](state, { payload: { dbId } }) {
    return { ...state, [dbId]: { ...state[dbId], editing: true } };
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

const withoutAuth = handleActions({
  [actions.toggleNoAuth](state) {
    return !state;
  },
}, false);

export default combineReducers({
  authError,
  requestEmptyTask,
  items,
  input,
  filter,
  currentUser,
  withoutAuth,
  form: formReducer,
  routing: routerReducer,
});