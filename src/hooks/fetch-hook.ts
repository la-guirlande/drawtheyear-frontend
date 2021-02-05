import { useReducer, Reducer } from 'react';
import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import { Response, ErrorResponse, AccessTokenResponse } from '../util/types/response-types';
import fetchReducer, { FetchReducerState, FetchReducerAction } from '../reducers/fetch-reducer';
import { LocalStorageKey } from '../util/types/local-storage';
import { Config } from '../util/config';

/**
 * Query interface.
 */
export interface Query {
  get: (url?: string, config?: AxiosRequestConfig) => Promise<void>;
  post: (url?: string, body?: unknown, config?: AxiosRequestConfig) => Promise<void>;
  put: (url?: string, body?: unknown, config?: AxiosRequestConfig) => Promise<void>;
  patch: (url?: string, body?: unknown, config?: AxiosRequestConfig) => Promise<void>;
  delete: (url?: string, config?: AxiosRequestConfig) => Promise<void>;
  reset: () => void;
}

/**
 * Fetch hook.
 * 
 * This hook can make API calls and returns a response with the status of the query (`fetched`), the response data (`data`) and errors if returned (`errors`).
 * 
 * @param baseUrl URL processed with the returned hook instance
 * @param authenticated If true, the access token stored in the local storage will be automatically added in the request header `x-access-token`
 * @returns Array with the hook state to retrieve data / errors and the hook query to make API calls to the given URL
 */
