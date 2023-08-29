import Socket from "../../../../utils/socket";

export async function SuccessFailure() {
  return new Promise(function (resolve, reject) {
    Socket.on("/success-failure", (err, data) => {
      if (err !== null) reject(err);
      else resolve(data);
    });
  });
}
