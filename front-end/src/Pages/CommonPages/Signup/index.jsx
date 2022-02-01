import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Paper, TextField, Button, Typography } from '@mui/material';
import registerSchema from '../../../Validations/registerSchema';

export default function Signup() {
  const navigate = useNavigate();

  const [register, setRegister] = useState({});
  const [canRegister, setCanRegister] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const handleSubmit = async () => {
    try {
      navigate('/login');
    } catch (error) {
      setErrMsg('Erro ao cadastrar');
      console.log('📺🐛 ', error);
    }
  };

  const handleChange = (e) => {
    const updatedRegister = { ...register, [e.target.name]: e.target.value };
    const { error } = registerSchema.validate(updatedRegister);
    console.log(error);
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
    onChange: handleChange,
  };
  const emailPkg = {
    name: 'email',
    label: 'Email',
    placeholder: 'Insira seu email',
    style: { marginBottom: '20px' },
    onChange: handleChange,
  };
  const passwordPkg = {
    name: 'password',
    label: 'Senha',
    placeholder: 'Insira sua senha',
    style: { marginBottom: '20px' },
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
            <Button { ...registerBtnPkg }>Cadastrar</Button>
          </Grid>
          <Grid { ...errMsgGridPkg }>
            <Typography>{ `${errMsg}` }</Typography>
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
}
