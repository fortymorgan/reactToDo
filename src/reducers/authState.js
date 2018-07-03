import { handleActions } from 'redux-actions';
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

const signInError = handleActions({
  [actions.signInFailure](state, { payload: { code } }) {
    return code;
  },
  [actions.signInSuccess]() {
    return 'none';
  },
  [actions.clearAuthError]() {
    return 'none';
  },
}, 'none')

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

const signUpError = handleActions({
  [actions.signUpFailure](state, { payload: { code } }) {
    return code;
  },
  [actions.signUpSuccess]() {
    return 'none';
  },
  [actions.clearAuthError]() {
    return 'none';
  },
}, 'none');

export default {
  signInState,
  signUpState,
  signInError,
  signUpError,
}