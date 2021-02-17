import React from 'react';
import { Header } from './header';
import { Squares } from './squares';

/**
 * Home page component.
 */
export const HomePage: React.FC = () => (
  <div className="mt-3">
    <div className="container mx-auto scrollbar-styled">
      <Header />
      <div className="h-48 flex flex-wrap content-center">
        <div className="w-full md:w-1/2 mb-5 md:mb-0 text-center">
          <h2 className="text-2xl">News</h2>
        </div>
        <div className="w-full md:w-1/2 text-center">
          <h2 className="text-2xl">Activity</h2>
        </div>
      </div>
      <Squares count={10} size={[10, 100]} />
    </div>
  </div>
)
