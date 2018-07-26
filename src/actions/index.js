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

export const createTaskRequest = createAction('TASK_CREATE_REQUEST');
export const createTaskSuccess = createAction('TASK_CREATE_SUCCESS', task => ({ task }));

export const onTaskAdd = (value) => async (dispatch) => {
  dispatch(createTaskRequest());
  const userId = firebase.auth().currentUser.uid;
  await firebase.database().ref('lists/' + userId).push(value);
};

export const removeTaskSuccess = createAction('TASK_REMOVE_SUCCESS', dbId => ({ dbId }));

export const onTaskRemove = (dbId) => async (dispatch) => {
  const userId = firebase.auth().currentUser.uid;
  await firebase.database().ref('lists/' + userId + '/' + dbId).remove();
  dispatch(removeTaskSuccess(dbId));
};

export const toggleTaskSuccess = createAction('TASK_TOGGLE_SUCCESS', dbId => ({ dbId }));

export const onTaskToggle = (dbId, state) => async (dispatch) => {
  const userId = firebase.auth().currentUser.uid;
  await firebase.database().ref('lists/' + userId + '/' + dbId + '/state').set(state);
  dispatch(toggleTaskSuccess(dbId));
}

export const toggleAllTaskRequest = createAction('TASK_TOGGLE_ALL_REQUEST');
export const toggleAllTaskSuccess = createAction('TASK_TOGGLE_ALL_SUCCESS', itemsState => ({ itemsState }));

export const onTaskToggleAll = (dbIds, state) => async (dispatch) => {
  dispatch(toggleAllTaskRequest());
  const userId = firebase.auth().currentUser.uid;
  await Promise.all(dbIds.map(dbId => firebase.database().ref('lists/' + userId + '/' + dbId + '/state').set(state)))
  dispatch(toggleAllTaskSuccess(state));
}

export const removeFinishedTasksRequest = createAction('TASKS_REMOVE_FINISHED_REQUEST');
export const removeFinishedTasksSuccess = createAction('TASKS_REMOVE_FINISHED_SUCCESS');

export const onRemoveFinishedTasks = (dbIds) => async (dispatch) => {
  dispatch(removeFinishedTasksRequest());
  const userId = firebase.auth().currentUser.uid;
  await Promise.all(dbIds.map(dbId => firebase.database().ref('lists/' + userId + '/' + dbId).remove()))
  dispatch(removeFinishedTasksSuccess());
}

export const editTaskSuccess = createAction('TASK_EDIT_SUCCESS', (dbId, text) => ({ dbId, text }));

export const onEditTask = (dbId, text) => async (dispatch) => {
  const userId = firebase.auth().currentUser.uid;
  await firebase.database().ref('lists/' + userId + '/' + dbId + '/text').set(text);
  dispatch(editTaskSuccess(dbId, text));
}
