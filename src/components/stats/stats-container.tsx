import React, { useContext, useEffect, useState } from 'react'
import { AuthenticationContext } from '../contexts/authentication-context'
import { ChartData, EmotionsDistribution } from './emotions-distribution';

export const StatsContainer: React.FC = () => {
  const { authUser } = useContext(AuthenticationContext);
  const [globalData, setGlobalData] = useState<ChartData[]>([]);
  const [monthData, setMonthData] = useState<ChartData[]>([]);
  const [month, setMonth] = useState(0);

  useEffect(() => {
    if (authUser) {
      setGlobalData(authUser.emotions.map(emotion => ({
        id: emotion.name,
        label: emotion.name,
        color: emotion.color,
        value: authUser.days.filter(day => day.emotions.map(emotion => emotion.id).includes(emotion.id)).length
      })));
    }
  }, [authUser]);

  useEffect(() => {
    if (authUser) {
      setMonthData(authUser.emotions.map(emotion => ({
        id: emotion.name,
        label: emotion.name,
        color: emotion.color,
        value: authUser.days.filter(day => new Date(day.date).getMonth() === month && day.emotions.map(emotion => emotion.id).includes(emotion.id)).length
      })));
    }
  }, [authUser, month]);

  return authUser && (
    <div className="container h-screen">
      <EmotionsDistribution data={globalData} />
      <select onChange={e => setMonth(parseInt(e.target.value))}>
        <option value={0}>Janvier</option>
        <option value={1}>Février</option>
        <option value={2}>Mars</option>
        <option value={3}>Avril</option>
        <option value={4}>Mai</option>
        <option value={5}>Juin</option>
        <option value={6}>Juillet</option>
        <option value={7}>Août</option>
        <option value={8}>Septembre</option>
        <option value={9}>Octobre</option>
        <option value={10}>Novembre</option>
        <option value={11}>Décembre</option>
      </select>
      <EmotionsDistribution data={monthData} />
    </div>
  );
}
