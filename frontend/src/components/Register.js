import React from 'react';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import propTypes from 'prop-types'
import {
  Box,
  Grid,
  Paper,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  Typography,
  FilledInput,
  Select,
  MenuItem,
} from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';

const useStyles = makeStyles({
  root: {
    
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255, 0.5)',
    padding: 20,
    borderRadius: 10,
    transition: 'all 0.7s ease-in-out',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255)',
      boxShadow: '0px 0px 10px 5px rgba(0,0,0,0.2)',
      transform: 'translate3D(0, -5px, 10px)',
    },
  },
  textField: { marginBlock: 10, color: '#fff' },
});



const Register = ({ setIsLogin }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
    showPassword: false,
    showPasswordConfirm: false,
    department: '',
  });
  const [departments, setDepartments] = React.useState([]);
  React.useEffect(() => {
    axios
      .get('http://192.168.1.6:5000/api/departments')
      .then((res) => {
        setDepartments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClickShowPasswordConfirm = () => {
    setValues({ ...values, showPasswordConfirm: !values.showPasswordConfirm });
  };

  return (
    //form for register with material-ui
    <Box component='div' className={classes.root}>
      <Paper
        sx={{
          borderRadius: '15px',
          padding: {md:'40px', xs : '20px'},
          margin: {xs: '20px'},
          backgroundColor: '#357a38',
        }}
        elevation={10}
        className='animate__animated animate__bounceInDown animate__slow'
      >
        <Typography
          variant='h3'
          fontWeight='bold'
          sx={{ textAlign: 'center', marginBottom: {xs : 2, md : 5}, textTransform: 'uppercase' }}
          color='white'
        >
          Sign-up
        </Typography>
        <form noValidate className={classes.form}>
          <Grid container spacing={1} className={classes.textField}>
            <Grid item xs={12} sm={6}>
              <TextField
                color='success'
                size='small'
                autoComplete='fname'
                fullWidth
                onChange={handleChange('firstName')}
                label='First Name'
                variant='filled'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                color='success'
                size='small'
                fullWidth
                autoComplete='lname'
                
                onChange={handleChange('lastName')}
                label='Last Name'
                variant='filled'
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} className={classes.textField}>
            <Grid item xs={12}>
              <TextField
                color='success'
                type='email'
                size='small'
                fullWidth
                onChange={handleChange('email')}
                email='email'
                label='Email'
                variant='filled'
                autoComplete='email'
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} className={classes.textField}>
            <Grid item xs={12} sm={6}>
              <FormControl
                size='small'
                sx={{ width: '100%' }}
                variant='filled'
                color='success'
              >
                <InputLabel htmlFor='outlined-adornment-password'>
                  Password
                </InputLabel>
                <FilledInput
                  fullWidth
                  id='outlined-adornment-password'
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge='end'
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label='Password'
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                size='small'
                fullWidth
                color='success'
                variant='filled'
              >
                <InputLabel htmlFor='outlined-adornment-passwordConfirm'>
                  Confirm Password
                </InputLabel>
                <FilledInput
                  name='passwordConfirm'
                  id='outlined-adornment-passwordConfirm'
                  type={values.showPasswordConfirm ? 'text' : 'password'}
                  value={values.passwordConfirm}
                  onChange={handleChange('passwordConfirm')}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPasswordConfirm}
                        onMouseDown={handleMouseDownPassword}
                        edge='end'
                      >
                        {values.showPasswordConfirm ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label='Password'
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={1} className={classes.textField}>
            <Grid item xs={12} sm={6}>
              <FormControl
                fullWidth
                size='small'
                variant='filled'
                color='success'
              >
                <InputLabel htmlFor='select-role'>Department</InputLabel>
                <Select
                  variant='filled'
                  value={values.department}
                  onChange={(event) =>
                    setValues({ ...values, department: event.target.value })
                  }
                  labelId='select-role'
                  label='Department'
                >
                  {departments.map((department) => (
                    <MenuItem key={department.id} value={department.id}>
                      {department.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'end' }}>
              <Button variant='contained' color='success'>
                Sign up
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button onClick={() => setIsLogin(true)} variant='contained' color='info'>
                Sign in
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

Register.propTypes = {
  departments : propTypes.array.isRequired,
}

export default Register;
