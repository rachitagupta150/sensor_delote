// src/components/SensorGraphs.js
import React from 'react';
import SensorGraph from './components/SensorGraph';
import MotionGraph from './components/Motion';
import LatencyGraph from './components/Latency';
import BatteryGraph from './components/Battery';
import GraphsWrapper from './components/GraphsWrapper';
import './App.css'
const SensorGraphs = () => {
  return (
    <GraphsWrapper>
      
      <SensorGraph />
      <div className="halfbox">
        <MotionGraph className="graph-half-width graph-height-medium" />
        <LatencyGraph className="graph-half-width graph-height-medium" />
      </div>
      <BatteryGraph className="graph-full-width graph-height-large" />
      
    </GraphsWrapper>
  );
};

export default SensorGraphs;
