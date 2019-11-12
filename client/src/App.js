import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

// Components
import Login from './components/Login';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">Login</Link>
        <Link to="/profile">Profile</Link>
      </div>
      <PrivateRoute path="/profile" component={Profile}/>
      <Route  exact path="/" component={Login}/>
      
    </div>
  );
}

export default App;
