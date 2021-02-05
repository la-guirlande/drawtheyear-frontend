import { useState } from 'react';

/**
 * No day cell props.
 */
export interface NoDayCellProps extends React.HTMLProps<HTMLAnchorElement> {
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
export const NoDayCell: React.FC<NoDayCellProps> = ({ dayofmonth, hoverText, children, ...rest }) => {
  const [showHoverText, setShowHoverText] = useState(false);

  const toggleCreate = () => setShowHoverText(!showHoverText);

  return (
    <div className="z-0 relative transition duration-500 ease-in-out transform hover:z-10 hover:scale-125" onMouseEnter={toggleCreate} onMouseLeave={toggleCreate}>
      <a className="flex items-center justify-center h-8 border border-solid border-black rounded text-center cell-empty cursor-pointer" {...rest}>
        <span>{showHoverText ? hoverText : dayofmonth}</span>
      </a>
    </div>
  );
}
