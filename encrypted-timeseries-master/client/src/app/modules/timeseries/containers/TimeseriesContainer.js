import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PieChartComponent from "../../shared/components/Graph/PieChart/PieChartComponent";
import Header from "../../shared/components/Header/Header";
import socket from "../../../utils/socket";
import Loader from "../../shared/components/loader/loader";

import * as successFailureActions from "../store/actions/SuccessFailureAction";
import LineChartComponent from "../../shared/components/Graph/LineChart/LineChartComponent";
import BarChartComponent from "../../shared/components/Graph/BarChart/BarChartComponent";

const TimeseriesContainer = (props) => {
  const dispatch = useDispatch();
  const {
    successFailure,
    timestampSuccessFailures,
    userSuccessFailures,
    err,
    error,
  } = useSelector((state) => state.successFailure);

  useEffect(() => {
    socket.emit("timeseries/success-failure:get", "");
    socket.on("timeseries/success-failure", (data) => {
      dispatch(successFailureActions.updateSuccessFailure(data));
    });
    socket.on("timeseries/past-10-timestamp", (data) => {
      dispatch(successFailureActions.updateTimestampSuccessFailure(data));
    });
    socket.on("timeseries/user-success-failure", (data) => {
      dispatch(successFailureActions.updateUserSuccessFailure(data));
    });
  }, [socket, dispatch]);

  if (error) {
    <div>
      <h3>{err.message}</h3>
    </div>;
  }

  return (
    <div>
      <Header />
      <div
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "30%" }}>
          <h2>Success vs Failure</h2>
          {!!successFailure && successFailure.data.length ? (
            <PieChartComponent
              width="70%"
              height={300}
              data={successFailure.data}
            />
          ) : (
            <Loader fullPage={false} />
          )}
        </div>
        <div style={{ width: "70%" }}>
          <h2>Past timestamps </h2>
          {!!timestampSuccessFailures && timestampSuccessFailures.length ? (
            <LineChartComponent
              width="70%"
              height={400}
              data={timestampSuccessFailures}
              dataKey={"timestamp"}
              lineDetails={[
                {
                  type: "monotone",
                  dataKey: "successFailure.success",
                  stackId: 1,
                  stroke: "#00C07F",
                  fill: "#00C07F",
                  name: "Successful",
                },
                {
                  type: "monotone",
                  dataKey: "successFailure.failure",
                  stackId: 1,
                  stroke: "#FF6562",
                  fill: "#FF6562",
                  name: "Failure",
                },
              ]}
            />
          ) : (
            <Loader fullPage={false} />
          )}
        </div>
      </div>
      <div style={{ marginTop: 30 }}>
        <h2>User Success Vs Failure</h2>
        {!!userSuccessFailures && userSuccessFailures.length ? (
          <BarChartComponent
            width={window.innerWidth}
            height={2500}
            data={userSuccessFailures}
            dataKey="name"
            dataKeyOnX={false}
            layout="vertical"
            xAxisType="number"
            yAxisType="category"
            barDetails={[
              {
                dataKey: "successFailure.success",
                stackId: "a",
                stroke: "#00C07F",
                fill: "#00C07F",
                name: "Successful",
              },
              {
                dataKey: "successFailure.failure",
                stackId: "a",
                stroke: "#FF6562",
                fill: "#FF6562",
                name: "Failure",
              },
            ]}
          />
        ) : (
          <Loader fullPage={false} />
        )}
      </div>
    </div>
  );
};

export default TimeseriesContainer;
