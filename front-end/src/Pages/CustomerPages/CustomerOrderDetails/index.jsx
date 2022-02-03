import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Paper, Stack, Chip, Button } from '@mui/material';
import Product from './Product';
import ProductsTitle from './ProductsTitle';
import StatusBar from './StatusBar';
import NavBar from '../../../Components/Navbar';
import api from '../../../Services/api';

export default function OrderDetails() {
  // State
  const [order, setOrder] = useState(
    {
      sale: {
        seller: { name: '' },
        id: '',
        status: '',
        saleDate: '',
        products: [],
      },
    },
  );

  const params = useParams();

  // Loads sellers list
  useEffect(() => {
    const loadOrder = async () => {
      const res = await api.get(`customer/orders/${params.id}`);
      const sale = res.data;
      setOrder(sale);
    };
    loadOrder();
  }, [params.id]);

  // Destructuring
  const { status, id: orderId, seller: { name }, saleDate, products } = order.sale;
  const statusBar = { status, orderId, name, saleDate };

  const testTotal = 'customer_order_details__element-order-total-price-';
  const testBtn = 'customer_order_details__button-delivery-check';

  // Render functions
  const renderProducts = () => products.map((product, index) => {
    const { SaleProduct, name: productName, price } = product;
    const { quantity } = SaleProduct;
    const props = {
      productName,
      price,
      quantity,
      item: index + 1,
    };
    return <Product key={ index } { ...props } />;
  });
  const renderChip = () => {
    const total = products.reduce((prev, curr) => {
      const price = Number(curr.price);
      const { quantity } = curr.SaleProduct;
      return prev + price * quantity;
    }, 0);
    return (
      <Stack direction="row" justifyContent="flex-end" marginTop={ 5 }>
        <Chip
          data-testid={ testTotal }
          color="secondary"
          label={ `Total: R$ ${total.toFixed(2)}` }
        />
      </Stack>);
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
        <Button data-testid={ testBtn } variant="contained">marcar como entregue</Button>
      </Container>
    </>
  );
}
