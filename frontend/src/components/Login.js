import React from 'react';
import { makeStyles } from '@mui/styles';
import {
  Box,
  FormControl,
  InputLabel,
  Paper,
  FilledInput,
  Button,
  Typography,
  Grid,
  InputAdornment,
  IconButton,
} from '@mui/material';

import { Visibility, VisibilityOff } from '@mui/icons-material';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgb(255,255,255)',
    paddingBlock: 50,
    paddingInline: 20,
    borderRadius: 10,
    width: '300px',
    transition: 'all 0.7s ease-in-out',
    '&:hover': {
      boxShadow: '0px 0px 20px 10px rgba(0,0,0,0.2)',
      transform: 'translate3D(0, -10px, 20px)',
    },
  },
  textField: { marginBlock: 20, color: '#fff' },
});

const Login = ({ setIsLogin, history }) => {
  const classes = useStyles();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickSignUp = () => {
    history.push('/register');
  };

  return (
    <Box className={classes.root}>
      <Paper
        sx={{
          borderRadius: '15px',
          padding: { md: '40px', xs: '20px' },
          marginBlock: { xs: '20px' },
          backgroundColor: '#006064',
        }}
        className='animate__animated animate__bounceIn animate__slow'
        elevation={10}
      >
        <Typography
          variant='h3'
          color='white'
          fontWeight='bold'
          sx={{
            textAlign: 'center',
            marginBottom: { xs: 2, md: 5 },
            textTransform: 'uppercase',
          }}
        >
          Login
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl
                variant='filled'
                fullWidth
                sx={{ marginBlock: 10 }}
                size='medium'
              >
                <InputLabel htmlFor='email'>Email or Username</InputLabel>
                <FilledInput
                  id='email'
                  variant='filled'
                  label='Email or Username'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl
                fullWidth
                variant='filled'
                sx={{ marginBlock: 10 }}
                size='medium'
              >
                <InputLabel htmlFor='password'>Password</InputLabel>
                <FilledInput
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  variant='filled'
                  label='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge='end'
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Button
                variant='standart'
                color='success'
                onClick={handleClickSignUp}
              >
                Don't have an account? <Box component='span' sx={{textDecoration: 'underline', marginLeft: 1}}>Sign Up!</Box>
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Button type='submit' variant='contained'>
                Sign in
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
