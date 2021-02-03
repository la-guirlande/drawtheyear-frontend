import React from 'react';

/**
 * Navbar link props.
 */
interface NavLinkProps extends React.HTMLProps<HTMLDivElement> {
  active?: boolean;
}

/**
 * Navbar link component.
 * 
 * @param href Href
 * @param active True to render link as active
 */
export const NavLink: React.FC<NavLinkProps> = ({ active, children, ...rest }) => {
  return active ? (
    <div className="px-3 py-2 rounded-md font-medium bg-primary-dark hover:bg-primary waves-effect" {...rest}>{children}</div>
  ) : (
    <div className="px-3 py-2 rounded-md font-medium hover:bg-secondary waves-effect" {...rest}>{children}</div>
  )
}
