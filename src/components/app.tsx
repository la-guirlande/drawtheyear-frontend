import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthenticationContextProvider } from './contexts/authentication-context-provider';
import { GridPage } from './grid/grid-page';
import { HomePage } from './home-page';
import { Navbar } from './navbar/navbar';
import { SigninPage } from './signin-page';
import { SignupPage } from './signup-page';

const App: React.FC = () => (
    <AuthenticationContextProvider>
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Navbar />
                    <HomePage />
                </Route>
                <Route exact path="/grid">
                    <Navbar />
                    <GridPage />
                </Route>
                <Route exact path="/stats">
                    <Navbar />
                </Route>
                <Route exact path="/signin">
                    <Navbar />
                    <SigninPage />
                </Route>
                <Route exact path="/signup">
                    <Navbar />
                    <SignupPage />
                </Route>
            </Switch>
        </BrowserRouter>
    </AuthenticationContextProvider>
);

export default App;
