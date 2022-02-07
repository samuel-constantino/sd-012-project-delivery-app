import React, { useCallback, useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ProductCard from './productCard';
import api from '../../../Services/api';
import { useGlobalState } from '../../../Provider';
import Navbar from '../../../Components/Navbar';

export default function Products() {
  const [products, setProducts] = useState([]);
  const { cart, setTotalPrice } = useGlobalState();

  const navigate = useNavigate();

  // Load products
  const getProducts = useCallback(async () => {
    const { data } = await api.get('products');
    setProducts(data.products);
  }, []);

  useEffect(() => getProducts(), [getProducts]);

  const calculateTotal = () => cart.reduce((acc, { quantity, price }) => {
    const total = acc + (Number(quantity) * Number(price));
    return total;
  }, 0);

  // Packaging
  const buttonCart = {
    variant: 'contained',
    onClick: () => {
      setTotalPrice(calculateTotal());
      navigate('/customer/checkout');
    },
    disabled: calculateTotal() === 0,
  };

  return (
    <>
      <Navbar />
      <Button
        { ...buttonCart }
        data-testid="customer_products__button-cart"
      >
        Ver Carrinho R$
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          {calculateTotal().toFixed(2).replace('.', ',')}
        </span>
      </Button>
      <Box sx={ { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' } }>
        {
          products ? products
            .map((product) => (<ProductCard
              key={ product.id }
              product={ product }
            />))
            : <h1>Loading</h1>
        }
      </Box>
    </>
  );
}
