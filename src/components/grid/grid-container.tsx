import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/fetch-hook';
import { Config } from '../../util/config';
import { DayData, UserData } from '../../util/types/data-types';
import { GetUsersResponse } from '../../util/types/response-types';
import { DetailSidebar } from './detail-sidebar';
import { Grid } from './grid';

export interface GridPageParams {
  username: string;
}

export const GridContainer: React.FC = () => {
  const { username } = useParams<GridPageParams>();
  const [selectedDay, setSelectedDay] = useState<DayData>(null);
  const [user, setUser] = useState<UserData>(null);
  const [usersQuery, usersQueryState] = useFetch<GetUsersResponse>(`${Config.API_URL}/users?name=${username}`);

  useEffect(() => {
    if (!usersQueryState.fetched) {
      usersQuery.get();
    } else if (usersQueryState.data && usersQueryState.data.users.length >= 1) {
      setUser(usersQueryState.data.users[0]);
    } else {
      console.log(usersQueryState.errors);
    }
  }, [usersQueryState.fetched]);

  const handleDayCreate = (dateStr: string) => {
    console.log(dateStr);
  }

  const handleDaySelect = (day: DayData) => {
    setSelectedDay(day);
  }

  return user && (
    <div>
      {selectedDay && <DetailSidebar user={user} day={selectedDay} onShouldClose={() => setSelectedDay(null)} />}
      <div className="container mx-auto">
        <Grid user={user} year={2020} onDayCreate={handleDayCreate} onDaySelect={handleDaySelect} />
      </div>
    </div>
  );
}
