import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const createTaskState = handleActions({
  [actions.createTaskRequest]() {
    return 'requested';
  },
  [actions.createTaskFailure]() {
    return 'failed';
  },
  [actions.createTaskSuccess]() {
    return 'successed';
  },
}, 'none');

const removeTaskState = handleActions({
  [actions.removeTaskRequest]() {
    return 'requested';
  },
  [actions.removeTaskFailure]() {
    return 'failed';
  },
  [actions.removeTaskSuccess]() {
    return 'successed';
  },
}, 'none');

const toggleTaskState = handleActions({
  [actions.toggleTaskRequest]() {
    return 'requested';
  },
  [actions.toggleTaskFailure]() {
    return 'failed';
  },
  [actions.toggleTaskSuccess]() {
    return 'successed';
  },
}, 'none');

const toggleAllTaskState = handleActions({
  [actions.toggleAllTaskRequest]() {
    return 'requested';
  },
  [actions.toggleAllTaskFailure]() {
    return 'failed';
  },
  [actions.toggleAllTaskSuccess]() {
    return 'successed';
  },
}, 'none');

const removeFinishedTasksState = handleActions({
  [actions.removeFinishedTasksRequest]() {
    return 'requested';
  },
  [actions.removeFinishedTasksFailure]() {
    return 'failed';
  },
  [actions.removeFinishedTasksSuccess]() {
    return 'successed';
  },
}, 'none');

export default {
  createTaskState,
  removeTaskState,
  toggleTaskState,
  toggleAllTaskState,
  removeFinishedTasksState,
}
