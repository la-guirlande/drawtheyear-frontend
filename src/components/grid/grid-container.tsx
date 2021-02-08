import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/fetch-hook';
import { Config } from '../../util/config';
import { DayData, UserData } from '../../util/types/data-types';
import { GetUsersResponse } from '../../util/types/response-types';
import { AuthenticationContext } from '../contexts/authentication-context';
import { DetailsBar } from './details-bar';
import { Grid } from './grid';

/**
 * Grid container.
 * 
 * This container manages the grid.
 */
export const GridContainer: React.FC = () => {
  const { username } = useParams<{ username: string; }>();
  const { authUser } = useContext(AuthenticationContext);
  const [user, setUser] = useState<UserData>(null);
  const [selectedDay, setSelectedDay] = useState<DayData>(null);
  const [usersQuery, usersQueryState] = useFetch<GetUsersResponse>(`${Config.API_URL}/users?name=${username}`);

  useEffect(() => {
    if (!usersQueryState.fetched) {
      usersQuery.get();
    } else if (usersQueryState.data && usersQueryState.data.users.length >= 1) {
      setUser(usersQueryState.data.users[0]);
    } else {
      console.error(usersQueryState.errors);
    }
  }, [usersQueryState.fetched]);

  const handleDaySelect = (day: DayData) => {
    setSelectedDay(day);
  }

  const handlePreviousDay = (day: DayData) => {
    if (authUser) {
      const prevDay = authUser.days.find(currentDay => {
        const currentDayDate = new Date(currentDay.date);
        const dayDate = new Date(day.date);
        dayDate.setDate(dayDate.getDate() - 1);
        if (currentDayDate.getTime() === dayDate.getTime()) {
          return true;
        }
        return false;
      });
      setSelectedDay(prevDay);
    }
  }

  const handleNextDay = (day: DayData) => {
    if (authUser) {
      const prevDay = authUser.days.find(currentDay => {
        const currentDayDate = new Date(currentDay.date);
        const dayDate = new Date(day.date);
        dayDate.setDate(dayDate.getDate() + 1);
        if (currentDayDate.getTime() === dayDate.getTime()) {
          return true;
        }
        return false;
      });
      setSelectedDay(prevDay);
    }
  }

  return user && (
    <div>
      {selectedDay && <DetailsBar user={user} day={selectedDay} editable={authUser?.id === user?.id} onShouldClose={() => setSelectedDay(null)} onPreviousClick={handlePreviousDay} onNextClick={handleNextDay} />}
      <div className="container mx-auto">
        <Grid user={user} year={2020} editable={authUser?.id === user?.id} onDaySelect={handleDaySelect} />
      </div>
    </div>
  );
}
