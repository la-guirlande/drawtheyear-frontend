import moment from 'moment';
import React from 'react';

/**
 * Footer component.
 */
export const Footer: React.FC = () => (
    <footer className="text-sm text-center">
        <p>Copyright © DTY {moment(new Date()).format('YYYY')}</p>
        <p>Made with <span className="text-red-500">♥</span> by Lelberto</p>
    </footer>
)
