import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from './homepage';
import { Navbar } from './navbar/navbar';

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
            </Route>
        </Switch>
    </BrowserRouter>
);

export default App;
