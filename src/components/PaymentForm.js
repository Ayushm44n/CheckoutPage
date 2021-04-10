import React from 'react';
import {
  TextField,
  Typography,
  Grid,
  Paper
} from '@material-ui/core';

const PaymentForm = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>Payment Method</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField 
            label="Name on card"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            label="Card number"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            label="Expiry date"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            label="CVV"
            fullWidth
            required
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default PaymentForm;