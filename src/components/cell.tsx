import { DayData } from '../util/types/data-types'

export type CellProps = {
  num?: number;
  day?: DayData;
}

export const Cell: React.FC<CellProps> = ({ num, day }) => {
  if (day) {
    return (
      <td>{num} - Day : {day.description}</td>
    );
  }
  if (num) {
    return (
      <td>{num} - Nope</td>
    );
  }
  return (
    <td>----------</td>
  );
}