import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Paper, TextField, Button, Typography } from '@mui/material';
import registerSchema from '../../../Validations/registerSchema';
import api from '../../../Services/api';

export default function Signup() {
  const navigate = useNavigate();

  const [register, setRegister] = useState({});
  const [canRegister, setCanRegister] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const handleSubmit = async () => {
    try {
      const { email, password } = register;
      await api.post('register', register);
      const res = await api.post('login', { email, password });
      const user = res.data;
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/customer/products');
    } catch (error) {
      setErrMsg('Erro ao cadastrar');
      console.log('📺🐛 ', error);
    }
  };

  const handleChange = (e) => {
    const updatedRegister = { ...register, [e.target.name]: e.target.value };
    const { error } = registerSchema.validate(updatedRegister);
    if (error) setCanRegister(false);
    else setCanRegister(true);
    setRegister(updatedRegister);
  };

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
  const namePkg = {
    name: 'name',
    label: 'Nome',
    placeholder: 'Insira seu nome',
    style: { marginBottom: '20px' },
    inputProps: { 'data-testid': 'common_register__input-name' },
    onChange: handleChange,
  };
  const emailPkg = {
    name: 'email',
    label: 'Email',
    placeholder: 'Insira seu email',
    style: { marginBottom: '20px' },
    inputProps: { 'data-testid': 'common_register__input-email' },
    onChange: handleChange,
  };
  const passwordPkg = {
    name: 'password',
    label: 'Senha',
    type: 'password',
    placeholder: 'Insira sua senha',
    style: { marginBottom: '20px' },
    inputProps: { 'data-testid': 'common_register__input-password' },
    onChange: handleChange,
  };
  const registerBtnPkg = {
    name: 'registerButton',
    onClick: handleSubmit,
    variant: 'contained',
    disabled: !canRegister,
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
            <TextField { ...namePkg } />
            <TextField { ...emailPkg } />
            <TextField { ...passwordPkg } />
            <Button { ...registerBtnPkg } data-testid="common_register__button-register">
              Cadastrar
            </Button>
          </Grid>
          <Grid { ...errMsgGridPkg }>
            <Typography data-testid="common_register__element-invalid_register">
              {`${errMsg}`}
            </Typography>
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
}
