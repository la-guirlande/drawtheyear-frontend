import React from 'react';

/**
 * Header component.
 */
export const Header: React.FC = () => (
  <header className="text-center">
    <h1 className="text-5xl md:text-7xl font-primary">DrawTheYear</h1>
    <h2 className="text-2xl md:text-4xl">Online <span className="text-primary">Year in pixels</span></h2>
  </header>
)
