import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthenticationContext } from '../contexts/authentication-context';
import { Icon } from '../icon';
import { NavLink } from './nav-link';
import { NavMenu } from './nav-menu';

/**
 * Navbar component.
 */
export const Navbar: React.FC = () => {
  const [dropdown, setDropdown] = useState(false);
  const { authUser, setAuthUser } = useContext(AuthenticationContext);

  const handleDisconnect = () => {
    setAuthUser(null);
    localStorage.clear();
  }

  return (
    <nav className="bg-secondary-dark">
      <div className="px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link className="waves-effect" to="/" href="#">
                <img className="w-8" src="https://icons-for-free.com/iconfiles/png/512/fireworks+new+year+party+icon-1320185813780531454.png" alt="DrawTheYear" />
              </Link>
            </div>
            <div className="hidden md:block">
              <NavMenu active="grid" />
            </div>
          </div>
          <div className="flex items-center">
            <NavLink>
              {authUser ? <a onClick={handleDisconnect}>Déconnexion</a> : <Link to="/signin">Connexion</Link>}
            </NavLink>
            <div className="md:hidden flex items-center">
              <NavLink onClick={() => setDropdown(!dropdown)}>
                <Icon type='dehaze' />
              </NavLink>
            </div>
          </div>
        </div>
        {dropdown && (
          <div className="md:hidden">
            <NavMenu list active="grid" />
          </div>
        )}
      </div>
    </nav>
  );
}
