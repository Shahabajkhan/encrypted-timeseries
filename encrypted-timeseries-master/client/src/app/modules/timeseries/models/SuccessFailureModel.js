class SuccessFailure {
  constructor({ success, failure }) {
    this.success = success;
    this.failure = failure;
    this.data = [
      { name: "Success", value: success, fill: "#00C07F" },
      { name: "Failure", value: failure, fill: "#FF6562" },
    ];
  }
}

export default SuccessFailure;
