import React from 'react';

/**
 * Navbar component.
 */
export const Navbar: React.FC = () => (
    <nav className="mb-3 bg-secondary-dark">
        <div className="px-4">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <img className="w-8" src="https://icons-for-free.com/iconfiles/png/512/fireworks+new+year+party+icon-1320185813780531454.png" alt="DrawTheYear" />
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <NavLink href="#" active>Home</NavLink>
                            <NavLink href="#">Grid</NavLink>
                            <NavLink href="#">Stats</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
)


/**
 * Navbar link props.
 */
interface NavLinkProps {
    href: string;
    active?: boolean;
}

/**
 * Navbar link component.
 * 
 * @param props Props
 */
export const NavLink: React.FC<NavLinkProps> = (props) => {
    return props.active ? (
        <a href={props.href} className="px-3 py-2 rounded-md font-medium bg-primary-dark hover:bg-primary">{props.children}</a>
    ) : (
        <a href={props.href} className="px-3 py-2 rounded-md font-medium hover:bg-secondary">{props.children}</a>
    )
}
