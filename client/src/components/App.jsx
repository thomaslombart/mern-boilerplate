import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Signin from './auth/Signin.jsx';
import Signup from './auth/Signup.jsx';
import Header from './layout/Header.jsx';
import Footer from './layout/Footer.jsx';
import Home from './Home.jsx';
import NotFound from './NotFound.jsx';

const App = () => (
  <Router>
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/signup" component={Signup}/>
        <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </div>
  </Router>
);

export default App;