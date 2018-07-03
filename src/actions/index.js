import { createAction } from 'redux-actions';
import firebase from 'firebase';

export const changeInput = createAction('INPUT_CHANGE', text => ({ text }));
export const toggleFilter = createAction('FILTER_TOGGLE', filter => ({ filter }));
export const updateStateOnLogin = createAction('TASK_LIST_UPDATE', (items) => {
  if (!items) {
    return { items: {}, nextId: 0 };
  } else {
    const itemsValues = Object.values(items).sort((a, b) => a.id - b.id);
    const nextId = +itemsValues[itemsValues.length - 1].id + 1;
    return { items, nextId };
  }
});

export const addEmptyTask = createAction('EMPTY_TASK_ADD');

export const editTask = createAction('TASK_EDIT', dbId => ({ dbId }));

export const signInRequest = createAction('SIGN_IN_REQUEST');
export const signInSuccess = createAction('SIGN_IN_SUCCESS', ({ email }) => ({ email }));
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

export const createTaskRequest = createAction('TASK_CREATE_REQUEST');
export const createTaskSuccess = createAction('TASK_CREATE_SUCCESS', task => ({ task }));
export const createTaskFailure = createAction('TASK_CREATE_FAILURE');

export const onTaskAdd = (value) => async (dispatch) => {
  dispatch(createTaskRequest());
  try {
    const userId = firebase.auth().currentUser.uid;
    await firebase.database().ref('lists/' + userId).push(value);
  } catch (e) {
    dispatch(createTaskFailure());
  }
};

export const removeTaskRequest = createAction('TASK_REMOVE_REQUEST');
export const removeTaskSuccess = createAction('TASK_REMOVE_SUCCESS', dbId => ({ dbId }));
export const removeTaskFailure = createAction('TASK_REMOVE_FAILURE');

export const onTaskRemove = (dbId) => async (dispatch) => {
  dispatch(removeTaskRequest());
  try {
    const userId = firebase.auth().currentUser.uid;
    await firebase.database().ref('lists/' + userId + '/' + dbId).remove();
    dispatch(removeTaskSuccess(dbId));
  } catch (e) {
    dispatch(removeTaskFailure());
  }
};

export const toggleTaskRequest = createAction('TASK_TOGGLE_REQUEST');
export const toggleTaskSuccess = createAction('TASK_TOGGLE_SUCCESS', dbId => ({ dbId }));
export const toggleTaskFailure = createAction('TASK_TOGGLE_FAILURE');

export const onTaskToggle = (dbId, state) => async (dispatch) => {
  dispatch(toggleTaskRequest());
  try {
    const userId = firebase.auth().currentUser.uid;
    await firebase.database().ref('lists/' + userId + '/' + dbId + '/state').set(state);
    dispatch(toggleTaskSuccess(dbId));
  } catch (e) {
    dispatch(toggleTaskFailure());
  }
}

export const toggleAllTaskRequest = createAction('TASK_TOGGLE_ALL_REQUEST');
export const toggleAllTaskSuccess = createAction('TASK_TOGGLE_ALL_SUCCESS', itemsState => ({ itemsState }));
export const toggleAllTaskFailure = createAction('TASK_TOGGLE_ALL_FAILURE');

export const onTaskToggleAll = (dbIds, state) => async (dispatch) => {
  dispatch(toggleAllTaskRequest());
  try {
    const userId = firebase.auth().currentUser.uid;
    await Promise.all(dbIds.map(dbId => firebase.database().ref('lists/' + userId + '/' + dbId + '/state').set(state)))
    dispatch(toggleAllTaskSuccess(state));
  } catch (e) {
    dispatch(toggleAllTaskFailure());
  }
}

export const removeFinishedTasksRequest = createAction('TASKS_REMOVE_FINISHED_REQUEST');
export const removeFinishedTasksSuccess = createAction('TASKS_REMOVE_FINISHED_SUCCESS');
export const removeFinishedTasksFailure = createAction('TASKS_REMOVE_FINISHED_FAILURE');

export const onRemoveFinishedTasks = (dbIds) => async (dispatch) => {
  dispatch(removeFinishedTasksRequest());
  try {
    const userId = firebase.auth().currentUser.uid;
    await Promise.all(dbIds.map(dbId => firebase.database().ref('lists/' + userId + '/' + dbId).remove()))
    dispatch(removeFinishedTasksSuccess());
  } catch (e) {
    dispatch(removeFinishedTasksFailure());
  }
}

export const editTaskRequest = createAction('TASK_EDIT_REQUEST');
export const editTaskSuccess = createAction('TASK_EDIT_SUCCESS', (dbId, text) => ({ dbId, text }));
export const editTaskFailure = createAction('TASK_EDIT_FAILURE');

export const onEditTask = (dbId, text) => async (dispatch) => {
  dispatch(editTaskRequest());
  try {
    const userId = firebase.auth().currentUser.uid;
    await firebase.database().ref('lists/' + userId + '/' + dbId + '/text').set(text);
    dispatch(editTaskSuccess(dbId, text));
  } catch (e) {
    dispatch(editTaskFailure());
  }
}
