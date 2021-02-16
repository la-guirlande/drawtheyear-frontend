import moment from 'moment';
import React from 'react';

/**
 * Footer component.
 */
export const Footer: React.FC = () => (
  <div className="w-full mx-auto bottom-0 absolute">
    <hr className="my-3 bg-light"></hr>
    <footer className="text-sm text-center">
      <p>Copyright © DTY {moment(new Date()).format('YYYY')}</p>
      <p>Made with <span className="text-red-500">♥</span> by the <span className="text-primary-light">CobaTeam</span></p>
    </footer>
  </div>
)
