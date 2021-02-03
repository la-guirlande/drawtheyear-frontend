import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useFetch from '../hooks/fetch-hook';
import { Config } from '../util/config';
import { CreationResponse } from '../util/types/response-types';
import { AuthenticationContext } from './contexts/authentication-context';
import { CreateDayForm, CreateDayFormValues } from './create-day-form'
import { useQuery } from '../hooks/query-hook';
import moment from 'moment';

export const CreateDayContainer: React.FC = () => {
  const { authUser } = useContext(AuthenticationContext);
  const [createDayQuery, createDayQueryState] = useFetch<CreationResponse>();
  const history = useHistory();
  const query = useQuery();

  useEffect(() => {
    if (createDayQueryState.fetched) {
      if (createDayQueryState.data) {
        history.push(`/grid/${authUser.name}`);
      } else {
        console.log(createDayQueryState.errors);
      }
    }
  }, [createDayQueryState.fetched]);

  const handleSubmitCreateDayForm = (data: CreateDayFormValues) => {
    if (authUser) {
      createDayQuery.post(`${Config.API_URL}/users/${authUser.id}/days`, {
        date: data.date,
        description: data.description,
        emotions: data.emotions
      });
    }
  }

  return authUser && (
    <CreateDayForm emotions={authUser.emotions} date={query.has('date') ? query.get('date') : moment(new Date()).format('YYYY-MM-DD')} onSubmit={handleSubmitCreateDayForm} />
  );
}
