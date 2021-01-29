import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from './home-page';
import { Navbar } from './navbar/navbar';
import { SigninPage } from './signin-page';

const App: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Navbar />
                <HomePage />
            </Route>
            <Route exact path="/grid">
                <Navbar />
            </Route>
            <Route exact path="/stats">
                <Navbar />
            </Route>
            <Route exact path="/signin">
                <Navbar />
                <SigninPage />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default App;
