import * as actionTypes from '../constants/actionTypes';

const initialState = {
  isAgree: false,
};

// edit this
const takeExamAgreement = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TAKE_EXAM_AGREEMENT_CLICK_CHECKBOX:
      return {
        ...state,
        isAgree: action.payload.isAgree,
      };
    case actionTypes.TAKE_EXAM_AGREEMENT_START_EXAM_REQUEST:
      return {
        ...state,
        // nothing to update to state yet
      };
    case actionTypes.TAKE_EXAM_AGREEMENT_START_EXAM_FAILURE:
      return {
        ...state,
        messege: action.payload.messege,
      };
    case actionTypes.TAKE_EXAM_AGREEMENT_START_EXAM_SUCCESS:
      return {
        ...state,
        messege: action.payload.messege,
      };
    default:
      return state;
  }
};

export default takeExamAgreement;
