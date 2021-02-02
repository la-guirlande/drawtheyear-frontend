import { useState } from 'react';

export interface EmptyCellProps extends React.HTMLProps<HTMLAnchorElement> {
  dayofmonth: number;
}

export const EmptyCell: React.FC<EmptyCellProps> = ({ dayofmonth, children, ...rest }) => {
  const [showCreateText, setShowCreateText] = useState(false);

  const toggleCreate = () => setShowCreateText(!showCreateText);

  return (
    <div className="z-0 relative transition duration-500 ease-in-out transform hover:z-10 hover:scale-125"  onMouseEnter={toggleCreate} onMouseLeave={toggleCreate}>
      <a className="flex items-center justify-center h-8 border border-solid border-black rounded text-center cell-empty cursor-pointer" {...rest}>
        <span>
          {showCreateText ? 'Créer' : dayofmonth}
        </span>
      </a>
    </div>
  );
}