const useFetch = <R extends Response>(baseUrl?: string, authenticated: boolean = true): [Query, FetchReducerState<R>] => {
  const [state, dispatch] = useReducer<Reducer<FetchReducerState<R>, FetchReducerAction<R>>>(fetchReducer, { fetched: false, data: null, errors: [] });

  // TODO Optimize the retry fetch when the access token is expired
  const query: Query = {
    get: async (url?: string, config?: AxiosRequestConfig) => {
      dispatch({ type: 'INIT' });
      try {
        const res = await axios.get<R>(url || baseUrl, authenticated ? addAccessTokenInConfiguration(config) : config);
        dispatch({ type: 'SUCCESS', payload: res.data });
      } catch (err) {
        if (err.message === 'Network Error') {
          dispatch({ type: 'ERROR', payload: [{ error: 'network_error', error_description: 'Impossible de se connecter au serveur' }] })
        } else if (await checkErrorAndRefreshAccessToken(err)) {
          try {
            const res = await axios.get<R>(url || baseUrl, authenticated ? addAccessTokenInConfiguration(config) : config);
            dispatch({ type: 'SUCCESS', payload: res.data });
          } catch (err) {
            dispatch({ type: 'ERROR', payload: (err as AxiosError).response.data.errors });
          }
        } else {
          dispatch({ type: 'ERROR', payload: (err as AxiosError).response.data.errors });
        }
      }
    },
    post: async (url?: string, body?: unknown, config?: AxiosRequestConfig) => {
      dispatch({ type: 'INIT' });
      try {
        const res = await axios.post<R>(url || baseUrl, body, authenticated ? addAccessTokenInConfiguration(config) : config);
        dispatch({ type: 'SUCCESS', payload: res.data });
      } catch (err) {
        if (err.message === 'Network Error') {
          dispatch({ type: 'ERROR', payload: [{ error: 'network_error', error_description: 'Impossible de se connecter au serveur' }] })
        } else if (await checkErrorAndRefreshAccessToken(err)) {
          try {
            const res = await axios.post<R>(url || baseUrl, body, authenticated ? addAccessTokenInConfiguration(config) : config);
            dispatch({ type: 'SUCCESS', payload: res.data });
          } catch (err) {
            dispatch({ type: 'ERROR', payload: (err as AxiosError).response.data.errors });
          }
        } else {
          dispatch({ type: 'ERROR', payload: (err as AxiosError).response.data.errors });
        }
      }
    },
    put: async (url?: string, body?: unknown, config?: AxiosRequestConfig) => {
      dispatch({ type: 'INIT' });
      try {
        const res = await axios.put<R>(url || baseUrl, body, authenticated ? addAccessTokenInConfiguration(config) : config);
        dispatch({ type: 'SUCCESS', payload: res.data });
      } catch (err) {
        if (err.message === 'Network Error') {
          dispatch({ type: 'ERROR', payload: [{ error: 'network_error', error_description: 'Impossible de se connecter au serveur' }] })
        } else if (await checkErrorAndRefreshAccessToken(err)) {
          try {
            const res = await axios.put<R>(url || baseUrl, body, authenticated ? addAccessTokenInConfiguration(config) : config);
            dispatch({ type: 'SUCCESS', payload: res.data });
          } catch (err) {
            dispatch({ type: 'ERROR', payload: (err as AxiosError).response.data.errors });
          }
        } else {
          dispatch({ type: 'ERROR', payload: (err as AxiosError).response.data.errors });
        }
      }
    },
    patch: async (url?: string, body?: unknown, config?: AxiosRequestConfig) => {
      dispatch({ type: 'INIT' });
      try {
        const res = await axios.patch<R>(url || baseUrl, body, authenticated ? addAccessTokenInConfiguration(config) : config);
        dispatch({ type: 'SUCCESS', payload: res.data });
      } catch (err) {
        if (err.message === 'Network Error') {
          dispatch({ type: 'ERROR', payload: [{ error: 'network_error', error_description: 'Impossible de se connecter au serveur' }] })
        } else if (await checkErrorAndRefreshAccessToken(err)) {
          try {
            const res = await axios.patch<R>(url || baseUrl, body, authenticated ? addAccessTokenInConfiguration(config) : config);
            dispatch({ type: 'SUCCESS', payload: res.data });
          } catch (err) {
            dispatch({ type: 'ERROR', payload: (err as AxiosError).response.data.errors });
          }
        } else {
          dispatch({ type: 'ERROR', payload: (err as AxiosError).response.data.errors });
        }
      }
    },
    delete: async (url?: string, config?: AxiosRequestConfig) => {
      dispatch({ type: 'INIT' });
      try {
        const res = await axios.delete<R>(url || baseUrl, authenticated ? addAccessTokenInConfiguration(config) : config);
        dispatch({ type: 'SUCCESS', payload: res.data });
      } catch (err) {
        if (err.message === 'Network Error') {
          dispatch({ type: 'ERROR', payload: [{ error: 'network_error', error_description: 'Impossible de se connecter au serveur' }] })
        } else if (await checkErrorAndRefreshAccessToken(err)) {
          try {
            const res = await axios.delete<R>(url || baseUrl, authenticated ? addAccessTokenInConfiguration(config) : config);
            dispatch({ type: 'SUCCESS', payload: res.data });
          } catch (err) {
            dispatch({ type: 'ERROR', payload: (err as AxiosError).response.data.errors });
          }
        } else {
          dispatch({ type: 'ERROR', payload: (err as AxiosError).response.data.errors });
        }
      }
    },
    reset: () => dispatch({ type: 'INIT' })
  }

  function addAccessTokenInConfiguration(config: AxiosRequestConfig = {}) {
    config.headers = {
      ...config.headers,
      'x-access-token': localStorage.getItem(LocalStorageKey.ACCESS_TOKEN)
    };
    return config;
  }

  async function checkErrorAndRefreshAccessToken(err: AxiosError<ErrorResponse>) {
    if (err.response.data.errors.some(error => error.error === 'access_denied')) { // TODO Add specific error "token_expired" instead of "access_denied" to avoid useless retries
      const refreshToken = localStorage.getItem(LocalStorageKey.REFRESH_TOKEN);

      if (refreshToken != null) {
        try {
          const res = await axios.post<AccessTokenResponse>(`${Config.API_URL}/auth/accessToken`, {
            refresh_token: refreshToken
          });
          localStorage.setItem(LocalStorageKey.ACCESS_TOKEN, res.data.access_token);
          return true;
        } catch (err) {
          console.warn('Could not authenticate user :', err.message);
          localStorage.removeItem(LocalStorageKey.ACCESS_TOKEN);
          localStorage.removeItem(LocalStorageKey.REFRESH_TOKEN);
        }
      }
    }
    return false;
  }

  return [query, state];
};

export default useFetch;
