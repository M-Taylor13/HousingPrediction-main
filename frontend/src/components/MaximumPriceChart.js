// src/components/MaximumPriceChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Scatter, ScatterChart } from 'recharts';

function MaximumPriceChart({ curveData, maxPriceData, predictedPoint }) {
  
  // Prepare combined data for charting.
  const combinedData = [
    ...maxPriceData,
    ...(predictedPoint ? predictedPoint : [])
  ].sort((a, b) => parseFloat(a.Distance) - parseFloat(b.Distance));

  // Add color property to each point for visualization purposes.
  const coloredData = combinedData.map(point => ({
    ...point,
    color: point.Price === predictedPoint[0].Price ? 'yellow' : 'red'
  }));


  
  const formatXAxis = (tickItem) => {
    return tickItem.toFixed(2); // Round to 2 decimal places.
  };

  return (
    <div className="chart2-container">
      <div className='chart'>
        {/* Line Chart for Curve Data */}
        <LineChart width={600} height={400} data={curveData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="Distance" tickFormatter={formatXAxis}/>
          <YAxis />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          
          {/* Black curve representing the prediction model */}
          <Line type="monotone" dataKey="Price" stroke="black" dot={false} />
          
          {/* Scatter plot for combined data */}
          
        </LineChart>
      </div>
      
      <div className='chart'>
        {/* Scatter Chart for Combined Data */}
        <ScatterChart width={600} height={400} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Distance" name="Distance" />
          <YAxis dataKey="Price" name="Price" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />

          <Scatter 
            name="Combined Data" 
            data={coloredData} 
            shape={(props) => (
              <circle cx={props.cx} cy={props.cy} r={props.color === 'yellow' ? 8 : 4} fill={props.color} />
            )}
          />
        </ScatterChart>
      </div>
      
    </div>
  );
}

export default MaximumPriceChart; 