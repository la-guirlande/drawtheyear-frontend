export const EmptyCell: React.FC = ({ children, ...rest }) => (
  <div className="relative">
    <a className="flex items-center justify-center h-8 border border-solid border-black rounded text-center cell-no-day" {...rest}></a>
  </div>
);
