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

  const testItem = `customer_order_details__element-order-table-item-number${item - 1}-`;
  const testDescription = `customer_order_details__element-order-table-name-${item - 1}`;
  const testQuantity = `customer_order_details__element-order-table-quantity-${item - 1}`;
  const testSub = `customer_order_details__element-order-table-sub-total-${item - 1}`;
  const testPrice = `customer_order_details__element-order-table-unit-price-${item - 1}`;

  return (
    <Paper elevation={ 3 } sx={ { margin: '10px 0' } }>
      <Grid { ...gridContainer }>
        <Grid { ...item1 } xs={ 1 }>
          <Typography data-testid={ testItem }>{item}</Typography>
        </Grid>
        <Grid { ...item2 } xs={ 5 }>
          <Typography data-testid={ testDescription }>{productName}</Typography>
        </Grid>
        <Grid { ...item3 } xs={ 2 }>
          <Typography data-testid={ testQuantity }>{quantity}</Typography>
        </Grid>
        <Grid { ...item4 } xs={ 2 }>
          <Typography data-testid={ testPrice }>
            {`R$ ${Number(price).toFixed(2)}`}
          </Typography>
        </Grid>
        <Grid { ...item5 } xs={ 2 }>
          <Typography data-testid={ testSub }>
            {`R$ ${(Number(price) * quantity).toFixed(2)}`}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

Product.propTypes = {
  item: PropTypes.number,
  productName: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
}.isRequired;
