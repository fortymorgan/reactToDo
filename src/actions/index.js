import { createAction } from 'redux-actions';

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
export const signIn = createAction('USER_SIGN_IN', ({ email, uid }) => ({ email, uid }))
export const signOut = createAction('USER_SIGN_OUT');
export const updateStateOnLogin = createAction('TASK_LIST_UPDATE', (items, nextId) => ({ items, nextId }));
