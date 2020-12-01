import moment from 'moment';
import React from 'react';

/**
 * Footer component.
 */
export const Footer: React.FC = () => (
    <footer className="text-sm text-center">
        <p>Copyright © DTY {moment(new Date()).format('YYYY')}</p>
        <p>Made with <span className="text-red-500">♥</span> by <span className="text-primary-light">Lelberto</span> and <span className="text-primary-light">Faichyer</span></p>
    </footer>
)
