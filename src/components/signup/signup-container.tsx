import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useFetch from '../../hooks/fetch-hook';
import { Config } from '../../util/config';
import { LocalStorageKey } from '../../util/types/local-storage';
import { CreationResponse, GetUserResponse, RefreshTokenResponse } from '../../util/types/response-types';
import { AuthenticationContext } from '../contexts/authentication-context';
import { SigninFormValues } from '../signin/signin-form';
import { SignupForm, SignupFormValues } from './signup-form';

/**
 * Signup container.
 * 
 * This container manages the signup system.
 */
export const SignupContainer: React.FC = () => {
  const [currentSigninValues, setCurrentSigninValues] = useState<SigninFormValues>(null);
  const [createUserQuery, createUserQueryState] = useFetch<CreationResponse>(`${Config.API_URL}/users`);
  const [refreshTokenQuery, refreshTokenQueryState] = useFetch<RefreshTokenResponse>(`${Config.API_URL}/auth/refreshToken`);
  const [userInfoQuery, userInfoQueryState] = useFetch<GetUserResponse>(`${Config.API_URL}/users/info`);
  const authenticationContext = useContext(AuthenticationContext);
  const history = useHistory();

  useEffect(() => {
    if (createUserQueryState.fetched && currentSigninValues) {
      if (createUserQueryState.data) {
        refreshTokenQuery.post(null, currentSigninValues);
      } else {
        console.log(createUserQueryState.errors);
      }
    }
  }, [createUserQueryState.fetched, currentSigninValues]);

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

  const handleSubmitSignupForm = (data: SignupFormValues) => {
    createUserQuery.post(null, {
      email: data.email,
      name: data.name,
      password: data.password
    });
    setCurrentSigninValues({ email: data.email, password: data.password });
  }

  return (
    <>
      <SignupForm onSubmit={handleSubmitSignupForm} />
    </>
  );
}
