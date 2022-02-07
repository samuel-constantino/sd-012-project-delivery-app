import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Paper, Button, Container, Stack, Chip } from '@mui/material';
import io from 'socket.io-client';
import Product from './Product';
import ProductsTitle from './ProductsTitle';
import StatusBar from './StatusBar';
import NavBar from '../../../Components/Navbar';
import api from '../../../Services/api';

const socket = io('http://localhost:3001');

export default function SaleDetails() {
  // State
  const [status, setStatus] = useState('Pendente');
  const [sale, setSale] = useState({
    id: '',
    saleDate: '',
    products: [],
  });

  const { id } = useParams();

  // Loads seller sale
  const getSale = useCallback(async () => {
    const { data } = await api.get(`seller/orders/${id}`);
    setSale(data.sale);
    setStatus(data.sale.status);
  }, [id]);

  useEffect(() => getSale(), [getSale]);

  // Destructuring
  const { id: saleId, saleDate, products } = sale;

  // Socket
  const statusUpdate = (statusMessage) => {
    socket.emit('statusUpdate', { statusMessage, saleId });
  };

  const onStatusUpdate = ({ statusMessage }) => {
    setStatus(statusMessage);
  };

  socket.on('statusUpdate', onStatusUpdate);

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
        <Chip
          color="secondary"
          label={ `${total.toFixed(2).replace('.', ',')}` }
          data-testid="seller_order_details__element-order-total-price"
        />
      </Stack>);
  };

  // DataTestIds
  const dataTestIds = {
    preparing: 'seller_order_details__button-preparing-check',
    dispatch: 'seller_order_details__button-dispatch-check',
  };

  // Packaging
  const statusBar = { status, saleId, saleDate };

  return (
    <>
      <NavBar />
      <Container>
        <StatusBar { ...statusBar } />
        <Paper elevation={ 6 }>
          <Box px={ 4 } py={ 6 }>
            <ProductsTitle />
            {renderProducts()}
            {renderChip()}
          </Box>
        </Paper>

        <Button
          variant="contained"
          data-testid={ dataTestIds.preparing }
          disabled={ statusBar.status !== 'Pendente' }
          onClick={ () => statusUpdate('Preparando') }
        >
          preparar pedido
        </Button>
        <Button
          variant="contained"
          data-testid={ dataTestIds.dispatch }
          disabled={ statusBar.status !== 'Preparando' }
          onClick={ () => statusUpdate('Em Trânsito') }
          sx={ { position: 'fixed' } }
        >
          saiu para entrega
        </Button>
      </Container>
    </>
  );
}
