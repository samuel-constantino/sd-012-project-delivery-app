import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Paper, Button, Stack, Chip } from '@mui/material';
import Product from './Product';
import ProductsTitle from './ProductsTitle';
import StatusBar from './StatusBar';
import NavBar from '../../../Components/Navbar';
import api from '../../../Services/api';

export default function SaleDetails() {
  // State
  const [sale, setSale] = useState({
    id: '',
    status: '',
    saleData: '',
    products: [],
  });

  const { id } = useParams();

  // Loads seller sale
  const getSale = useCallback(async () => {
    const { data } = await api.get(`seller/orders/${id}`);
    setSale(data.sale);
  }, [id]);

  useEffect(() => getSale(), [getSale]);

  // Destructuring
  const { id: saleId, status, saleDate, products } = sale;
  const statusBar = { status, saleId, saleDate };

  // Render functions
  const renderProducts = () => products.map((product, index) => {
    const { SaleProduct, name: productName, price, id: productId } = product;
    const { quantity } = SaleProduct;
    const props = {
      productName,
      price,
      quantity,
      item: index + 1,
    };
    return <Product key={ productId } { ...props } />;
  });

  const renderChip = () => {
    const total = products.reduce((prev, curr) => {
      const price = Number(curr.price);
      const { quantity } = curr.SaleProduct;
      return prev + price * quantity;
    }, 0);
    return (
      <Stack direction="row" justifyContent="flex-end" marginTop={ 5 }>
        <Chip color="secondary" label={ `Total: R$ ${total.toFixed(2)}` } />
      </Stack>);
  };

  const dataTestIds = {
    preparing: 'seller_order_details__button-preparing-check',
    dispatch: 'seller_order_details__button-dispatch-check',
  };

  return (
    <>
      <NavBar />
      <Container>
        <StatusBar { ...statusBar } />
        <Paper elevation={ 6 } sx={ { margin: '10px 0' } }>
          <Box px={ 4 } py={ 6 }>
            <ProductsTitle />
            { renderProducts() }
            { renderChip() }
          </Box>
        </Paper>
        <Button
          variant="contained"
          data-testid={ dataTestIds.preparing }
        >
          preparar pedido
        </Button>
        <Button
          variant="contained"
          data-testid={ dataTestIds.dispatch }
        >
          saiu para entrega
        </Button>
      </Container>
    </>
  );
}
