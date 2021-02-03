import { ErrorData } from '../util/types/data-types';
import { Response } from '../util/types/response-types';

/**
 * Action type for the fetch reducer.
 */
export type FetchReducerAction<R extends Response>
  = { type: 'INIT' }
  | { type: 'SUCCESS', payload: R }
  | { type: 'ERROR', payload: ErrorData[] };

/**
 * State interface for the fetch reducer.
 */
export interface FetchReducerState<R extends Response> {
  fetched: boolean;
  data: R;
  errors: ErrorData[];
}

/**
 * Fetch reducer.
 * 
 * This reducer is used to manage the state of an API response.
 * 
 * @param state State to process
 * @param action Action to process for the given state
 */
const fetchReducer = <R extends Response>(state: FetchReducerState<R>, action: FetchReducerAction<R>): FetchReducerState<R> => {
  switch (action.type) {
    case 'INIT':
      return { ...state, fetched: false };
    case 'SUCCESS':
      return { fetched: true, data: action.payload, errors: [] };
    case 'ERROR':
      return { fetched: true, data: null, errors: action.payload };
    default: throw new Error('Unknown action');
  }
}

export default fetchReducer;
