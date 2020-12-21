import React from 'react';

/**
 * Navbar link props.
 */
interface NavLinkProps {
    href?: string;
    active?: boolean;
    onClick?: () => void;
}

/**
 * Navbar link component.
 * 
 * @param href Href
 * @param active True to render link as active
 */
export const NavLink: React.FC<NavLinkProps> = (props) => {
    return props.active ? (
        <a href={props.href} className="px-3 py-2 rounded-md font-medium bg-primary-dark hover:bg-primary waves-effect" onClick={props.onClick}>{props.children}</a>
    ) : (
        <a href={props.href} className="px-3 py-2 rounded-md font-medium hover:bg-secondary waves-effect" onClick={props.onClick}>{props.children}</a>
    )
}