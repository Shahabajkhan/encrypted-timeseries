import SuccessFailureModel from "../../models/SuccessFailureModel";
import {
  SUCCESS_FAILURE,
  TIMESTAMP_SUCCESS_FAILURE,
  USER_SUCCESS_FAILURE,
} from "../../constants/TimeseriesConstants";
import TimestampSuccessFailureModel from "../../models/TimestampSuccessFailureModel";
import UserSuccessFailureModel from "../../models/UserSuccessFailureModel";

export const updateSuccessFailure = ({ err, data }) => {
  return async (dispatch, getState) => {
    if (err) {
      dispatch({
        type: SUCCESS_FAILURE.ERROR,
        err: err,
      });
    } else {
      dispatch({
        type: SUCCESS_FAILURE.UPDATE,
        successFailure: new SuccessFailureModel(data),
      });
    }
  };
};

export const updateTimestampSuccessFailure = ({ err, data }) => {
  return async (dispatch, getState) => {
    if (err) {
      dispatch({
        type: TIMESTAMP_SUCCESS_FAILURE.ERROR,
        err: err,
      });
    } else {
      const timestampSuccessFailures = [];
      for (const timestampSuccessFailure of data) {
        timestampSuccessFailures.push(
          new TimestampSuccessFailureModel(timestampSuccessFailure)
        );
      }
      dispatch({
        type: TIMESTAMP_SUCCESS_FAILURE.UPDATE,
        timestampSuccessFailures: timestampSuccessFailures,
      });
    }
  };
};

export const updateUserSuccessFailure = ({ err, data }) => {
  return async (dispatch, getState) => {
    if (err) {
      dispatch({
        type: USER_SUCCESS_FAILURE.ERROR,
        err: err,
      });
    } else {
      const userSuccessFailures = [];
      for (const userSuccessFailure of data) {
        userSuccessFailures.push(
          new UserSuccessFailureModel(userSuccessFailure)
        );
      }
      dispatch({
        type: USER_SUCCESS_FAILURE.UPDATE,
        userSuccessFailures: userSuccessFailures,
      });
    }
  };
};
