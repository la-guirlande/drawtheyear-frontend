import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { GridContainer } from './grid-container';

/**
 * Grid page component.
 */
export const GridPage: React.FC = () => {
  const { username } = useParams<{ username: string; }>();

  return (
    <>
      <Helmet>
        <title>{username} - DrawTheYear</title>
      </Helmet>
      <div className="mt-3">
        <GridContainer />
      </div>
    </>
  );
}
