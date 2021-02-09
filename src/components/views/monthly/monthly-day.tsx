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
    <div onMouseEnter={toggleDetail} onMouseLeave={toggleDetail} className="inline-block w-48 h-12 border border-black rounded-tl-lg rounded-br-lg bg-red bg-secondary text-white text-center align-middle m-2">
      <a className="w-auto flex items-center justify-center h-8 border border-solid border-black rounded text-center cursor-pointer" style={{ backgroundColor: day.emotions[0].color }} {...rest}>
        <span className="text-shadow-cell">{showHoverText ? hoverText : dayofmonth}</span>
      </a>
    </div>
  )
}
