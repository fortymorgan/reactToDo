import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import firebase from 'firebase';
import * as actions from '../actions';

const signInState = handleActions({
  [actions.signInRequest]() {
    return 'requested';
  },
  [actions.signInFailure]() {
    return 'failed';
  },
  [actions.signInSuccess]() {
    return 'successed';
  },
}, 'none');

const signUpState = handleActions({
  [actions.signUpRequest]() {
    return 'requested';
  },
  [actions.signUpFailure]() {
    return 'failed';
  },
  [actions.signUpSuccess]() {
    return 'successed';
  },
}, 'none');

const signOutState = handleActions({
  [actions.signOutRequest]() {
    return 'requested';
  },
  [actions.signOutFailure]() {
    return 'failed';
  },
  [actions.signOutSuccess]() {
    return 'successed';
  },
}, 'none');

const items = handleActions({
  [actions.updateStateOnLogin](state, { payload: { items } }) {
    return items;
  },
  [actions.addTask](state, { payload: { id, text, userId } }) {
    const newState = [...state, { id, text, state: 'active', editing: false }];
    firebase.database().ref('lists/' + userId).set(newState)
      .then(res => console.log(res));
    return newState;
  },
  [actions.removeTask](state, { payload: { id, userId } }) {
    const newState = state.filter(item => item.id !== id);
    firebase.database().ref('lists/' + userId).set(newState);
    return newState;
  },
  [actions.toggleTaskState](state, { payload: { id, userId } }) {
    const newState = state.map(item => item.id !== id ? item :
      { ...item, state: item.state === 'active' ? 'finished' : 'active' });
    firebase.database().ref('lists/' + userId).set(newState);
    return newState;
  },
  [actions.toggleAllTaskState](state, { payload: { userId } }) {
    const toggledState = state.every(({ state }) => state === 'finished') ? 'active' : 'finished';
    const newState = state.map(item => ({ ...item, state: toggledState }));
    firebase.database().ref('lists/' + userId).set(newState);
    return newState;
  },
  [actions.removeFinishedTasks](state, { payload: { userId } }) {
    const newState = state.filter(({ state }) => state !== 'finished');
    firebase.database().ref('lists/' + userId).set(newState);
    return newState;
  },
  [actions.editTaskStart](state, { payload: { id } }) {
    return state.map(item => item.id === id ? { ...item, editing: true } : item);
  },
  [actions.editTaskEnd](state, { payload: { id, userId } }) {
    const newState = state.map(item => item.id === id ? { ...item, editing: false } : item);
    firebase.database().ref('lists/' + userId).set(newState);
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
  [actions.updateStateOnLogin](state, { payload: { nextId } }) {
    return nextId;
  },
  [actions.addTask](state) {
    return state + 1;
  }
}, 0);

const filter = handleActions({
  [actions.toggleFilter](state, { payload: { filter } }) {
    return filter;
  }
}, 'all');

const currentUser = handleActions({
  [actions.signInSuccess](state, { payload: { email, uid } }) {
    return { email, uid };
  },
  [actions.signOutSuccess]() {
    return '';
  }
}, '');

export default combineReducers({
  signInState,
  signUpState,
  signOutState,
  items,
  input,
  nextId,
  filter,
  currentUser,
  form: formReducer,
});