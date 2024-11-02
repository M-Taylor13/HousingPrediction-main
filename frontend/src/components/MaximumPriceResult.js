// src/components/MaximumPriceResult.js
import React from 'react';
import { Typography } from '@mui/material';

function MaximumPriceResult({ predictedPrice, error }) {
  return (
    <>
      {predictedPrice !== null && (
        <Typography variant="h5" gutterBottom sx={{ 
            color: 'green', // Change color as needed
            fontWeight: 'bold', // Make it bold
            fontSize: '1.5rem', // Adjust font size
            marginTop: '20px', // Add some space above
            textAlign: 'center' // Center the text
          }}  className='predicted-price'>
          Predicted Price: ${predictedPrice}
        </Typography>
      )}
      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}
    </>
  );
}

export default MaximumPriceResult;