import { useEffect, useState } from 'react'
import useFetch from '../../hooks/fetch-hook';
import { Config } from '../../util/config';
import { UserData } from '../../util/types/data-types'
import { GetUserResponse } from '../../util/types/response-types';
import { AuthenticationContext } from './authentication-context';

export const AuthenticationContextProvider: React.FC = (props) => {
  const [authUser, setAuthUser] = useState<UserData>(null);
  const [userInfoQuery, userInfoQueryState] = useFetch<GetUserResponse>(`${Config.API_URL}/users/info`);

  useEffect(() => {
    if (userInfoQueryState.fetched) {
      if (userInfoQueryState.data) {
        setAuthUser(userInfoQueryState.data.user);
      } else {
        console.log(userInfoQueryState.errors);
      }
    } else {
      userInfoQuery.get();
    }
  }, [userInfoQueryState.fetched]);

  return <AuthenticationContext.Provider value={{ authUser, setAuthUser }}>{props.children}</AuthenticationContext.Provider>
}
