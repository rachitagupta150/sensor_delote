// src/components/BatteryGraph.js
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import generateBatteryData from '../data/BatteryData';
import './SensorGraph.css';

const BatteryGraph = () => {
  const [timeRange, setTimeRange] = useState('3hr');

  const handleTimeRangeChange = (range) => {
    setTimeRange(range);
  };

  const labels = generateBatteryData(timeRange).map(d => d.time);
  const dataPoints = generateBatteryData(timeRange).map(d => d.batteryLevel);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Battery Level (%)',
        data: dataPoints,
        borderColor: 'rgba(153, 102, 255, 1)',
        fill: false,
      },
    ],
  };

  return (
    <div className="sensor-graph-container graph-full-width graph-height-large">
      <h2 className="title">Battery Sensor Data Visualization</h2>
      <div className="button-group">
        <button onClick={() => handleTimeRangeChange('3hr')}>3 Hours</button>
        <button onClick={() => handleTimeRangeChange('24hr')}>24 Hours</button>
        <button onClick={() => handleTimeRangeChange('7days')}>7 Days</button>
        <button onClick={() => handleTimeRangeChange('30days')}>30 Days</button>
        <button onClick={() => handleTimeRangeChange('1year')}>1 Year</button>
      </div>
      <Line data={data} />
    </div>
  );
};

export default BatteryGraph;
