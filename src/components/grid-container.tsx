import { useContext } from 'react';
import { AuthenticationContext } from './contexts/authentication-context';
import { Grid } from './grid';

export const GridContainer: React.FC = () => {
  const { authUser } = useContext(AuthenticationContext);

  return authUser && (
    <Grid user={authUser} year={2020} />
  );
}
