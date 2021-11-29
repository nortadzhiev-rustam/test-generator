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
  Alert,
} from '@mui/material';
import axios from 'axios';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { setLoading, login } from '../store/userSlice';
const useStyles = makeStyles({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
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

const Login = ({ history }) => {
  const classes = useStyles();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      history.push('/index');
    }
  }, [history]);

  React.useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError('');
      }, 3000);
    }
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const res = await axios.post(
        'http://localhost:5000/api/v1/login',
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      dispatch(login(res.data));
      localStorage.setItem('user', JSON.stringify(res.data));
      history.push('/index');
    } catch (err) {
      setError(err.message);
    }
    dispatch(setLoading(false));
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
      {error !== '' && (
        <Alert className='animate__animated animate__fadeIn' severity='error'>
          {error}
        </Alert>
      )}
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
                Don't have an account?{' '}
                <Box
                  component='span'
                  sx={{ textDecoration: 'underline', marginLeft: 1 }}
                >
                  Sign Up!
                </Box>
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
