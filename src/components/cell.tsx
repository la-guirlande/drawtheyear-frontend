import ReactTooltip from 'react-tooltip'
import { DayData } from '../util/types/data-types'

export interface CellProps extends React.HTMLProps<HTMLAnchorElement> {
  num?: number;
  day?: DayData;
  href?: string;
}

export const Cell: React.FC<CellProps> = ({ num, day, ...rest }) => {
  if (day) {
    return (
      <div>
        <div className="z-0 relative transition duration-500 ease-in-out transform hover:z-10 hover:-rotate-12 hover:scale-125" data-tip data-for={`tooltip-${day.date}`}>
          <a className="flex items-center justify-center h-8 border border-solid border-black rounded text-center" style={{ backgroundColor: day.emotions[0].color }} {...rest}>{num}</a>
        </div>
        <ReactTooltip id={`tooltip-${day.date}`} backgroundColor="#3d0e1e">
          <div className="text-xl">{day.emotions.map(emotion => emotion.name).join(' & ')}</div>
          {day.description && <div className="max-w-xs text-lg text-justify">{day.description.length > 100 ? `${day.description.substring(0, 100)}...` : day.description}</div>}
        </ReactTooltip>
      </div>
    );
  }
  if (num) {
    return (
      <div className="z-0 relative transition duration-500 ease-in-out transform hover:z-10 hover:scale-125">
        <a className="flex items-center justify-center h-8 border border-solid border-black rounded text-center cell-empty" {...rest}>{num}</a>
      </div>
    );
  }
  return (
    <div className="relative">
      <a className="flex items-center justify-center h-8 border border-solid border-black rounded text-center cell-no-day" {...rest}></a>
    </div>
  );
}