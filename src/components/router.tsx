import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Footer } from './footer';
import { GridPage } from './grid/grid-page';
import { HomePage } from './home/home-page';
import { Navbar } from './navbar/navbar';
import { SigninPage } from './signin/signin-page';
import { SignupPage } from './signup/signup-page';
import { StatsPage } from './stats/stats-page';

/**
 * Router.
 */
export const Router: FC = () => (
  <div>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/grid/:username">
        <GridPage />
      </Route>
      <Route exact path="/stats">
        <StatsPage />
      </Route>
      <Route exact path="/signin">
        <SigninPage />
      </Route>
      <Route exact path="/signup">
        <SignupPage />
      </Route>
    </Switch>
    <Footer />
  </div>
);
