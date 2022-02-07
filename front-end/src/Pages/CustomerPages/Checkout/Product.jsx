import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Typography, Button } from '@mui/material';

export default function Product(props) {
  const { item, name, quantity, price, handleDelete } = props;

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

  const ind = item - 1;

  return (
    <Paper elevation={ 3 } sx={ { margin: '10px 0' } }>
      <Grid { ...gridContainer }>
        <Grid { ...item1 } xs={ 0.8 }>
          <Typography
            data-testid={ `customer_checkout__element-order-table-item-number-${ind}` }
          >
            {item}
          </Typography>
        </Grid>
        <Grid { ...item2 } xs={ 4.6 }>
          <Typography
            data-testid={ `customer_checkout__element-order-table-name-${ind}` }
          >
            {name}
          </Typography>
        </Grid>
        <Grid { ...item3 } xs={ 1.7 }>
          <Typography
            data-testid={ `customer_checkout__element-order-table-quantity-${ind}` }
          >
            {quantity}
          </Typography>
        </Grid>
        <Grid { ...item4 } xs={ 1.7 }>
          <Typography
            data-testid={ `customer_checkout__element-order-table-unit-price-${ind}` }
          >
            {`R$ ${(+price).toFixed(2).replace('.', ',')}`}
          </Typography>
        </Grid>
        <Grid { ...item5 } xs={ 1.7 }>
          <Typography
            data-testid={ `customer_checkout__element-order-table-sub-total-${ind}` }
          >
            {`R$ ${(+price * +quantity).toFixed(2).replace('.', ',')}`}
          </Typography>
        </Grid>
        <Grid { ...common } xs={ 1.5 }>
          <Button
            data-testid={ `customer_checkout__element-order-table-remove-${ind}` }
            onClick={ handleDelete }
          >
            Remover
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

Product.propTypes = {
  item: PropTypes.number,
  name: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
  handleDelete: PropTypes.func,
}.isRequired;
