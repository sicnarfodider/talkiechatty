import React from 'react';
import '../assets/css/app.css';
import SignUp from './signup';
import SignIn from './signin';

const App = () => (
    <div>
        <div className="app">
            <SignUp />
            <SignIn />
        </div>
    </div>
);

export default App;
