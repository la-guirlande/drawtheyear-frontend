import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useFetch from '../../hooks/fetch-hook';
import { Config } from '../../util/config';
import { LocalStorageKey } from '../../util/types/local-storage';
import { GetUserResponse, RefreshTokenResponse } from '../../util/types/response-types';
import { Button } from '../button';
import { AuthenticationContext } from '../contexts/authentication-context';
import { SigninForm, SigninFormValues } from './signin-form';
import Daydotted from '../../assets/img/daydotted.png'

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
        console.error(refreshTokenQueryState.errors);
      }
    }
  }, [refreshTokenQueryState.fetched]);

  useEffect(() => {
    if (userInfoQueryState.fetched) {
      if (userInfoQueryState.data) {
        authenticationContext.setAuthUser(userInfoQueryState.data.user);
      } else {
        console.error(userInfoQueryState.errors);
      }
    }
  }, [userInfoQueryState.fetched]);

  useEffect(() => {
    if (authenticationContext.authUser) {
      history.goBack();
    }
  }, [authenticationContext.authUser]);

  const handleSubmitSigninForm = (data: SigninFormValues) => {
    refreshTokenQuery.post(null, data);
  }

  return (
    <div className="grid grid-cols-5 gap-4 w-full">
      <div className="col-span-3">
        <div className="flex flex-col justify-center ">
          <div className="flex flex-col mx-auto my-0">
            <div className="text-5xl pt-36">
              Sign In to
            </div>
            <div className="text-5xl ">
              Start writing
            </div>
            <div className="text-xl mt-8 flex flex-col text-gray-400">
              If you don't have an account
            </div>
            <div className="text-gray-400 mx-auto">
              You can <span className="text-yellow-600 hover:border-b-2 border-solid hover:border-yellow-500 hover:text-yellow-500 cursor-pointer">Register here</span>
            </div>
            <div className="w-80">
              <img src={Daydotted} alt="Day dotted"/>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <SigninForm onSubmit={handleSubmitSigninForm} />
        <Button href="/signup">Inscription</Button>
      </div>
    </div>
  );
}
