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

const signOutState = handleActions({
  [actions.signOutRequest]() {
    return 'requested';
  },
  [actions.signOutFailure]() {
    return 'failed';
  },
  [actions.signOutSuccess]() {
    return 'successed';
  },
}, 'none');

export default {
  signInState,
  signUpState,
  signOutState,
}