import { createAction } from 'redux-actions';

export const addTask = createAction('TASK_ADD', (id, text) => ({ id, text }));
export const removeTask = createAction('TASK_REMOVE', id => ({ id }));
export const toggleTaskState = createAction('TASK_STATE_TOGGLE', id => ({ id }));
export const toggleAllTaskState = createAction('TASK_STATE_TOGGLE_ALL');
export const removeFinishedTasks = createAction('TASKS_REMOVE_FINISHED');
export const changeInput = createAction('INPUT_CHANGE', text => ({ text }));
export const toggleFilter = createAction('FILTER_TOGGLE', filter => ({ filter }));
export const editTaskStart = createAction('TASK_EDIT_START', id => ({ id }));
export const editTask = createAction('TASK_EDIT', (id, text) => ({ id, text }));
export const editTaskEnd = createAction('TASK_EDIT_END', id => ({ id }));
