import React from 'react';
import { Link } from 'react-router-dom';
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
                <NavLink active={props.active === 'grid'}>
                    <Link to="/grid">Grille</Link>
                </NavLink>
            </li>
            <li>
                <NavLink active={props.active === 'stats'}>
                    <Link to="/stats">Statistiques</Link>
                </NavLink>
            </li>
        </ul>
    ) : (
        <div className="ml-10 flex items-baseline space-x-4">
            <NavLink active={props.active === 'grid'}>
                <Link to="/grid">Grille</Link>
            </NavLink>
            <NavLink active={props.active === 'stats'}>
                <Link to="/stats">Statistiques</Link>
            </NavLink>
        </div>
    );
}

NavMenu.defaultProps = {
    active: null,
    list: false
}