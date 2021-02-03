import React from 'react';
import { UserData } from '../../util/types/data-types'

/**
 * Authentication context state.
 */
export type AuthenticationContextState = {
  authUser: UserData;
  setAuthUser(authUser: UserData): void;
}

/**
 * Authentication context.
 * 
 * This context is used to manipulate the authenticated user.
 */
export const AuthenticationContext = React.createContext<AuthenticationContextState>({ authUser: null, setAuthUser: null });