import React, { useContext } from 'react';
import { Button } from '../button';
import { AuthenticationContext } from '../contexts/authentication-context';

/**
 * Nav menu component props.
 */
interface NavMenuProps {
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
          <Button href={`/grid/${authUser.name}`}>Grille</Button>
        </li>
      )}
      {authUser && (
        <li>
          <Button href="/stats">Statistiques</Button>
        </li>
      )}
    </ul>
  ) : (
      <div className="ml-10 flex items-baseline space-x-4">
        {authUser && (
          <Button href={`/grid/${authUser.name}`}>Grille</Button>
        )}
        {authUser && (
          <Button href="/stats">Statistiques</Button>
        )}
      </div>
    );
}

NavMenu.defaultProps = {
  list: false
}
