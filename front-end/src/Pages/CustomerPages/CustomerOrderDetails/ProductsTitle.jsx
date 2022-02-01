import React from 'react';
import { Grid, Typography } from '@mui/material';

export default function ProductsTitle() {
  const gridContainer = {
    container: true,
    // xs: 12,
    sx: {
      justifyContent: 'center',
      alignItems: 'stretch',
    },
  };
  const common = {
    container: true,
    item: true,
    sx: {
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
    },
  };

  const item1 = { ...common, sx: { ...common.sx, backgroundColor: '#fff' } };
  const item2 = { ...common, sx: { ...common.sx, backgroundColor: '#fff' } };
  const item3 = { ...common, sx: { ...common.sx, backgroundColor: '#fff' } };
  const item4 = { ...common, sx: { ...common.sx, backgroundColor: '#fff' } };
  const item5 = { ...common, sx: { ...common.sx, backgroundColor: '#fff' } };

  return (
    <Grid { ...gridContainer }>
      <Grid { ...item1 } xs={ 1 }>
        <Typography>Item</Typography>
      </Grid>
      <Grid { ...item2 } xs={ 5 }>
        <Typography>Descrição</Typography>
      </Grid>
      <Grid { ...item3 } xs={ 2 }>
        <Typography>Quantidade</Typography>
      </Grid>
      <Grid { ...item4 } xs={ 2 }>
        <Typography>Preço unitário</Typography>
      </Grid>
      <Grid { ...item5 } xs={ 2 }>
        <Typography>Sub-total</Typography>
      </Grid>
    </Grid>
  );
}
