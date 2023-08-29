import SuccessFailure from "./SuccessFailureModel";

class UserSuccessFailureModel {
  constructor({ _id, success, failure }) {
    this.name = _id;
    this.successFailure = new SuccessFailure({ success, failure });
  }
}

export default UserSuccessFailureModel;
