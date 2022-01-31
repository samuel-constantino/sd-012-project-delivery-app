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
import { useCart } from '../../../Provider';

export default function ProductCard({ product }) {
  const { name, price, urlImage } = product;
  const [quantity, setQuantity] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const { addToCart, removeToCart } = useCart();

  useEffect(() => {
    if (quantity === 0) setDisabled(true);
    else setDisabled(false);
  }, [quantity]);

  const handleClick = (target) => {
    if (target.name === 'positive') {
      setQuantity(quantity + 1);
      addToCart({ name, price });
    } else {
      setQuantity(quantity - 1);
      removeToCart({ name, price });
    }
  };

  const handleChange = (target) => {
    const value = +target.value;
    if (value <= 0) setQuantity(0);
    else setQuantity(value);
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
    name: 'negative',
    disabled,
    onClick: ({ target }) => handleClick(target),
  };

  const buttonPositive = {
    size: 'small',
    name: 'positive',
    onClick: ({ target }) => handleClick(target),
  };

  const textFieldQuantity = {
    value: quantity,
    variant: 'filled',
    size: 'small',
    type: 'number',
    onChange: ({ target }) => handleChange(target),
  };

  return (
    <Card>

      <CardContent>
        <Typography { ...typographyH6 } gutterBottom>
          { `R$ ${price}` }
        </Typography>
      </CardContent>

      <CardMedia { ...cartMedia } />

      <CardContent>
        <Typography { ...typographyBody2 }>
          { name }
        </Typography>
      </CardContent>

      <CardActions>
        <Button { ...buttonNegative }>-</Button>
        <TextField { ...textFieldQuantity } hiddenLabel />
        <Button { ...buttonPositive }>+</Button>
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
