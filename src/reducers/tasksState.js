import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const createReducerRequestSuccess = (request, success) =>
  handleActions({
    [request]() {
      return 'requested';
    },
    [success]() {
      return 'successed';
    },
  }, 'none');

const createTaskState = createReducerRequestSuccess(
  actions.createTaskRequest,
  actions.createTaskSuccess
);

const toggleAllTaskState = createReducerRequestSuccess(
  actions.toggleAllTaskRequest,
  actions.toggleAllTaskSuccess
);

const removeFinishedTasksState = createReducerRequestSuccess(
  actions.removeFinishedTasksRequest,
  actions.removeFinishedTasksSuccess
);

export default {
  createTaskState,
  toggleAllTaskState,
  removeFinishedTasksState,
}
