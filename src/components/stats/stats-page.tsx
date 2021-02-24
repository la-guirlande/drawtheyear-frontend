import React from 'react';
import { Helmet } from 'react-helmet';
import { StatsContainer } from './stats-container';

export const StatsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Statistiques - DrawTheYear</title>
      </Helmet>
      <div className="mt-3">
        <StatsContainer />
      </div>
    </>
  );
}
