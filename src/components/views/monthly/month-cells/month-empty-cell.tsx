/**
 * Empty cell component.
 * 
 * This component is a cell that contains nothing because the corresponding day in grid (row and column) does not exists.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const MonthEmptyCell: React.FC = ({ children, ...rest }) => (
    <div className="m-2">
      <a className="flex items-center justify-center h-8 border border-solid border-black rounded-tl-lg rounded-br-lg text-center cell-no-day" {...rest}></a>
    </div>
  ); 
  