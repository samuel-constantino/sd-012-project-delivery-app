import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Grid, Typography, Paper } from '@mui/material';

export default function StatusBar(props) {
  const { status, saleId, saleDate } = props;

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
  const dataTestIds = {
    orderId: `seller_order_details__element-order-details-label-order-${saleId}`,
    deliveryStatus: 'seller_order_details__element-order-details-label-delivery-status',
    orderDate: 'seller_order_details__element-order-details-label-order-date',
  };

  return (
    <Paper elevation={ 3 } sx={ { padding: '30px 0' } }>
      <Grid { ...gridContainer }>
        <Grid { ...common } xs={ 3 }>
          <Typography
            data-testid={ dataTestIds.orderId }
          >
            {`Pedido: ${saleId}`}
          </Typography>
        </Grid>
        <Grid { ...common } xs={ 3 }>
          <Typography
            data-testid={ dataTestIds.orderDate }
          >
            {`Data: ${date}`}
          </Typography>
        </Grid>
        <Grid { ...common } xs={ 3 }>
          <Typography
            data-testid={ dataTestIds.deliveryStatus }
          >
            {`Status: ${status}`}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

StatusBar.propTypes = {
  status: PropTypes.string,
  saleId: PropTypes.number,
  saleDate: PropTypes.string,
}.isRequired;
