import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const createReducerRequestSuccessFailure = (request, success, failure) =>
  handleActions({
    [request]() {
      return 'requested';
    },
    [success]() {
      return 'successed';
    },
    [failure]() {
      return 'failured';
    },
  }, 'none');
  
const createReducerAuthError = (failure, success, clear) =>
  handleActions({
    [failure](state, { payload: { code } }) {
      return code;
    },
    [success]() {
      return 'none';
    },
    [clear]() {
      return 'none';
    },
  }, 'none');

const signInState = createReducerRequestSuccessFailure(
  actions.signInRequest,
  actions.signInSuccess,
  actions.signInFailure,
);

const signUpState = createReducerRequestSuccessFailure(
  actions.signUpRequest,
  actions.signUpSuccess,
  actions.signUpFailure
);

const signInError = createReducerAuthError(
  actions.signInFailure,
  actions.signInSuccess,
  actions.clearAuthError
);

const signUpError = createReducerAuthError(
  actions.signUpFailure,
  actions.signUpSuccess,
  actions.clearAuthError
);

export default {
  signInState,
  signUpState,
  signInError,
  signUpError,
};
