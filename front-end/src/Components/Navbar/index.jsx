import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  // Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const { name, role } = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const products = 'PRODUTOS';
  const orders = 'MEUS PEDIDOS';
  const managerUsers = 'GERENCIAR USUÁRIOS';
  const exit = 'SAIR';

  const handleClick = (target) => {
    if (target.name === products) navigate('/customer/products');

    if (target.name === orders) navigate('/customer/orders');

    if (target.name === name) console.log('nome do usuário: ', name);

    if (target.name === managerUsers) console.log('requisito bônus');

    if (target.name === exit) {
      localStorage.removeItem('user');
      navigate('/login');
    }
  };

  // Packaging
  const buttonPkg = {
    color: 'inherit',
    onClick: ({ target }) => handleClick(target),
    sx: {
      fontSize: '18px',
    },
  };
  const style = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const getButtons = () => {
    if (role === 'administrator') {
      return (
        <Button { ...buttonPkg } name={ managerUsers }>
          GERENCIAR USUÁRIOS
        </Button>
      );
    }

    if (role === 'seller') {
      return (
        <Button { ...buttonPkg } name={ products }>
          PRODUTOS
        </Button>
      );
    }

    if (role === 'customer') {
      return (
        <>
          <Button
            { ...buttonPkg }
            name={ products }
            data-testid="customer_products__element-navbar-link-products"
          >
            PRODUTOS
          </Button>
          <Button
            { ...buttonPkg }
            name={ orders }
            data-testid="customer_products__element-navbar-link-orders"
          >
            MEUS PEDIDOS
          </Button>
        </>
      );
    }
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={ style }>
          <Box>
            { getButtons() }
          </Box>
          <Box>
            <Button
              { ...buttonPkg }
              name={ name }
              data-testid="customer_products__element-navbar-user-full-name"
            >
              { name }
            </Button>
            <Button
              { ...buttonPkg }
              name={ exit }
              data-testid="customer_products__element-navbar-link-logout"
            >
              SAIR
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
