import React, { useContext } from 'react';
import { AuthenticationContext } from '../contexts/authentication-context';

/**
 * Header component.
 */
export const Header: React.FC = () => {
  const { authUser } = useContext(AuthenticationContext);

  return (
    <header className="flex flex-col">
      <div className="flex flex-row justify-center my-8">
        <div className="text-2xl md:text-3xl font-quicksand font-medium">
          Good Morning<span className="text-primary ml-2 font-quicksand font-medium">{authUser?.name}</span> !
        </div>
      </div>
      <div className="flex flex-row justify-center my-4">
        <div className="text-1xl md:text-2xl font-quicksand font-medium mt-2">Enjoy your
        <span className="text-secondary-light ml-1 mr-1 font-quicksand font-medium"> wonderful </span> day </div>
      </div>
    </header>
  )
}
