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
import Default from './components/Default';


function App() {
  const [openSearch, setOpenSearch] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      dispatch(login(user));
    }
  }, [dispatch]);
  return (
    <div
      className='App'
    >
      <Router>
        <NavBar setOpenSearch={(o) => setOpenSearch(o)} />
        {openSearch && (
          <SearchWindow open={openSearch} setOpen={(e) => setOpenSearch(e)} />
        )}
        <Switch>
          <ProtectedRoute exact path='/index' component={Home} />
          <Route exact path='/' component={Default} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
