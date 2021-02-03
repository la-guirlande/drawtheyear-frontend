import { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useFetch from '../../hooks/fetch-hook';
import { Config } from '../../util/config';
import { LocalStorageKey } from '../../util/types/local-storage';
import { GetUserResponse, RefreshTokenResponse } from '../../util/types/response-types';
import { AuthenticationContext } from '../contexts/authentication-context';
import { SigninForm, SigninFormValues } from './signin-form';

/**
 * Signin container.
 * 
 * This container manages the signin system.
 */
export const SigninContainer: React.FC = () => {
  const [refreshTokenQuery, refreshTokenQueryState] = useFetch<RefreshTokenResponse>(`${Config.API_URL}/auth/refreshToken`);
  const [userInfoQuery, userInfoQueryState] = useFetch<GetUserResponse>(`${Config.API_URL}/users/info`);
  const authenticationContext = useContext(AuthenticationContext);
  const history = useHistory();

  useEffect(() => {
    if (refreshTokenQueryState.fetched) {
      if (refreshTokenQueryState.data) {
        localStorage.setItem(LocalStorageKey.REFRESH_TOKEN, refreshTokenQueryState.data.refresh_token);
        localStorage.setItem(LocalStorageKey.ACCESS_TOKEN, refreshTokenQueryState.data.access_token);
        userInfoQuery.get();
      } else {
        console.log(refreshTokenQueryState.errors);
      }
    }
  }, [refreshTokenQueryState.fetched]);

  useEffect(() => {
    if (userInfoQueryState.fetched) {
      if (userInfoQueryState.data) {
        authenticationContext.setAuthUser(userInfoQueryState.data.user);
        history.goBack();
      } else {
        console.log(userInfoQueryState.errors);
      }
    }
  }, [userInfoQueryState.fetched]);

  const handleSubmitSigninForm = (data: SigninFormValues) => {
    refreshTokenQuery.post(null, data);
  }

  return (
    <>
      <SigninForm onSubmit={handleSubmitSigninForm} />
      <Link to="/signup">Inscription</Link>
    </>
  );
}
