import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthenticationContextProvider } from './contexts/authentication-context';
import { Router } from './router';

/**
 * App component.
 * 
 * This component is the entry point of the application.
 */
const App: React.FC = () => (
  <AuthenticationContextProvider>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </AuthenticationContextProvider>
);

export default App;
