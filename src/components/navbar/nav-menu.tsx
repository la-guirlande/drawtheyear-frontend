import React from 'react';
import { NavLink } from './nav-link';

/**
 * Nav menu component props.
 */
interface NavMenuProps {
    active?: null | 'grid' | 'stats';
    list?: boolean;
}

/**
 * Nav menu component.
 * 
 * @param active Nav menu to activate
 * @param list True to render menu as list
 */
export const NavMenu: React.FC<NavMenuProps> = (props) => {
    return props.list ? (
        <ul className="list-outside">
            <li>
                <NavLink href="#" active={props.active === 'grid'}>Grid</NavLink>
            </li>
            <li>
                <NavLink href="#" active={props.active === 'stats'}>Stats</NavLink>
            </li>
        </ul>
    ) : (
        <div className="ml-10 flex items-baseline space-x-4">
            <NavLink href="#" active={props.active === 'grid'}>Grid</NavLink>
            <NavLink href="#" active={props.active === 'stats'}>Stats</NavLink>
        </div>
    );
}

NavMenu.defaultProps = {
    active: null,
    list: false
}