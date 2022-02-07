import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Paper, TextField, Button, Typography } from '@mui/material';
import loginSchema from '../../../Validations/loginSchema';
import api from '../../../Services/api';
import { useGlobalState } from '../../../Provider';

export default function Login() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useGlobalState();

  // State
  const [login, setLogin] = useState({});
  const [canLogin, setCanLogin] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  // Handlers
  const handleSubmit = async () => {
    try {
      const res = await api.post('login', login);
      const user = res.data;
      localStorage.setItem('user', JSON.stringify(user));
      setIsLoggedIn(true);
      if (user.role === 'customer') navigate('/customer/products');
      else if (user.role === 'seller') navigate('/seller/orders');
      else navigate('/admin/manage');
    } catch (error) {
      setErrMsg('Erro no login');
      console.log('📺🐛 ', error);
    }
  };
  const handleChange = (e) => {
    const updatedLogin = { ...login, [e.target.name]: e.target.value };
    const { error } = loginSchema.validate(updatedLogin);
    if (error) setCanLogin(false);
    else setCanLogin(true);
    setLogin(updatedLogin);
  };

  // Packaging
  const grid1 = {
    container: true,
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    style: { minHeight: '100vh' },
  };
  const grid2 = {
    container: true,
    direction: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
  };
  const emailPkg = {
    name: 'email',
    label: 'Email',
    placeholder: 'Insira seu email',
    style: { marginBottom: '20px' },
    inputProps: { 'data-testid': 'common_login__input-email' },
    onChange: handleChange,
  };
  const passwordPkg = {
    name: 'password',
    label: 'Senha',
    placeholder: 'Insira sua senha',
    style: { marginBottom: '20px' },
    type: 'password',
    inputProps: { 'data-testid': 'common_login__input-password' },
    onChange: handleChange,
  };
  const loginBtnPkg = {
    name: 'loginButton',
    variant: 'contained',
    disabled: !canLogin,
    onClick: handleSubmit,
  };
  const registerBtnPkg = {
    name: 'registerButton',
    variant: 'contained',
    onClick: () => navigate('/register'),
  };
  const errMsgGridPkg = {
    container: true,
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    style: {
      paddingTop: '20px',
      color: '#f55',
    },
  };

  return (
    <Grid { ...grid1 }>
      <Paper elevation={ 12 }>
        <Box p={ 4 }>
          <Grid { ...grid2 }>
            <TextField { ...emailPkg } />
            <TextField { ...passwordPkg } />
            <Button { ...loginBtnPkg } data-testid="common_login__button-login">
              Login
            </Button>
            <Button { ...registerBtnPkg } data-testid="common_login__button-register">
              Ainda não tenho conta
            </Button>
          </Grid>
          <Grid { ...errMsgGridPkg }>
            <Typography data-testid="common_login__element-invalid-email">
              {`${errMsg}`}
            </Typography>
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
}
