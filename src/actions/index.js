import { createAction } from 'redux-actions';
import firebase from 'firebase';

export const addTask = createAction('TASK_ADD', (id, text, userId) => ({ id, text, userId }));
export const removeTask = createAction('TASK_REMOVE', (id, userId) => ({ id, userId }));
export const toggleTaskState = createAction('TASK_STATE_TOGGLE', (id, userId) => ({ id, userId }));
export const toggleAllTaskState = createAction('TASK_STATE_TOGGLE_ALL', userId => ({ userId }));
export const removeFinishedTasks = createAction('TASKS_REMOVE_FINISHED', userId => ({ userId }));
export const changeInput = createAction('INPUT_CHANGE', text => ({ text }));
export const toggleFilter = createAction('FILTER_TOGGLE', filter => ({ filter }));
export const editTaskStart = createAction('TASK_EDIT_START', id => ({ id }));
export const editTask = createAction('TASK_EDIT', (id, text) => ({ id, text }));
export const editTaskEnd = createAction('TASK_EDIT_END', (id, userId) => ({ id, userId }));
export const updateStateOnLogin = createAction('TASK_LIST_UPDATE', (items, nextId) => ({ items, nextId }));
export const signInScreen = createAction('SCREEN_SIGN_IN');
export const signUpScreen = createAction('SCREEN_SIGN_OUT');
export const noAuthScreen = createAction('SCREEN_NO_AUTH');

export const signInRequest = createAction('SIGN_IN_REQUEST');
export const signInSuccess = createAction('SIGN_IN_SUCCESS', ({ email, uid }) => ({ email, uid }));
export const signInFailure = createAction('SIGN_IN_FAILURE');

export const onSignIn = (values) => async (dispatch) => {
  const { email, password } = values;

  dispatch(signInRequest());
  try {
    const credentials = await firebase.auth().signInWithEmailAndPassword(email, password);
    dispatch(signInSuccess(credentials.user));
  } catch (e) {
    dispatch(signInFailure());
  }
};

export const signUpRequest = createAction('SIGN_UP_REQUEST');
export const signUpSuccess = createAction('SIGN_UP_SUCCESS');
export const signUpFailure = createAction('SIGN_UP_FAILURE');

export const onSignUp = (values) => async (dispatch) => {
  const { email, password } = values;

  dispatch(signUpRequest());
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    dispatch(signUpSuccess());
    dispatch(onSignIn(values))
  } catch (e) {
    dispatch(signUpFailure());
  }
};

export const signOutRequest = createAction('SIGN_OUT_REQUEST');
export const signOutSuccess = createAction('SIGN_OUT_SUCCESS');
export const signOutFailure = createAction('SIGN_OUT_FAILURE');

export const onSignOut = () => async (dispatch) => {
  dispatch(signOutRequest());
  try {
    await firebase.auth().signOut();
    dispatch(signOutSuccess());
  } catch (e) {
    dispatch(signOutFailure());
  }
};
