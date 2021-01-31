import React, { useContext } from 'react';
import { AuthenticationContext } from './contexts/authentication-context';
import { GridContainer } from './grid-container';

export const GridPage: React.FC = () => {
  const { authUser } = useContext(AuthenticationContext);

  return authUser && (
    <GridContainer days={authUser.days} year={2020} />
  );
}
