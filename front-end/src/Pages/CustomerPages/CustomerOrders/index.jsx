import React, { useState, useEffect } from 'react';
import { Grid, Container } from '@mui/material';
import Order from './Order';
import api from '../../../Services/api';
import NavBar from '../../../Components/Navbar';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  // Loads sellers list
  useEffect(() => {
    const loadOrders = async () => {
      const res = await api.get('customer/orders');
      const list = res.data.sales;
      setOrders(list);
    };
    loadOrders();
  }, []);

  // Render functions
  const renderProducts = () => orders.map((order, index) => (
    <Order key={ index } { ...order } />
  ));

  return (
    <>
      <NavBar />
      <Container>
        <Grid container>
          { renderProducts() }
        </Grid>
      </Container>
    </>
  );
}
