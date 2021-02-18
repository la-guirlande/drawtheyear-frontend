import { CSSProperties, useMemo, useState } from 'react';
import { DayData } from '../../../../util/types/data-types';

interface MonthDayCellProps extends React.HTMLProps<HTMLAnchorElement> {
  dayofmonth: number;
  hoverText: string;
  day: DayData;
}


/**
 * Day cell component for month's view.
 * 
 * This component is a cell of the grid that contains a day.
 * 
 * @param dayofmonth Day of the month
 * @param hoverText Text showed on hover
 * @param day Day
 */
export const MonthDayCell: React.FC<MonthDayCellProps> = ({ dayofmonth, hoverText, day, ...rest  }) => {
  const [showHoverText, setShowHoverText] = useState(false);

  const style = useMemo<CSSProperties>(() => {
    if (day.emotions.length === 1) {
      return {
        backgroundColor: day.emotions[0].color
      };
    }
    let bgColor = 'linear-gradient(125deg, ';
    for (let i = 0; i < day.emotions.length; i++) {
      const isLast = i == (day.emotions.length - 1);
      const percent = i * 100 / (day.emotions.length - 1);
      bgColor += `${day.emotions[i].color} ${percent}%`;
      bgColor += isLast ? ')' : ', ';
    }
    return {
      background: bgColor
    };
  }, [day]);

  const toggleDetail = () => setShowHoverText(!showHoverText);

  return (
    <div className="m-2" onMouseEnter={toggleDetail} onMouseLeave={toggleDetail} >
      <a className="flex items-center justify-center text-center h-8 text-white border border-black rounded-tl-lg rounded-br-lg cursor-pointer" style={style} {...rest}>
        <span className="text-shadow-cell">{showHoverText ? hoverText : dayofmonth}</span>
      </a>
    </div>
  )
}
