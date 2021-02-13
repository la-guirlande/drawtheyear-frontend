import { useState } from 'react';

/**
 * No day cell props.
 */
export interface MonthNoDayCellProps extends React.HTMLProps<HTMLAnchorElement> {
  dayofmonth: number;
  hoverText: string;
}

/**
 * No day cell component.
 * 
 * This component is a cell of the grid that contains an empty day.
 * 
 * @param dayofmonth Day of the month
 * @param hoverText Text showed on hover
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const MonthNoDayCell: React.FC<MonthNoDayCellProps> = ({ dayofmonth, hoverText, children, ...rest }) => {
  const [showHoverText, setShowHoverText] = useState(false);

  const toggleCreate = () => setShowHoverText(!showHoverText);

  return (
    <div className="m-2" onMouseEnter={toggleCreate} onMouseLeave={toggleCreate}>
      <a className="flex items-center justify-center text-center h-8 text-white border border-black rounded-tl-lg rounded-br-lg cursor-pointer cell-empty" {...rest}>
        <span className="text-shadow-cell">{showHoverText ? hoverText : dayofmonth}</span>
      </a>
    </div>
  );
}
