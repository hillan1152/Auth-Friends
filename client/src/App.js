import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios'
import './App.css';

// Components
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">Login</Link>
        <Link to="/profile">Profile</Link>
      </div>
      <Route exact path="/" component={Login}/>
      <Route exact path="/profile" component={Profile}/>
      
    </div>
  );
}

export default App;
