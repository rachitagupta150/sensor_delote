// src/components/SensorGraph.js
import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import generateSensorData from '../data/sensorData'; 
import './SensorGraph.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SensorGraph = () => {
  const [timeRange, setTimeRange] = useState('3hr');

  const handleTimeRangeChange = (range) => {
    setTimeRange(range);
  };

  const labels = generateSensorData(timeRange).map(d => d.time);
  const dataPoints = generateSensorData(timeRange).map(d => d.downloadSpeed);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Download Speed (Mbps)',
        data: dataPoints,
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };

  return (
    <div className={`sensor-graph-container graph-full-width graph-height-large`}>
      <h2 className="title">Internet Sensor Data Visualization</h2>
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

export default SensorGraph;
