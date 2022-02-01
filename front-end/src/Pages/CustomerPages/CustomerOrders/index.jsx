import React, { useState, useEffect } from 'react';
import { Grid, Container } from '@mui/material';
import Order from './Order';
import api from '../../../Services/api';

export default function Orders() {
  const [orders, setOrders] = useState([
    { status: 'Pendente', orderId: '13', date: '1/1/22', cost: 0 },
  ]);

  // Loads sellers list
  useEffect(() => {
    const loadOrders = async () => {
      const res = await api.get('ROTA');
      const list = res.data;
      setOrders(list);
    };
    loadOrders();
  });

  // Render functions
  const renderProducts = () => orders.map((order, index) => (
    <Order key={ index } { ...order } />
  ));

  return (
    <Container>
      <Grid container>
        { renderProducts() }
      </Grid>
    </Container>
  );
}
