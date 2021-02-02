import moment from 'moment';
import React from 'react';
import { DayData, UserData } from '../../util/types/data-types'
import { DayCell } from './day-cell';
import { EmptyCell } from './empty-cell';
import { NoDayCell } from './no-day-cell';

export type GridProps = {
  user: UserData;
  year?: number;
}

export const Grid: React.FC<GridProps> = ({ user, year }) => {

  const generateColumn = (month: number) => {
    const colDays: { row: number, day?: DayData }[] = [];
    for (let i = 1; i <= 31; i++) {
      const day = user.days.find(day => {
        const date = new Date(day.date);
        return date.getFullYear() === year && date.getMonth() + 1 === month && date.getDate() === i && date.getMonth() !== 5;
      });
      colDays.push({ row: i, day });
    }
    return colDays.map(({ row, day }, i) => {
      if (cellNotDay(row, month)) {
        return <NoDayCell key={`${month}-${i}`} />
      }
      if (day) {
        return <DayCell key={`${month}-${i}`} dayofmonth={row} day={day} href={`/grid/${user.name}/day/${day.date}`} />
      }
      const dateStr = moment(`${year}-${month}-${row}`).format('YYYY-MM-DD');
      return <EmptyCell key={`${month}-${i}`} dayofmonth={row} href={`/grid/${user.name}/day/add?date=${dateStr}`} />
    });
  }

  const cellNotDay = (row: number, column: number) => {
    const isLeap = (year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0));
    return (column === 2 && row > (isLeap ? 29 : 28)) || ((column === 4 || column === 6 || column === 9 || column === 11) && row > 30) || (row > 31) || (column > 12);
  }

  return (
    <div className="grid grid-cols-12">
      <div>
        <div className="my-5 text-center text-primary transform -rotate-45">Janvier</div>
        {generateColumn(1)}
      </div>
      <div>
        <div className="my-5 text-center text-primary transform -rotate-45">Février</div>
        {generateColumn(2)}
      </div>
      <div>
        <div className="my-5 text-center text-primary transform -rotate-45">Mars</div>
        {generateColumn(3)}
      </div>
      <div>
        <div className="my-5 text-center text-primary transform -rotate-45">Avril</div>
        {generateColumn(4)}
      </div>
      <div>
        <div className="my-5 text-center text-primary transform -rotate-45">Mai</div>
        {generateColumn(5)}
      </div>
      <div>
        <div className="my-5 text-center text-primary transform -rotate-45">Juin</div>
        {generateColumn(6)}
      </div>
      <div>
        <div className="my-5 text-center text-primary transform -rotate-45">Juillet</div>
        {generateColumn(7)}
      </div>
      <div>
        <div className="my-5 text-center text-primary transform -rotate-45">Août</div>
        {generateColumn(8)}
      </div>
      <div>
        <div className="my-5 text-center text-primary transform -rotate-45">Septembre</div>
        {generateColumn(9)}
      </div>
      <div>
        <div className="my-5 text-center text-primary transform -rotate-45">Octobre</div>
        {generateColumn(10)}
      </div>
      <div>
        <div className="my-5 text-center text-primary transform -rotate-45">Novembre</div>
        {generateColumn(11)}
      </div>
      <div>
        <div className="my-5 text-center text-primary transform -rotate-45">Décembre</div>
        {generateColumn(12)}
      </div>
    </div>
  );
}

Grid.defaultProps = {
  year: new Date().getFullYear()
}
