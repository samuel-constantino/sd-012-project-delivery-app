import React, { useState } from 'react';
import { Box, Container, Paper, Stack, Chip, Button, Typography } from '@mui/material';
import { useGlobalState } from '../../../Provider';
import Product from './Product';
import ProductsTitle from './ProductsTitle';
import DeliveryDetails from './DeliveryDetails';
// import api from '../../../Services/api';
import EndDialog from './EndDialog';

export default function Checkout() {
  // State
  const { checkoutCart, setCheckoutCart } = useGlobalState();
  const { deliveryDetails } = useGlobalState();
  const [showDialog, setShowDialog] = useState(false);

  // Handlers
  const handleSubmit = async () => {
    const customerOrder = { products: checkoutCart, deliveryDetails };
    // const res = await api.get('seller/sellers');
    setShowDialog(true);
    console.log('📺🐛 ', customerOrder);
  };
  const handleDelete = (productIndex) => {
    const updatedCheckoutCart = checkoutCart.filter(
      (_, index) => productIndex !== index,
    );
    setCheckoutCart(updatedCheckoutCart);
  };

  // Render functions
  const renderProducts = () => checkoutCart.map((product, index) => {
    const props = {
      ...product,
      item: index + 1,
      handleDelete: () => handleDelete(index),
    };
    return <Product key={ index } { ...props } />;
  });
  const renderChip = () => {
    const total = checkoutCart.reduce(
      (prev, curr) => prev + (curr.price * curr.quantity), 0,
    );
    return (
      <Stack direction="row" justifyContent="flex-end" marginTop={ 5 }>
        <Chip color="secondary" label={ `Total: R$ ${total}` } />
      </Stack>);
  };

  // Packaging
  const SubmitBtnPkg = {
    variant: 'contained',
    size: 'large',
    onClick: handleSubmit,
  };
  const typographyPkg = {
    sx: { margin: '0 0 30px 0' },
    variant: 'h5',
  };
  const endDialogPkg = {
    showDialog,
    setShowDialog,
  };

  return (
    <Container>
      <Paper elevation={ 6 } sx={ { margin: '10px 0' } }>
        <Box px={ 4 } py={ 6 }>
          <ProductsTitle />
          { renderProducts() }
          { renderChip() }
        </Box>
      </Paper>
      <Paper elevation={ 6 } sx={ { margin: '10px 0' } }>
        <Box px={ 4 } py={ 10 }>
          <Typography { ...typographyPkg }>
            Detalhes e endereço para entrega
          </Typography>
          <DeliveryDetails />
        </Box>
      </Paper>
      <Button { ...SubmitBtnPkg }>finalizar pedido</Button>
      <EndDialog { ...endDialogPkg } />
    </Container>
  );
}
