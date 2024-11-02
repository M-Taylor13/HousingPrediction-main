// src/components/LiveableResult.js
import React from 'react';
import { Paper, Typography } from '@mui/material';

function LiveableResult({ prediction, error }) {
  return (
    <>
      {prediction && (
        <Paper elevation={3} sx={{ p: 3, mt: 2 }}>
          <Typography variant="h5" gutterBottom>
            This suburb is {prediction}, based on the statistic in 10 years from 2002 to 2020.
          </Typography>
        </Paper>
      )}
      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}
    </>
  );
}

export default LiveableResult;