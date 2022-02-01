import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Paper, TextField, Button, Typography } from '@mui/material';
import loginSchema from '../../../Validations/loginSchema';
import api from '../../../Services/api';

export default function Login() {
  const navigate = useNavigate();

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
      navigate('/customer/products');
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
    // error: emailErr,
    // helperText: emailErrMsg,
    onChange: handleChange,
  };
  const passwordPkg = {
    name: 'password',
    label: 'Senha',
    placeholder: 'Insira sua senha',
    style: { marginBottom: '20px' },
    // error: passwordErr,
    // helperText: passwordErrMsg,
    onChange: handleChange,
  };
  const loginBtnPkg = {
    name: 'loginButton',
    onClick: handleSubmit,
    variant: 'contained',
    disabled: !canLogin,
  };
  const registerBtnPkg = {
    name: 'registerButton',
    onClick: () => navigate('/register'),
    variant: 'contained',
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
            <Button { ...loginBtnPkg }>Login</Button>
            <Button { ...registerBtnPkg }>Ainda não tenho conta</Button>
          </Grid>
          <Grid { ...errMsgGridPkg }>
            <Typography>{`${errMsg}`}</Typography>
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
}
