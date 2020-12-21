import React, { useState } from 'react';
import { Icon } from '../icon';
import { NavMenu } from './nav-menu';

/**
 * Navbar component.
 */
export const Navbar: React.FC = () => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <nav className="mb-3 bg-secondary-dark">
            <div className="px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <a className="waves-effect" href="#">
                                <img className="w-8" src="https://icons-for-free.com/iconfiles/png/512/fireworks+new+year+party+icon-1320185813780531454.png" alt="DrawTheYear" />
                            </a>
                        </div>
                        <div className="hidden md:block">
                            <NavMenu active="grid" />
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="inline-block px-6 py-2 leading-6 text-center text-light transition focus:outline-none waves-effect" onClick={() => setDropdown(!dropdown)}>
                            <Icon type='dehaze' />
                        </button>
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
