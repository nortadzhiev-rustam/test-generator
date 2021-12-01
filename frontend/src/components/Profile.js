// profile page component
import React from 'react';
import axios from 'axios';
import { Paper, Box, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    padding: 20,
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    width: '60%',
    height: 500,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
}));

const Profile = () => {
  const [user, setUser] = React.useState({});
  const classes = useStyles();
  React.useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/v1/profile', {
          withCredentials: true,
        });

        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProfile();
  }, []);

  return (
    
      <Box component='div' className={classes.root}>
        <Paper className={classes.paper}>
            
            <Typography variant='h4' component='h1'>
               Name: {user.firstName} {user.lastName}
            </Typography>
            <Typography variant='h4' component='h1'>
               Email: {user.email}
            </Typography>
            {/* <Typography variant='h4' component='h1'>
               Department: {user.department.name}
            </Typography> */}
            
        </Paper>
      </Box>
    
  );
};

export default Profile;
