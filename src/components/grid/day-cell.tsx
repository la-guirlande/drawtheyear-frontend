import { useState } from 'react';
import { DayData } from '../../util/types/data-types';

export interface DayCellProps extends React.HTMLProps<HTMLAnchorElement> {
  dayofmonth: number;
  day: DayData;
}

export const DayCell: React.FC<DayCellProps> = ({ dayofmonth, day, children, ...rest }) => {
  const [showDetailText, setShowDetailText] = useState(false);

  const toggleDetail = () => setShowDetailText(!showDetailText);

  return (
    <div className="z-0 relative transition duration-500 ease-in-out transform hover:z-10 hover:scale-125" onMouseEnter={toggleDetail} onMouseLeave={toggleDetail}>
      <a className="w-auto flex items-center justify-center h-8 border border-solid border-black rounded text-center cursor-pointer" style={{ backgroundColor: day.emotions[0].color }} {...rest}>
        <span className="text-shadow-cell">
          {showDetailText ? 'Détails' : dayofmonth}
        </span>
      </a>
    </div>
  );
}
