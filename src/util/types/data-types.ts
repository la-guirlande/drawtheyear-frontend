/**
 * ID interface.
 * 
 * This interface is used with data interfaces that have ID by extending this.
 */
interface ID {
    id?: string;
}

/**
 * Timestamps interface.
 * 
 * This interface is used with data interfaces that have timestamps by extending this.
 */
interface TimeStamps {
    createdAt: string;
    updatedAt: string;
}

/**
 * User data interface.
 */
export interface UserData extends ID, TimeStamps {
    email: string;
    name: string;
    password?: string;
    emotions: EmotionData[];
    days: DayData[];
}

/**
 * Emotion data interface.
 */
export interface EmotionData extends ID, TimeStamps {
    name: string;
    color: string;
    owner: UserData;
}

/**
 * Day data interface.
 */
export interface DayData extends TimeStamps {
    date: string;
    description: string;
    emotions: EmotionData[];
}

/**
 * Error data interface.
 */
export interface ErrorData {
    error: ErrorCode;
    error_description: string;
}

/**
 * Error code type.
 */
export type ErrorCode =
      'access_denied'
    | 'invalid_client'
    | 'invalid_grant'
    | 'invalid_request'
    | 'invalid_scope'
    | 'network_error'
    | 'not_found'
    | 'server_error'
    | 'temporarily_unavailable'
    | 'unauthorized_client'
    | 'unsupported_grant_type'
    | 'unsupported_response_type'
    | 'validation_failed';