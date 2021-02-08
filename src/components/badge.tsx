import { FC, HTMLProps } from 'react';

/**
 * Badge component. 
 */
export const Badge: FC<HTMLProps<HTMLDivElement>> = ({ children, ...rest }) => (
  <div className="inline-block px-2 py-1 rounded-2xl text-sm border-2 border-opacity-30 border-light cursor-default text-shadow-cell transition hover:border-opacity-70" {...rest}>{children}</div>
);
