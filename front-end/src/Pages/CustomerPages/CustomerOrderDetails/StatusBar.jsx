import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Grid, Typography, Paper } from '@mui/material';

export default function StatusBar(props) {
  const { status, orderId, saleDate, name } = props;

  const date = moment(new Date(saleDate)).format('DD/MM/YY');

  const gridContainer = {
    container: true,
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

  return (
    <Paper elevation={ 3 } sx={ { padding: '30px 0' } }>
      <Grid { ...gridContainer }>
        <Grid { ...common } xs={ 3 }>
          <Typography>{`Pedido: ${orderId}`}</Typography>
        </Grid>
        <Grid { ...common } xs={ 3 }>
          <Typography>{`Vendedor(a): ${name}`}</Typography>
        </Grid>
        <Grid { ...common } xs={ 3 }>
          <Typography>{`Data: ${date}`}</Typography>
        </Grid>
        <Grid { ...common } xs={ 3 }>
          <Typography>{`Status: ${status}`}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

StatusBar.propTypes = {
  status: PropTypes.string.isRequired,
  orderId: PropTypes.number.isRequired,
  saleDate: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
