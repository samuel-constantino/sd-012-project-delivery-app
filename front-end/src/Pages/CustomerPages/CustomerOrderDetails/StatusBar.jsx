import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Grid, Typography, Paper } from '@mui/material';

export default function StatusBar(props) {
  const { status, orderId, saleDate, name } = props;

  const date = moment(new Date(saleDate)).format('DD/MM/YY');

  const gridContainer = {
    container: true,
    sx: {
      justifyContent: 'center',
      alignItems: 'stretch',
    },
  };
  const common = {
    container: true,
    item: true,
    sx: {
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
    },
  };

  const testOrderId = 'customer_order_details__element-order-details-label-order-id';
  const testSeller = 'customer_order_details__element-order-details-label-seller-name';
  const testDate = 'customer_order_details__element-order-details-label-order-date';
  const testStat = 'customer_order_details__element-order-details-label-delivery-status';

  return (
    <Paper elevation={ 3 } sx={ { padding: '30px 0' } }>
      <Grid { ...gridContainer }>
        <Grid { ...common } xs={ 3 }>
          <Typography data-testid={ testOrderId }>{`Pedido: ${orderId}`}</Typography>
        </Grid>
        <Grid { ...common } xs={ 3 }>
          <Typography data-testid={ testSeller }>{`Vendedor(a): ${name}`}</Typography>
        </Grid>
        <Grid { ...common } xs={ 3 }>
          <Typography data-testid={ testDate }>{`Data: ${date}`}</Typography>
        </Grid>
        <Grid { ...common } xs={ 3 }>
          <Typography data-testid={ testStat }>{`Status: ${status}`}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

StatusBar.propTypes = {
  status: PropTypes.string,
  orderId: PropTypes.number,
  saleDate: PropTypes.string,
  name: PropTypes.string,
}.isRequired;
