import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const BarChartComponent = ({
  width,
  height,
  data,
  dataKey,
  dataKeyOnX = true,
  layout,
  xAxisType,
  yAxisType,
  barDetails,
}) => {
  return (
    <div style={{ width: width, height: height }}>
      <BarChart
        width={width}
        height={height}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        layout={layout}
      >
        <CartesianGrid strokeDasharray="2 2" />
        {dataKeyOnX ? (
          <>
            <XAxis type={xAxisType} dataKey={dataKey} />
            <YAxis type={yAxisType} />
          </>
        ) : (
          <>
            <XAxis type={xAxisType} />
            <YAxis
              type={yAxisType}
              dataKey={dataKey}
              axisLine={false}
              tickLine={false}
              minTickGap={0}
              width={240}
              tick={{ fontSize: 14, markerWidth: 3, width: 240 }}
            />
          </>
        )}
        <Tooltip
          viewBox={{ x: 0, y: 0, width: 400, height: 400 }}
          allowEscapeViewBox={{ x: false, y: false }}
        />
        <Legend />
        {barDetails.map((detail) => (
          <Bar
            key={detail.dataKey}
            dataKey={detail.dataKey}
            stackId={detail.stackId}
            stroke={detail.stroke}
            fill={detail.fill}
            name={detail.name}
          ></Bar>
        ))}
      </BarChart>
    </div>
  );
};

export default BarChartComponent;
