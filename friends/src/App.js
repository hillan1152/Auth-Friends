import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

=======
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Login from './Components/Login';
>>>>>>> 3ebea53b56b98b442e83fc0f0a2fe32dd9d14ebe

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
<<<<<<< HEAD
        </ul>
        <Switch>
          <Route path='/login'/>
        </Switch>
=======
          <li>
            <Link to='/protected'>Login</Link>
          </li>
        </ul>
          <Switch>
            <Route path='/login' component={Login}></Route>
          </Switch>
>>>>>>> 3ebea53b56b98b442e83fc0f0a2fe32dd9d14ebe
      </div>
    </Router>
  );
}

export default App;
