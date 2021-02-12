import moment from 'moment';
import React from 'react';

/**
 * Footer component.
 */
export const Footer: React.FC = () => (
  <div className="container mx-auto bottom-0 absolute">
    <hr className="my-3 bg-light ml-16"></hr>
    <footer className="text-sm text-center">
      <p>Copyright © DTY {moment(new Date()).format('YYYY')}</p>
      <p>Made with <span className="text-red-500">♥</span> by the <span className="text-primary-light">CobaTeam</span></p>
    </footer>
  </div>
)
