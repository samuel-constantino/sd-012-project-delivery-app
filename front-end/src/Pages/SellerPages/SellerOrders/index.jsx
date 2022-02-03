import React, { useEffect, useState, useCallback } from 'react';
import { Grid, Container } from '@mui/material';
import Sale from './Sale';
import api from '../../../Services/api';
import NavBar from '../../../Components/Navbar';

export default function Sales() {
  const [sales, setSales] = useState([]);

  // Loads seller sales
  const getSales = useCallback(async () => {
    const { data } = await api.get('seller/orders/');
    setSales(data.sales);
  }, []);

  useEffect(() => getSales(), [getSales]);

  // Render functions
  const renderSales = () => sales.map((sale) => (
    <Sale key={ sale.id } { ...sale } />
  ));

  return (
    <>
      <NavBar />
      <Container>
        <Grid container>
          {renderSales()}
        </Grid>
      </Container>
    </>
  );
}
