// src/components/MotionGraph.js
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
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
import generateMotionData from '../data/MotionData'; 
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

const MotionGraph = () => {
  const [timeRange, setTimeRange] = useState('3hr');

  const labels = generateMotionData(timeRange).map(d => d.time);
  const dataPoints = generateMotionData(timeRange).map(d => d.intensity);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Motion Intensity',
        data: dataPoints,
        borderColor: 'rgba(255, 159, 64, 1)',
        fill: false,
      },
    ],
  };

  return (
    <div className="sensor-graph-container graph-half-width graph-height-medium">
      <h2 className="title">Motion Sensor Data Visualization</h2>
      <div className="button-group">
        <button onClick={() => setTimeRange('3hr')}>3 Hours</button>
        <button onClick={() => setTimeRange('24hr')}>24 Hours</button>
        <button onClick={() => setTimeRange('7days')}>7 Days</button>
        <button onClick={() => setTimeRange('30days')}>30 Days</button>
        <button onClick={() => setTimeRange('1year')}>1 Year</button>
      </div>
      <Line data={data} />
    </div>
  );
};

export default MotionGraph;
