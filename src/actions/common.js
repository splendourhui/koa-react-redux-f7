import { pushState } from 'redux-router';

export const SHOW_LOADING = 'SHOW_LOADING';
export const HIDE_LOADING = 'HIDE_LOADING';
export const SHOW_SUCCESS_MSG = 'SHOW_SUCCESS_MSG';
export const SHOW_ERROR_MSG = 'SHOW_ERROR_MSG';
export const HIDE_SUCCESS_MESSAGE = 'HIDE_SUCCESS_MESSAGE';
export const HIDE_ERROR_MESSAGE = 'HIDE_ERROR_MESSAGE';

export const MESSAGE_TYPE_SUCCESS = 'MESSAGE_TYPE_SUCCESS';
export const MESSAGE_TYPE_ERROR = 'MESSAGE_TYPE_ERROR';

export function showLoading(msg = 'Loading') {
  return {
    type: SHOW_LOADING,
    msg
  }
}

export function hideLoading(msg) {
  return {
    type: HIDE_LOADING
  }
}

export function showSuccessMessage(msg, hold = 2000) {
  return {
    type: SHOW_SUCCESS_MSG,
    msgType: MESSAGE_TYPE_SUCCESS,
    msg,
    hold
  }
}

export function showErrorMessage(msg, hold = 2000) {
  return {
    type: SHOW_ERROR_MSG,
    msgType: MESSAGE_TYPE_ERROR,
    msg,
    hold
  }
}

export function hideSuccessMessage() {
  return {
    type: HIDE_SUCCESS_MESSAGE
  }
}

export function hideErrorMessage() {
  return {
    type: HIDE_ERROR_MESSAGE
  }
}
