import Home from './components/Home';
import NavBar from './components/NavBar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {



  return (
    
      <div className='App'>
        
        <Router>
          <NavBar  />
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Router>
        
      </div>
    
  );
}



export default App;
