import { DayData } from '../util/types/data-types';
import { Cell } from './cell';
import { Row } from './row';

export type GrisContainerProps = {
  days: DayData[];
  year?: number;
}

export const GridContainer: React.FC<GrisContainerProps> = ({ days, year }) => {
  const createRow = (row: number) => {
    const gridDays: { column: number, day?: DayData }[] = [];
    for (let i = 1; i <= 12; i++) {
      const day = days.find(day => {
        const date = new Date(day.date);
        return date.getDate() === row && date.getMonth() + 1 === i;
      });
      gridDays.push({ column: i, day });
    }
    return (
      <Row>
        {gridDays.map(({ column, day }) => (<Cell num={isNotDay(row, column) ? null : row} day={day} />))}
      </Row>
    );
  }

  const isNotDay = (row: number, column: number) => {
    const isLeap = (year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0));
    return (column === 2 && row > (isLeap ? 29 : 28)) || ((column === 4 || column === 6 || column === 9 || column === 11) && row > 30) || (row > 31) || (column > 12);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Janvier</th>
          <th>Février</th>
          <th>Mars</th>
          <th>Avril</th>
          <th>Mai</th>
          <th>Juin</th>
          <th>Juillet</th>
          <th>Août</th>
          <th>Septembre</th>
          <th>Octobre</th>
          <th>Novembre</th>
          <th>Décembre</th>
        </tr>
      </thead>
      <tbody>
        {createRow(1)}
        {createRow(2)}
        {createRow(3)}
        {createRow(4)}
        {createRow(5)}
        {createRow(6)}
        {createRow(7)}
        {createRow(8)}
        {createRow(9)}
        {createRow(10)}
        {createRow(11)}
        {createRow(12)}
        {createRow(13)}
        {createRow(14)}
        {createRow(15)}
        {createRow(16)}
        {createRow(17)}
        {createRow(18)}
        {createRow(19)}
        {createRow(20)}
        {createRow(21)}
        {createRow(22)}
        {createRow(23)}
        {createRow(24)}
        {createRow(25)}
        {createRow(26)}
        {createRow(27)}
        {createRow(28)}
        {createRow(29)}
        {createRow(30)}
        {createRow(31)}
      </tbody>
    </table>
  );
}

GridContainer.defaultProps = {
  year: new Date().getFullYear()
}
