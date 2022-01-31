import React from 'react';
import { Button } from '@mui/material';

export default function Navbar() {
  return (
    <nav style={ { display: 'flex' } }>
      <Button data-testid="customer_products__element-navbar-link-products">
        Produtos
      </Button>

      <Button data-testid="customer_products__element-navbar-link-orders">
        Meus Pedidos
      </Button>

      <Button data-testid="customer_products__element-navbar-user-full-name">
        User
      </Button>

      <Button
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
        onClick={ () => {} }
      >
        Sair
      </Button>
    </nav>
  );
}
