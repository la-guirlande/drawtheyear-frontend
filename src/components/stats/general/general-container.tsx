import { useContext, useEffect, useState } from 'react';
import utils from '../../../util/utils';
import { AuthenticationContext } from '../../contexts/authentication-context';
import { ControlForm, ControlFormValues } from './control-form'
import { ChartData, EmotionsDistribution } from './emotions-distribution'

export const GeneralContainer: React.FC = () => {
  const { authUser } = useContext(AuthenticationContext);
  const [globalData, setGlobalData] = useState<ChartData[]>([]);
  const [monthData, setMonthData] = useState<ChartData[]>([]);
  const [date, setDate] = useState<{ year: number, month: number }>({ year: new Date().getFullYear(), month: new Date().getMonth() });

  useEffect(() => {
    if (authUser) {
      setGlobalData(authUser.emotions.map(emotion => ({
        id: emotion.id,
        label: emotion.name,
        color: emotion.color,
        value: authUser.days.filter(day => day.emotions.map(emotion => emotion.id).includes(emotion.id)).length
      })));
    }
  }, [authUser]);

  useEffect(() => {
    if (authUser) {
      setGlobalData(authUser.emotions.map(emotion => ({
        id: emotion.id,
        label: emotion.name,
        color: emotion.color,
        value: authUser.days.filter(day => day.emotions.map(emotion => emotion.id).includes(emotion.id)).length
      })));
    }
  }, [authUser]);

  const handleMonthChange = (data: ControlFormValues) => {
    const year = parseInt(data.year);
    const month = parseInt(data.month);
    setDate({ year, month });
    if (authUser) {
      setMonthData(authUser.emotions.map(emotion => ({
        id: emotion.id,
        label: emotion.name,
        color: emotion.color,
        value: authUser.days.filter(day => new Date(day.date).getFullYear() === year && new Date(day.date).getMonth() === month && day.emotions.map(emotion => emotion.id).includes(emotion.id)).length
      })));
      console.log(authUser.days.filter(day => new Date(day.date).getFullYear() === year && new Date(day.date).getMonth() === month));
    }
  }

  return (
    <div>
      <div className="bg-secondary-dark">
        <ControlForm onSubmit={handleMonthChange} />
      </div>
      <div className="flex flex-wrap content-center text-center">
        <div className="my-2 w-full h-96">
          <h2 className="text-2xl">Global</h2>
          <EmotionsDistribution data={globalData} />
        </div>
        <div className="my-2 w-full h-96">
          <h2 className="text-2xl">{utils.monthMap.get(date.month)} {date.year}</h2>
          {monthData?.some(data => data.value > 0) ? <EmotionsDistribution data={monthData} /> : 'Aucune donnée'}
        </div>
      </div>
    </div>
  );
}
