import React from "react";
import { ResponsiveContainer, PieChart, Pie, Legend, Tooltip } from "recharts";

const PieChartComponent = ({ width, height, data }) => {
  return (
    <div style={{ width: width, height: height }}>
      <ResponsiveContainer>
        <PieChart width={width} height={height}>
          <Tooltip />
          <Legend />
          <Pie dataKey="value" data={data} fill="#8884d8" label />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
