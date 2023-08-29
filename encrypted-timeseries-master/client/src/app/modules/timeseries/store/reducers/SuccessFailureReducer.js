import {
  SUCCESS_FAILURE,
  TIMESTAMP_SUCCESS_FAILURE,
  USER_SUCCESS_FAILURE,
} from "../../constants/TimeseriesConstants";

const initialState = {
  successFailureLoading: false,
  timestampSuccessFailuresLoading: false,
  userSuccessFailuresLoading: false,
  error: false,
  successFailure: null,
  timestampSuccessFailures: [],
  userSuccessFailures: [],
  err: null,
};

const SuccessFailureReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_FAILURE.REQUESTED:
      return {
        ...state,
        successFailureLoading: true,
        error: false,
      };

    case TIMESTAMP_SUCCESS_FAILURE.REQUESTED:
      return {
        ...state,
        timestampSuccessFailuresLoading: true,
        error: false,
      };

    case USER_SUCCESS_FAILURE.REQUESTED:
      return {
        ...state,
        userSuccessFailuresLoading: true,
        error: false,
      };

    case SUCCESS_FAILURE.FETCHED:
    case SUCCESS_FAILURE.UPDATE:
      return {
        ...state,
        successFailure: action.successFailure,
        successFailureLoading: false,
        error: false,
      };

    case TIMESTAMP_SUCCESS_FAILURE.FETCHED:
    case TIMESTAMP_SUCCESS_FAILURE.UPDATE:
      return {
        ...state,
        timestampSuccessFailures: action.timestampSuccessFailures,
        timestampSuccessFailuresLoading: false,
        error: false,
      };

    case USER_SUCCESS_FAILURE.FETCHED:
    case USER_SUCCESS_FAILURE.UPDATE:
      return {
        ...state,
        userSuccessFailures: action.userSuccessFailures,
        userSuccessFailuresLoading: false,
        error: false,
      };

    case SUCCESS_FAILURE.ERROR:
    case USER_SUCCESS_FAILURE.ERROR:
    case TIMESTAMP_SUCCESS_FAILURE.ERROR:
      return {
        ...state,
        successFailureLoading: false,
        timestampSuccessFailuresLoading: false,
        userSuccessFailuresLoading: false,
        error: true,
        err: action.err,
      };
    default:
      return state;
  }
};

export default SuccessFailureReducer;
