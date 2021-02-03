import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthenticationContext } from '../contexts/authentication-context';
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
  const { authUser } = useContext(AuthenticationContext);

  return props.list ? (
    <ul className="list-outside">
      {authUser && (
        <li>
          <NavLink active={props.active === 'grid'}>
            <Link to={`/grid/${authUser.name}`}>Grille</Link>
          </NavLink>
        </li>
      )}
      {authUser && (
        <li>
          <NavLink active={props.active === 'stats'}>
            <Link to="/stats">Statistiques</Link>
          </NavLink>
        </li>
      )}
    </ul>
  ) : (
      <div className="ml-10 flex items-baseline space-x-4">
        {authUser && (
          <NavLink active={props.active === 'grid'}>
            <Link to={`/grid/${authUser.name}`}>Grille</Link>
          </NavLink>
        )}
        {authUser && (
          <NavLink active={props.active === 'stats'}>
            <Link to="/stats">Statistiques</Link>
          </NavLink>
        )}
      </div>
    );
}

NavMenu.defaultProps = {
  active: null,
  list: false
}
