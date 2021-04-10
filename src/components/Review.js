import React from 'react';
import {
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Grid,
  makeStyles
} from '@material-ui/core';

const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

const orders = [{
    title: 'Product 1',
    description: 'A nice thing',
    amount: '$9.99'
  },
  {
    title: 'Product 2',
    description: 'Another thing',
    amount: '$3.45'
  },
  {
    title: 'Product 3',
    description: 'Something else',
    amount: '$6.51'
  },
  {
    title: 'Product 4',
    description: 'Best thing of all',
    amount: '$14.11'
  }
];

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(2)
  }
}))

const Review = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>Order Summary</Typography>
      <List>
        {orders.map((order) => (
          <ListItem alignItems="flex-start">
            <ListItemText 
              primary={order.title}
              secondary={order.description}
            />
            <Typography variant="body2">{order.amount}</Typography>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Grid containers spacing={3}>
        <Grid item xs={12}>
          <Typography gutterBottom className={classes.title} variant="h6">Shipping Details</Typography>
          <Typography gutterBottom variant="subtitle1">John Smith</Typography>
          <Typography gutterBottom variant="body1">1 Material-UI Drive, Reactville, Anytown, 99999, USA</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography gutterBottom className={classes.title} variant="h6">Payment Details</Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Review;