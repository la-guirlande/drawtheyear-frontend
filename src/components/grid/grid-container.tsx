import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/fetch-hook';
import { Config } from '../../util/config';
import { DayData, UserData } from '../../util/types/data-types';
import { GetUsersResponse } from '../../util/types/response-types';
import { AuthenticationContext } from '../contexts/authentication-context';
import { ViewMonth } from '../views/monthly/view-month';
import { DetailsBar } from './details-bar';
import { Badge } from '../badge';
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
  const [showMonthlyView, setShowMonthlyView] = useState<boolean>(false);
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

  /**
   * Show view or grid.
   */
  const handleChangeView = () => {
    setShowMonthlyView(!showMonthlyView);
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
      <button onClick={handleChangeView} type="button" className="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-primary-light hover:bg-primary-dark text-white font-normal py-2 px-4 mr-1 rounded">View / Grid</button>
      {selectedDay && <DetailsBar user={user} day={selectedDay} editable={authUser?.id === user?.id} onShouldClose={() => setSelectedDay(null)} onPreviousClick={handlePreviousDay} onNextClick={handleNextDay} />}
      {showMonthlyView ?
        <div className="mx-auto">
          <ViewMonth user={user} year={2020} editable={authUser?.id === user?.id} onDaySelect={handleDaySelect} />
        </div>
        :
        <div className="container mx-auto">
          <div className="my-6">
            <Grid user={user} year={2020} editable={authUser?.id === user?.id} onDaySelect={handleDaySelect} />
          </div>
          <div className="flex flex-wrap justify-center gap-4 content-center">
            {user.emotions.map((emotion, i) => (
              <Badge key={i} style={{ backgroundColor: emotion.color }}>{emotion.name}</Badge>
            ))}
          </div>
        </div>
      }
    </div>
  );
}
