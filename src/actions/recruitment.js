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

export const fetchRecruitmentMessege = messege => ({
  type: actionTypes.RECRUITMENT_FETCH_MESSEGE,
  payload: {
    messege
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

export const generatePasswordRequest = (cid, passwordLifetimes) => ({
  type: actionTypes.RECRUITMENT_GENERATE_PASSWORD_REQUEST,
  payload: {
    cid,
    passwordLifetimes,
  }
});

export const generatePasswordSuccess = messege => ({
  type: actionTypes.RECRUITMENT_GENERATE_PASSWORD_SUCCESS,
  payload: {
    messege,
  }
});

export const generatePasswordFailure = error => ({
  type: actionTypes.RECRUITMENT_GENERATE_PASSWORD_FAILURE,
  payload: {
    error,
  }
});

export const checkPasswordStatusRequest = cid => ({
  type: actionTypes.RECRUITMENT_CHECK_PASSWORD_STATUS_REQUEST,
  payload: {
    cid,
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