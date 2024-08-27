// src/components/GraphsWrapper.js
import React from 'react';
import './SensorGraph'; // Import the CSS file

const GraphsWrapper = ({ children }) => {
  return (
    <div className="graphs-container">
      {children}
    </div>
  );
};

export default GraphsWrapper;
