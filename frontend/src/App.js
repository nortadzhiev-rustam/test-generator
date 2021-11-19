import React from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './store/userSlice';
function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  React.useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      dispatch(login(user));
    }
  }, [dispatch]);
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={isLoggedIn ? Home : Login} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <ProtectedRoute exact path='/home' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
