import React from 'react';
import { Helmet } from 'react-helmet';
import { SignupContainer } from './signup-container';

/**
 * Signup page.
 */
export const SignupPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Inscription - DrawTheYear</title>
      </Helmet>
      <div className="mt-3">
        <SignupContainer />
      </div>
    </>
  );
}
