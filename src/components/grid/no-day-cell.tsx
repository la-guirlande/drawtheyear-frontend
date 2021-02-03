import { useState } from 'react';

export interface NoDayCellProps extends React.HTMLProps<HTMLAnchorElement> {
  dayofmonth: number;
  hoverText: string;
}

export const NoDayCell: React.FC<NoDayCellProps> = ({ dayofmonth, hoverText, children, ...rest }) => {
  const [showHoverText, setShowHoverText] = useState(false);

  const toggleCreate = () => setShowHoverText(!showHoverText);

  return (
    <div className="z-0 relative transition duration-500 ease-in-out transform hover:z-10 hover:scale-125"  onMouseEnter={toggleCreate} onMouseLeave={toggleCreate}>
      <a className="flex items-center justify-center h-8 border border-solid border-black rounded text-center cell-empty cursor-pointer" {...rest}>
        <span>
          {showHoverText ? hoverText : dayofmonth}
        </span>
      </a>
    </div>
  );
}
