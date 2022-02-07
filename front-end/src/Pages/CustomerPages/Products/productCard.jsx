import React, { useState, useEffect } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  TextField,
  CardActions,
  Button,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useGlobalState } from '../../../Provider';

export default function ProductCard({ product: { id, name, price, urlImage } }) {
  const { cart, setCart } = useGlobalState();
  const [disabled, setDisabled] = useState(true);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (quantity === 0 || quantity === '') setDisabled(true);
    else setDisabled(false);
  }, [quantity]);

  const updateCart = (updateQuantity) => {
    const newProduct = {
      id,
      name,
      price,
      urlImage,
    };
    newProduct.quantity = updateQuantity;
    const productExists = cart.find(({ id: productId }) => productId === id);
    if (!productExists) {
      setCart([...cart, newProduct]);
    } else if (updateQuantity === 0 || updateQuantity === '') {
      const newArr = cart.filter((e) => e.id !== id);
      setCart(newArr);
    } else {
      const newArr = cart.map((e) => (e.id === id ? newProduct : e));
      setCart(newArr);
    }
  };

  const handleAdd = () => {
    setQuantity((prevQuantity) => +prevQuantity + 1);
    updateCart(quantity + 1);
  };

  const handleRmv = () => {
    setQuantity((prevQuantity) => +prevQuantity - 1);
    updateCart(quantity - 1);
  };

  const handleChange = (target) => {
    const value = +target.value;
    if (value <= 0) setQuantity('');
    else setQuantity(value);
    updateCart(value);
  };

  const handleFocus = () => {
    if (!quantity || quantity === 0) setQuantity('');
    else setQuantity((prevQuantity) => prevQuantity);
  };

  const handleFocusOut = () => {
    if (quantity === '') setQuantity(0);
    else setQuantity((prevQuantity) => prevQuantity);
  };
  // Packaging
  const typographyH6 = {
    variant: 'h6',
    component: 'div',
  };

  const typographyBody2 = {
    variant: 'body2',
    color: 'text.secondary',
  };

  const cartMedia = {
    component: 'img',
    height: '350',
    image: urlImage,
    alt: name,
  };

  const buttonNegative = {
    size: 'small',
    disabled,
    onClick: () => handleRmv(),
  };

  const buttonPositive = {
    size: 'small',
    onClick: () => handleAdd(),
  };

  const textFieldQuantity = {
    value: quantity,
    variant: 'filled',
    size: 'small',
    type: 'number',
    inputProps: { 'data-testid': `customer_products__input-card-quantity-${id}` },
    onChange: ({ target }) => handleChange(target),
    onFocus: () => handleFocus(),
    onBlur: () => handleFocusOut(),
  };

  return (
    <Card>

      <CardContent>
        <Typography
          { ...typographyH6 }
          gutterBottom
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          { `R$ ${Number(price).toFixed(2).replace('.', ',')}` }
        </Typography>
      </CardContent>

      <CardMedia
        { ...cartMedia }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />

      <CardContent>
        <Typography
          { ...typographyBody2 }
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          { name }
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          { ...buttonNegative }
          data-testid={ `customer_products__button-card-rm-item-${id}` }
        >
          -
        </Button>
        <TextField
          { ...textFieldQuantity }
          hiddenLabel
        />
        <Button
          { ...buttonPositive }
          data-testid={ `customer_products__button-card-add-item-${id}` }
        >
          +
        </Button>
      </CardActions>

    </Card>
  );
}

// Prop validation
ProductCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  urlImage: PropTypes.string,
}.isRequired;
