import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Paper, Stack, Button } from '@mui/material';
import io from 'socket.io-client';
import Product from './Product';
import ProductsTitle from './ProductsTitle';
import StatusBar from './StatusBar';
import NavBar from '../../../Components/Navbar';
import api from '../../../Services/api';
import { useGlobalState } from '../../../Provider';

const socket = io('http://localhost:3001');

export default function OrderDetails() {
  // State
  const [order, setOrder] = useState(
    {
      seller: { name: '' },
      id: '',
      status: '',
      saleDate: '',
      products: [],

    },
  );
  const [status, setStatus] = useState('Pendente');
  const { totalPrice } = useGlobalState();
  const { id: idParam } = useParams();

  // Loads sellers list
  useEffect(() => {
    (async () => {
      const { data } = await api.get(`customer/orders/${idParam}`);
      setOrder(data.sale);
      setStatus(order.status);
    })();
  }, [idParam, order.status]);

  // Destructuring
  const { id: orderId, seller: { name }, saleDate, products } = order;
  const statusBar = { status, orderId, name, saleDate };

  // Socket
  const statusUpdate = (statusMessage) => {
    socket.emit('statusUpdate', { statusMessage, saleId: orderId });
  };

  const onStatusUpdate = ({ statusMessage }) => {
    setStatus(statusMessage);
  };

  socket.on('statusUpdate', onStatusUpdate);

  // DataTestIds
  const testTotal = 'customer_order_details__element-order-total-price';
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

  const renderChip = () => (
    <Stack direction="row" justifyContent="flex-end" marginTop={ 5 }>
      <div>
        Total: R$
        <span data-testid={ testTotal }>
          {totalPrice.toFixed(2).toString().replace('.', ',')}
        </span>
      </div>
    </Stack>
  );

  return (
    <>
      <NavBar />
      <Container>
        <StatusBar { ...statusBar } />
        <Paper elevation={ 6 }>
          <Box px={ 4 } py={ 6 }>
            <ProductsTitle />
            {order.products ? renderProducts() : <h1>loading</h1>}
            {renderChip()}
          </Box>
        </Paper>
        <Button
          data-testid={ testBtn }
          variant="contained"
          disabled={ statusBar.status !== 'Em Trânsito' }
          onClick={ () => statusUpdate('Entregue') }
          style={ { position: 'fixed' } }
        >
          marcar como entregue
        </Button>
      </Container>
    </>
  );
}
