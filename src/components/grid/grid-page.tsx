import React from 'react';
import { MonthlyContainer } from '../views/monthly/monthly-container';
import { GridContainer } from './grid-container';

/**
 * Grid page component.
 */
export const GridPage: React.FC = () => {
  return (
    <div className="mt-3">
      <MonthlyContainer />
      {/* <GridContainer /> */}
    </div>
  );
}
