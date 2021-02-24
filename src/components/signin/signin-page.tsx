import React from 'react';
import { Helmet } from 'react-helmet';
import { SigninContainer } from './signin-container';

/**
 * Signin page.
 */
export const SigninPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Connexion - DrawTheYear</title>
      </Helmet>
      <div className="mt-3">
        <SigninContainer />
      </div>
    </>
  );
}
