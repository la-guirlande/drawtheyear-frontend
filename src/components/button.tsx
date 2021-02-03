import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Button props.
 */
export interface ButtonProps {
  href?: string;
  className?: string;
  onClick?(): void;
}

/**
 * Button component.
 */
export const Button: React.FC<ButtonProps> = ({ href, className, children, ...rest }) => {
  if (href) {
    return (
      <Link className={`inline-block px-3 py-2 rounded-md font-medium focus:outline-none waves-effect ${className}`} to={href} {...rest}>{children}</Link>
    );
  }
  return (
    <button className={`inline-block px-3 py-2 rounded-md font-medium focus:outline-none waves-effect ${className}`} {...rest}>{children}</button>
  );
}
