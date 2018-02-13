import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import  { Route } from 'react-router-dom';
import Nav from './nav';
import SignUp from './signup';
import SignIn from './signin';
import Home from './home';

const App = () => (
    <div>
        <div className="app container">
            <Nav />
            <Route exact path="/" component={ Home }/>
            <Route  path="/signup" component={ SignUp }/>
            <Route  path="/signin" component={ SignIn }/>
        </div>
    </div>
);

export default App;
