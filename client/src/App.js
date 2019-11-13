import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

// Components
import Login from './components/Login';
import Profile from './components/Friends';
import FriendList from './components/FriendList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">Login</Link>
        <Link to="/friends">Friends</Link>
        {/* <Link to="/friendlist">FriendList</Link> */}
      </div>
      <PrivateRoute path="/friends" component={Profile}/>
      <PrivateRoute path="/friendlist" component={FriendList}/>
      <Route  exact path="/" component={Login}/>
      
    </div>
  );
}

export default App;
