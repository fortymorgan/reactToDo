import { createAction } from 'redux-actions';
import firebase from 'firebase';

export const changeInput = createAction('INPUT_CHANGE', text => ({ text }));
export const toggleFilter = createAction('FILTER_TOGGLE', filter => ({ filter }));
export const updateStateOnLogin = createAction('TASK_LIST_UPDATE', (items) => {
  if (!items) {
    return { items: {} };
  } 
  
  return { items };
});

export const toggleNoAuth = createAction('NO_AUTH_TOGGLE');

export const addEmptyTask = createAction('EMPTY_TASK_ADD');

export const editTask = createAction('TASK_EDIT', dbId => ({ dbId }));

export const signInSuccess = createAction('SIGN_IN_SUCCESS', ({ email }) => ({ email }));
export const authFailure = createAction('SIGN_IN_FAILURE', code => ({ code }));

export const onSignIn = (values) => async (dispatch) => {
  const { email, password } = values;

  try {
    const credentials = await firebase.auth().signInWithEmailAndPassword(email, password);
    dispatch(signInSuccess(credentials.user));
  } catch (e) {
    const error = await e;
    dispatch(authFailure(error.code));
  }
};

export const onSignUp = (values) => async (dispatch) => {
  const { email, password } = values;

  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    dispatch(onSignIn(values))
  } catch (e) {
    const error = await e;
    dispatch(authFailure(error.code));
  }
};

export const clearAuthError = createAction('AUTH_ERROR_CLEAR');

export const onSignOut = () => async () => {
  await firebase.auth().signOut();
};

export const createTaskSuccess = createAction('TASK_CREATE_SUCCESS', task => ({ task }));

export const onTaskAdd = (value) => async (dispatch) => {
  const userId = firebase.auth().currentUser.uid;
  await firebase.database().ref('lists/' + userId).push(value);
};

export const removeTaskSuccess = createAction('TASK_REMOVE_SUCCESS', dbId => ({ dbId }));

export const onTaskRemove = (dbId) => async (dispatch) => {
  const userId = firebase.auth().currentUser.uid;
  await firebase.database().ref('lists/' + userId + '/' + dbId).remove();
};

export const onRemoveFinishedTasks = (dbIds) => async (dispatch) => {
  const userId = firebase.auth().currentUser.uid;
  await Promise.all(dbIds.map(dbId => firebase.database().ref('lists/' + userId + '/' + dbId).remove()))
};

export const changeTaskSuccess = createAction('TASK_CHANGE_SUCCESS', task => ({ task }));

export const onTaskToggle = (dbId, state) => async (dispatch) => {
  const userId = firebase.auth().currentUser.uid;
  await firebase.database().ref('lists/' + userId + '/' + dbId + '/state').set(state);
};

export const onTaskToggleAll = (dbIds, state) => async (dispatch) => {
  const userId = firebase.auth().currentUser.uid;
  await Promise.all(dbIds.map(dbId => firebase.database().ref('lists/' + userId + '/' + dbId + '/state').set(state)))
};

export const onEditTask = (dbId, text) => async (dispatch) => {
  const userId = firebase.auth().currentUser.uid;
  await firebase.database().ref('lists/' + userId + '/' + dbId + '/text').set(text);
};
