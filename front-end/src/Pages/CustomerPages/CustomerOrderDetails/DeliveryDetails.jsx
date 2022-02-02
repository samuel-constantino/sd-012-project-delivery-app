import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import {
  Grid,
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from '@mui/material';
import { useGlobalState } from '../../../Provider';
import api from '../../../Services/api';

export default function DeliveryDetails() {
  // State
  const { deliveryDetails, setDeliveryDetails } = useGlobalState();
  const [sellersList, setSellersList] = useState([]);

  // Destructuring
  const { seller = '', address = '', addressNumber = '' } = deliveryDetails;

  // Loads sellers list
  useEffect(() => {
    const loadSellersList = async () => {
      const res = await api.get('ROTA', {});
      const list = res.data;
      setSellersList(list);
    };
    loadSellersList();
  });

  // Handle Changes
  const handleSellerChange = (e) => {
    setDeliveryDetails({ ...deliveryDetails, seller: e.target.value });
  };
  const handleAddressChange = (e) => {
    setDeliveryDetails({ ...deliveryDetails, address: e.target.value });
  };
  const handleAddressNumberChange = (e) => {
    setDeliveryDetails({ ...deliveryDetails, addressNumber: e.target.value });
  };

  // Rendering functions
  const renderSelect = () => {
    const options = sellersList.map((el, index) => (
      <MenuItem value={ el } key={ index }>{ el }</MenuItem>));

    return (
      <FormControl fullWidth>
        <InputLabel>Vendedor Responsável</InputLabel>
        <Select
          value={ seller }
          label="Vendedor Responsável"
          onChange={ handleSellerChange }
        >
          { options }
        </Select>
      </FormControl>
    );
  };

  // Packaging
  const gridContainer = {
    container: true,
    // xs: 12,
    sx: {
      justifyContent: 'center',
      alignItems: 'stretch',
    },
  };
  const addressPkg = {
    label: 'Endereço',
    value: address,
    fullWidth: true,
    onChange: handleAddressChange,
  };
  const addressNumberPkg = {
    label: 'Número',
    type: 'number',
    value: addressNumber,
    fullWidth: true,
    onChange: handleAddressNumberChange,
  };

  return (
    <Grid { ...gridContainer }>
      <Grid item xs={ 4 }>
        { renderSelect() }
      </Grid>
      <Grid item xs={ 6 }>
        <TextField { ...addressPkg } />
      </Grid>
      <Grid item xs={ 2 }>
        <TextField { ...addressNumberPkg } />
      </Grid>
    </Grid>
  );
}
