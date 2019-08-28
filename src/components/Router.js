import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import App from './App';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/signup" component={SignUp} />
            <Route path="/user/:username" component={App} />
            <Route exactpath="/" component={SignIn} />
        </Switch>
    </BrowserRouter>
);

export default Router;