import SuccessFailure from "./SuccessFailureModel";

class TimestampSuccessFailureModel {
  constructor({ _id, success, failure }) {
    this.timestamp = new Date(_id);
    this.successFailure = new SuccessFailure({ success, failure });
  }
}

export default TimestampSuccessFailureModel;
