import React from 'react';
import { Box, Container, Paper } from '@mui/material';
import Product from './Product';
import ProductsTitle from './ProductsTitle';

export default function Checkout() {
  const total = {
    item: 34,
    quantity: 4,
    unitValue: 3.5,
    description: 'Breja do jao',
  };

  return (
    <Container>
      <Paper elevation={ 6 } sx={ { margin: '10px 0' } }>
        <Box p={ 4 }>
          <ProductsTitle />
          <Product { ...total } />
          <Product { ...total } />
          <Product { ...total } />
        </Box>
      </Paper>
    </Container>
  );
}
