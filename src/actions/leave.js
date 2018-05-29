import * as actionTypes from '../constants/actionTypes';

export const createLeaveRequest = (form, resolve, reject) => ({
  type: actionTypes.LEAVE_CREATE_REQUEST,
  payload: {
    form,
    resolve,
    reject
  }
});

export const createLeaveSuccess = leaves => ({
  type: actionTypes.LEAVE_CREATE_SUCCESS,
  payload: {
    leaves
  }
});

export const createLeaveFailure = message => ({
  type: actionTypes.LEAVE_CREATE_FAILURE,
  payload: {
    message
  }
});

export const fetchLeaveRequest = () => ({
  type: actionTypes.LEAVE_FETCH_REQUEST
});

export const fetchLeaveSuccess = leaves => ({
  type: actionTypes.LEAVE_FETCH_SUCCESS,
  payload: {
    leaves
  }
});

export const fetchLeaveFailure = message => ({
  type: actionTypes.LEAVE_FETCH_SUCCESS,
  payload: {
    message
  }
});
