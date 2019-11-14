import React from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';

// Components
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <div className="links">
        <Link to="/">Login</Link>
        <Link to="/friendlist">Friend List</Link>
        <Link to="/friendform">Friend Form</Link>
        <Login/>
      </div>
        <PrivateRoute path="friendlist"/>
        <PrivateRoute path="friendlist"/>
        <Route exact path="/"/>
    </div>
  );
}

export default App;
