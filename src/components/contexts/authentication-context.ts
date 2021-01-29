import React from 'react';
import { UserData } from '../../util/types/data-types'

export type AuthenticationContextState = {
  authUser: UserData;
  setAuthUser(authUser: UserData): void;
}

export const AuthenticationContext = React.createContext<AuthenticationContextState>({ authUser: null, setAuthUser: null });