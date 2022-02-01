import React from 'react';
// import React, { useState } from 'react';
import { Box, Container, Paper, Stack, Chip, Button } from '@mui/material';
// import { useGlobalState } from '../../../Provider';
import Product from './Product';
import ProductsTitle from './ProductsTitle';
import StatusBar from './StatusBar';
// import api from '../../../Services/api';

export default function OrderDetails() {
  // State
  // const { checkoutCart, setCheckoutCart } = useGlobalState();
  // const { deliveryDetails } = useGlobalState();
  // const [setShowDialog] = useState(false);

  const order = { status: 'Pendente', orderId: '13', date: '1/1/22', seller: 'Maria' };
  const products = [
    { name: 'Breja', quantity: 3, price: 6 },
    { name: 'Breja', quantity: 4.5, price: 7.89 },
    { name: 'Breja', quantity: 1, price: 0 },
  ];

  // Render functions
  const renderProducts = () => products.map((product, index) => {
    const props = {
      ...product,
      item: index + 1,
    };
    return <Product key={ index } { ...props } />;
  });
  const renderChip = () => {
    const total = products.reduce(
      (prev, curr) => prev + (curr.price * curr.quantity), 0,
    );
    return (
      <Stack direction="row" justifyContent="flex-end" marginTop={ 5 }>
        <Chip color="secondary" label={ `Total: R$ ${total.toFixed(2)}` } />
      </Stack>);
  };

  return (
    <Container>
      <StatusBar { ...order } />
      <Paper elevation={ 6 } sx={ { margin: '10px 0' } }>
        <Box px={ 4 } py={ 6 }>
          <ProductsTitle />
          { renderProducts() }
          { renderChip() }
        </Box>
      </Paper>
      <Button variant="contained">marcar como entregue</Button>
    </Container>
  );
}
