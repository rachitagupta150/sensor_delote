// src/components/LatencyGraph.js
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import generateLatencyData from '../data/LatencyData';
import './SensorGraph.css';

const LatencyGraph = () => {
  const [timeRange, setTimeRange] = useState('3hr');

  const handleTimeRangeChange = (range) => {
    setTimeRange(range);
  };

  const labels = generateLatencyData(timeRange).map(d => d.time);
  const dataPoints = generateLatencyData(timeRange).map(d => d.latency);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Latency (ms)',
        data: dataPoints,
        borderColor: 'rgba(767, 72, 692, 89)',
        fill: false,
      },
    ],
  };

  return (
    <div className="sensor-graph-container graph-half-width graph-height-medium">
      <h2 className="title">Latency Sensor Data Visualization</h2>
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

export default LatencyGraph;
