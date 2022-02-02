import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Typography } from '@mui/material';

export default function Product(props) {
  const { item = '', productName = '', quantity = 0, price = '' } = props;

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

  return (
    <Paper elevation={ 3 } sx={ { margin: '10px 0' } }>
      <Grid { ...gridContainer }>
        <Grid { ...item1 } xs={ 1 }>
          <Typography>{item}</Typography>
        </Grid>
        <Grid { ...item2 } xs={ 5 }>
          <Typography>{productName}</Typography>
        </Grid>
        <Grid { ...item3 } xs={ 2 }>
          <Typography>{quantity}</Typography>
        </Grid>
        <Grid { ...item4 } xs={ 2 }>
          <Typography>{`R$ ${Number(price).toFixed(2)}`}</Typography>
        </Grid>
        <Grid { ...item5 } xs={ 2 }>
          <Typography>{`R$ ${(Number(price) * quantity).toFixed(2)}`}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

Product.propTypes = {
  item: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
