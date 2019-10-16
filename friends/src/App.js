import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/login'/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
