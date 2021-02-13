import { useState } from "react";
import { DayData } from "../../../util/types/data-types"

interface MonthlyDayProps extends React.HTMLProps<HTMLAnchorElement> {
  dayofmonth: number;
  hoverText: string;
  day: DayData;
}

/**
 * Balise d'un jour.
 */
export const MonthlyDay: React.FC<MonthlyDayProps> = ({ dayofmonth, hoverText, day, children, ...rest  }) => {
  const [showHoverText, setShowHoverText] = useState(false);

  const toggleDetail = () => setShowHoverText(!showHoverText);

  return (
    <div className="m-2" onMouseEnter={toggleDetail} onMouseLeave={toggleDetail} >
      <a className="flex items-center justify-center text-center h-8 text-white border border-black rounded-tl-lg rounded-br-lg cursor-pointer" style={{ backgroundColor: day.emotions[0].color }} {...rest}>
        <span className="text-shadow-cell">{showHoverText ? hoverText : dayofmonth}</span>
      </a>
    </div>
  )
}
