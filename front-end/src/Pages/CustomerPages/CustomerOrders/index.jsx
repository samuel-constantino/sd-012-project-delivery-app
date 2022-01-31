import React from 'react';
import { Grid, Container } from '@mui/material';
import Order from './Order';

export default function Orders() {
  return (
    <Container>
      <Grid container>
        <Order />
        <Order />
        <Order />
        <Order />
      </Grid>
    </Container>
  );
}
