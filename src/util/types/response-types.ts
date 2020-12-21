import { DayData, ErrorData, UserData } from './data-types';

/**
 * Base API response interface.
 */
export interface Response {
    [key: string]: unknown;
}

/**
 * Error response interface.
 */
export interface ErrorResponse extends Response {
    errors: ErrorData[];
}

/**
 * Access token response interface.
 */
export interface AccessTokenResponse extends Response {
    access_token: string;
}

/**
 * Refresh token response interface.
 */
export interface RefreshTokenResponse extends Response {
    access_token: string;
    refresh_token: string;
}

/**
 * Creation response interface.
 * 
 * This API response is returned by any `POST` that creates a new resource.
 */
export interface CreationResponse extends Response {
    id: string;
}

/**
 * Get users response interface.
 * 
 * This response is returned by `GET /users`.
 */
export interface GetUsersResponse extends Response {
    users: UserData[];
}

/**
 * Get user response interface.
 * 
 * This response is returned by `GET /users/:id`.
 */
export interface GetUserResponse extends Response {
    user: UserData;
}

/**
 * Get days response interface.
 * 
 * This response is returned by `GET /users/:id/days`.
 */
export interface GetDaysResponse extends Response {
    days: DayData[];
}

/**
 * Get day response interface.
 * 
 * This response is returned by `GET /users/:id/days/:date`.
 */
export interface GetDayResponse extends Response {
    day: DayData;
}
