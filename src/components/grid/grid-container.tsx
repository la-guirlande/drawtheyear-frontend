import { useContext, useState } from 'react';
import { DayData } from '../../util/types/data-types';
import { AuthenticationContext } from '../contexts/authentication-context';
import { DetailSidebar } from './detail-sidebar';
import { Grid } from './grid';

export const GridContainer: React.FC = () => {
  const { authUser } = useContext(AuthenticationContext);
  const [selectedDay, setSelectedDay] = useState<DayData>(null);

  const handleDayCreate = (dateStr: string) => {
    console.log(dateStr);
  }

  const handleDaySelect = (day: DayData) => {
    setSelectedDay(day);
  }

  return authUser && (
    <div>
      {selectedDay && <DetailSidebar user={authUser} day={selectedDay} onShouldClose={() => setSelectedDay(null)} />}
      <div className="container mx-auto">
        <Grid user={authUser} year={2020} onDayCreate={handleDayCreate} onDaySelect={handleDaySelect} />
      </div>
    </div>
  );
}
