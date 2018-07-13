import * as actionTypes from '../constants/actionTypes';

export const fetchRecruitmentRequest = () => ({
  type: actionTypes.RECRUITMENT_FETCH_REQUEST,
  payload: {}
});

export const fetchRecruitmentSuccess = recruitments => ({
  type: actionTypes.RECRUITMENT_FETCH_SUCCESS,
  payload: {
    recruitments
  }
});

export const fetchRecruitmentFailure = message => ({
  type: actionTypes.RECRUITMENT_FETCH_FAILURE,
  payload: {
    message
  }
});

export const filterRecruitment = searchText => ({
  type: actionTypes.FILTER_RECRUITMENT,
  payload: {
    searchText
  }
});

export const filterStartDateRecruitment = startDate => ({
  type: actionTypes.FILTER_START_DATE_RECRUITMENT,
  payload: {
    startDate
  }
});

export const filterEndDateRecruitment = endDate => ({
  type: actionTypes.FILTER_END_DATE_RECRUITMENT,
  payload: {
    endDate
  }
});

export const sortRecruitment = (sortKey, direction) => ({
  type: actionTypes.SORT_RECRUITMENT,
  payload: {
    sortKey,
    direction
  }
});

export const activatePasswordRequest = (id, activationLifetimes) => ({
  type: actionTypes.RECRUITMENT_ACTIVATE_REQUEST,
  payload: {
    id,
    activationLifetimes,
  }
});

export const activatePasswordSuccess = message => ({
  type: actionTypes.RECRUITMENT_ACTIVATE_SUCCESS,
  payload: {
    message,
  }
});

export const activatePasswordFailure = error => ({
  type: actionTypes.RECRUITMENT_ACTIVATE_FAILURE,
  payload: {
    error,
  }
});

export const checkPasswordStatusRequest = id => ({
  type: actionTypes.RECRUITMENT_CHECK_PASSWORD_STATUS_REQUEST,
  payload: {
    id,
  }
});

export const checkPasswordStatusSuccess = passwordObject => ({
  type: actionTypes.RECRUITMENT_CHECK_PASSWORD_STATUS_SUCCESS,
  payload: {
    passwordObject,
  }
});

export const checkPasswordStatusFailure = error => ({
  type: actionTypes.RECRUITMENT_CHECK_PASSWORD_STATUS_FAILURE,
  payload: {
    error,
  }
});

export const updateUserStatus = (status, statusCode) => ({
  type: actionTypes.RECRUITMENT_UPDATE_USER_STATUS,
  payload: {
    userStatus: status,
    userStatusCode: statusCode,
  }
});

export const updateLifetimesValue = lifetimesValue => ({
  type: actionTypes.RECRUITMENT_UPDATE_LIFETIMES_VALUE,
  payload: {
    lifetimesValue,
  }
});

export const updateLifetimesUnit = lifetimesUnit => ({
  type: actionTypes.RECRUITMENT_UPDATE_LIFETIMES_UNIT,
  payload: {
    lifetimesUnit,
  }
});

export const randomExam = id => ({
  type: actionTypes.RECRUITMENT_RANDOM_EXAM,
  payload: {
    id,
  }
});

export const evaluateExam = (id, testDate) => ({
  type: actionTypes.VIEW_RESULT_EVALUATE_EXAM,
  payload: {
    id,
    testDate,
  }
});

export const fetchResultSuccess = examList => ({
  type: actionTypes.VIEW_RESULT_FETCH_SUCCESS,
  payload: {
    examList,
  }
});

export const fetchResultFailure = message => ({
  type: actionTypes.VIEW_RESULT_FETCH_FAILURE,
  payload: {
    message,
  }
});
