import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Typography } from '@mui/material';

export default function Product(props) {
  const { item, productName, quantity, price } = props;

  const gridContainer = {
    container: true,
    // xs: 12,
    sx: {
      justifyContent: 'center',
      alignItems: 'stretch',
      height: '40px',
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

  const item1 = { ...common, sx: { ...common.sx, backgroundColor: '#f99' } };
  const item2 = { ...common, sx: { ...common.sx, backgroundColor: '#ff9' } };
  const item3 = { ...common, sx: { ...common.sx, backgroundColor: '#9f9' } };
  const item4 = { ...common, sx: { ...common.sx, backgroundColor: '#9ff' } };
  const item5 = { ...common, sx: { ...common.sx, backgroundColor: '#99f' } };

  const dataTestIds = {
    item: `seller_order_details__element-order-table-item-number-${item}`,
    name: `seller_order_details__element-order-table-name-${item}`,
    quantity: `seller_order_details__element-order-table-quantity-${item}`,
    unitPrice: `seller_order_details__element-order-table-unit-price-${item}`,
    subTotal: `seller_order_details__element-order-table-sub-total-${item}`,
  };

  return (
    <Paper elevation={ 3 }>
      <Grid { ...gridContainer }>
        <Grid { ...item1 } xs={ 1 }>
          <Typography
            data-testid={ dataTestIds.item }
          >
            {item}
          </Typography>
        </Grid>
        <Grid { ...item2 } xs={ 5 }>
          <Typography
            data-testid={ dataTestIds.name }
          >
            {productName}
          </Typography>
        </Grid>
        <Grid { ...item3 } xs={ 2 }>
          <Typography
            data-testid={ dataTestIds.quantity }
          >
            {quantity}
          </Typography>
        </Grid>
        <Grid { ...item4 } xs={ 2 }>
          <Typography
            data-testid={ dataTestIds.unitPrice }
          >
            {`R$ ${Number(price)}`}
          </Typography>
        </Grid>
        <Grid { ...item5 } xs={ 2 }>
          <Typography
            data-testid={ dataTestIds.subTotal }
          >
            {`R$ ${(Number(price) * quantity).toFixed(2)}`}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

Product.propTypes = {
  item: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
};
