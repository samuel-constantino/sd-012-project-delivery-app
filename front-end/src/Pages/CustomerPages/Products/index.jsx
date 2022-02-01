import React, { useEffect, useState } from 'react';
import { Box, Button, Pagination } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ProductCard from './productCard';
import api from '../../../Services/api';
import { useGlobalState } from '../../../Provider';
import { formatCart } from '../../../util/formatCart';

export default function Products() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const { totalPrice } = useGlobalState();

  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(1);

  const { cart, setCheckoutCart } = useGlobalState();

  const PRODUCTS_PER_PAGE = 10;

  useEffect(() => {
    (async () => {
      const offset = (page - 1) * PRODUCTS_PER_PAGE;
      const limit = PRODUCTS_PER_PAGE;
      const { data } = await api.post('products', { offset, limit });
      const productsArray = data.products.rows;
      const productsQuantity = data.products.count;
      const pagesQuantity = Math.ceil(productsQuantity / PRODUCTS_PER_PAGE);
      setProducts(productsArray);
      setPages(pagesQuantity);
    })();
  }, [page]);

  // Packaging
  const buttonCart = {
    variant: 'contained',
    onClick: () => {
      setCheckoutCart(formatCart(cart));
      navigate('/checkout');
    },
  };

  const pagination = {
    count: pages,
    color: 'primary',
    page,
    onChange: (_event, value) => setPage(value),
  };

  return (
    <>
      <Button { ...buttonCart }>
        Ver Carrinho R$
        { totalPrice.toFixed(2) }
      </Button>
      <Pagination { ...pagination } />
      <Box sx={ { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' } }>
        {
          products
            ? products
              .map((product) => (<ProductCard
                data-testid={ `customer_products__element-card-price-${product.id}` }
                key={ product.id }
                product={ product }
              />))
            : <h1>Loading</h1>
        }
      </Box>
    </>
  );
}
