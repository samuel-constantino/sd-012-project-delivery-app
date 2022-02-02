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
  const { deliveryInfo, setDeliveryInfo } = useGlobalState();
  const [sellersList, setSellersList] = useState([]);

  // Destructuring
  const { sellerName = '', deliveryAddress = '', deliveryNumber = '' } = deliveryInfo;

  // Loads sellers list
  useEffect(() => {
    const loadSellersList = async () => {
      const res = await api.get('seller/sellers');
      const list = res.data;
      setSellersList(list);
    };
    loadSellersList();
  }, []);

  // Handle Changes
  const handleSellerChange = (e) => {
    setDeliveryInfo({ ...deliveryInfo, sellerName: e.target.value });
  };
  const handleAddressChange = (e) => {
    setDeliveryInfo({ ...deliveryInfo, deliveryAddress: e.target.value });
  };
  const handleAddressNumberChange = (e) => {
    setDeliveryInfo({ ...deliveryInfo, deliveryNumber: e.target.value });
  };

  // Rendering functions
  const renderSelect = () => {
    const options = sellersList.map((e, index) => (
      <MenuItem value={ e.name } key={ index }>{ e.name }</MenuItem>));

    return (
      <FormControl fullWidth>
        <InputLabel>Vendedor Responsável</InputLabel>
        <Select
          value={ sellerName }
          label="Vendedor Responsável"
          data-testid="customer_checkout__select-seller"
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
    value: deliveryAddress,
    fullWidth: true,
    inputProps: { 'data-testid': 'customer_checkout__input-address' },
    onChange: handleAddressChange,
  };
  const addressNumberPkg = {
    label: 'Número',
    value: deliveryNumber,
    fullWidth: true,
    inputProps: { 'data-testid': 'customer_checkout__input-addressNumber' },
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
