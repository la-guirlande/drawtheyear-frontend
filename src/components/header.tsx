import React from 'react';
import illustration from '../assets/img/Calendar_illu.png';

/**
 * Header component.
 */
export const Header: React.FC = () => (
  <header className="">
    <div className="shadow-2xl p-6 w-2/4 rounded-lg bg-secondary-dark mx-auto my-8 mt-40">
      <div className="text-2xl md:text-3xl flex flex-row h-10 ">Good Morning!
        <span className="text-primary ml-2"> Miki</span>
        <img className="-mt-40 ml-24 h-1/4-screen" src={illustration} alt="Calendar"/>
      </div>
    </div>
  </header>
)
