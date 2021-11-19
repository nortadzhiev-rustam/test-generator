import React from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  return (
    <div className='App'>
      <Router>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
           <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
          </Switch>
        </Router>
        
      
    </div>
  );
}

export default App;
