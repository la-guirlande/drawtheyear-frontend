import { useState } from 'react';
import { DayData } from '../../util/types/data-types';

/**
 * Day cell props.
 */
export interface DayCellProps extends React.HTMLProps<HTMLAnchorElement> {
  dayofmonth: number;
  hoverText: string;
  day: DayData;
}

/**
 * Day cell component.
 * 
 * This component is a cell of the grid that contains a day.
 * 
 * @param dayofmonth Day of the month
 * @param hoverText Text showed on hover
 * @param day Day
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const DayCell: React.FC<DayCellProps> = ({ dayofmonth, hoverText, day, children, ...rest }) => {
  const [showHoverText, setShowHoverText] = useState(false);

  const toggleDetail = () => setShowHoverText(!showHoverText);

  return (
    <div className="z-0 relative transition duration-500 ease-in-out transform hover:z-10 hover:scale-125" onMouseEnter={toggleDetail} onMouseLeave={toggleDetail}>
      <a className="w-auto flex items-center justify-center h-8 border border-solid border-black rounded text-center cursor-pointer" style={{ backgroundColor: day.emotions[0].color }} {...rest}>
        <span className="text-shadow-cell">{showHoverText ? hoverText : dayofmonth}</span>
      </a>
    </div>
  );
}
