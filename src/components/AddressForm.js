import React from 'react';
import {
  TextField,
  Grid,
  Typography
} from '@material-ui/core';

const AddressForm = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="First Name"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Last Name"
            fullWidth 
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Address Line1"
            fullWidth 
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Address Line2"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="City"
            fullWidth 
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="State/Province/Region"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Zip/Postal Code"
            fullWidth 
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Country"
            fullWidth 
            required
          />
        </Grid> 
      </Grid>
    </React.Fragment>
  )
}

export default AddressForm;