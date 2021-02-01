import { useContext } from 'react';
import { DayData } from '../util/types/data-types';
import { AuthenticationContext } from './contexts/authentication-context';
import { Grid } from './grid';

export const GridContainer: React.FC = () => {
  const { authUser } = useContext(AuthenticationContext);

  const handleDayClick = (day: DayData) => {
    //
  }

  const handleEmptyClick = (dateStr: string) => {
    //
  }

  return authUser && (
    <div className="container mx-auto">
      <Grid user={authUser} year={2020} onDayClick={handleDayClick} onEmptyClick={handleEmptyClick} />
    </div>
  );
}
