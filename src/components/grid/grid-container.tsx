import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/fetch-hook';
import { Config } from '../../util/config';
import { DayData, UserData } from '../../util/types/data-types';
import { GetUsersResponse } from '../../util/types/response-types';
import { Button } from '../button';
import { AuthenticationContext } from '../contexts/authentication-context';
import { Monthly } from '../views/monthly/monthly';
import { DetailsSidebar } from './details-sidebar';
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

  return user && (
    <div>
      <button onClick={handleChangeView} type="button" className="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-primary-light hover:bg-primary-dark text-white font-normal py-2 px-4 mr-1 rounded">View / Grid</button>
      {selectedDay && <DetailsSidebar user={user} day={selectedDay} editable={authUser?.id === user?.id} onShouldClose={() => setSelectedDay(null)} />}
      <div className="container mx-auto">
        {/* J'ai ajouté un bouton pour switch entre les vues. */}
        {showMonthlyView ?
          <Monthly user={user} year={2020} editable={authUser?.id === user?.id} onDaySelect={handleDaySelect} />
          :
          <Grid user={user} year={2020} editable={authUser?.id === user?.id} onDaySelect={handleDaySelect} />
        }
      </div>
    </div>
  );
}
