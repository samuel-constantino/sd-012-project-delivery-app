import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/styles';

export default function NavBar() {
  const { name, role } = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const products = 'PRODUTOS';
  const orders = 'MEUS PEDIDOS';
  const managerUsers = 'GERENCIAR USUÁRIOS';
  const exit = 'SAIR';
  const sales = 'PEDIDOS';

  const handleClick = (target) => {
    if (target.name === products) navigate('/customer/products');
    if (target.name === orders) navigate('/customer/orders');
    if (target.name === name) console.log('nome do usuário: ', name);
    if (target.name === managerUsers) console.log('requisito bônus');
    if (target.name === sales) navigate('/seller/orders');
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
        <Button
          { ...buttonPkg }
          name={ managerUsers }
        >
          { managerUsers }
        </Button>
      );
    }

    if (role === 'seller') {
      return (
        <Button
          { ...buttonPkg }
          name={ sales }
          data-testid="customer_products__element-navbar-link-orders"
        >
          { sales }
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
            { products }
          </Button>
          <Button
            { ...buttonPkg }
            name={ orders }
            data-testid="customer_products__element-navbar-link-orders"
          >
            { orders }
          </Button>
        </>
      );
    }
  };

  // Styles
  const NoCapsPls = styled(Button)({
    textTransform: 'none',
  });

  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={ style }>
          <Box>
            { getButtons() }
          </Box>
          <Box>
            <NoCapsPls
              { ...buttonPkg }
              type="button"
              name={ name }
              data-testid="customer_products__element-navbar-user-full-name"
            >
              { name }
            </NoCapsPls>
            <Button
              { ...buttonPkg }
              name={ exit }
              data-testid="customer_products__element-navbar-link-logout"
            >
              { exit }
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
