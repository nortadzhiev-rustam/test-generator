import React from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import { useDispatch } from 'react-redux';
import { login } from './store/userSlice';
import SearchWindow from './components/searchWindow';
import Profile from './components/Profile';
import axios from 'axios';
import { getDepartmentSuccess } from './store/departmentSlice';

function App() {
  const [openSearch, setOpenSearch] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect( () => {
    const fetchLogin = async () => {
    const res = await axios.get('http://localhost:5000/api/v1/isAuth', {
      withCredentials: true,
    });
    if (res.data.user) {
      dispatch(login(res.data.user));
    }
  };
  fetchLogin();
  }, [dispatch]);

  React.useEffect(() => {
    //add event listener that listens for ctrl+k and changes openSearch to true
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key === 'K') {
        setOpenSearch(true);
      }
    });
  }, []);
  React.useEffect(() => {
    axios.get('http://localhost:5000/api/v1/departments', {withCredentials:true}).then((res) => {
      dispatch(getDepartmentSuccess(res.data));
    });
  }, [dispatch]);

  return (
    <div className='App'>
      <Router>
        <NavBar setOpenSearch={(o) => setOpenSearch(o)} />
        {openSearch && (
          <SearchWindow open={openSearch} setOpen={(e) => setOpenSearch(e)} />
        )}
        <Switch>
          <ProtectedRoute exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <ProtectedRoute exact path='/profile' component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
