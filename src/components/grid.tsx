import React from 'react';
import { DayData, UserData } from '../util/types/data-types'
import { Cell } from './cell';
import { Row } from './row';

export type GridProps = {
  user: UserData;
  year?: number;
}

export const Grid: React.FC<GridProps> = ({ user, year }) => {
  const createRow = (row: number) => {
    const gridDays: { column: number, day?: DayData }[] = [];
    for (let i = 1; i <= 12; i++) {
      const day = user.days.find(day => {
        const date = new Date(day.date);
        return date.getFullYear() === year && date.getMonth() + 1 === i && date.getDate() === row;
      });
      gridDays.push({ column: i, day });
    }
    return (
      <Row>
        {gridDays.map(({ column, day }, i) => (<Cell key={i} num={cellNotDay(row, column) ? null : row} day={day} />))}
      </Row>
    );
  }

  const cellNotDay = (row: number, column: number) => {
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

Grid.defaultProps = {
  year: new Date().getFullYear()
}
