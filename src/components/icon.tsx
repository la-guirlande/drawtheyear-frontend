import React from 'react';

/**
 * Icon component props.
 */
interface IconProps {
    type: 'dehaze';
}

/**
 * Icon component.
 * 
 * @param type Icon type
 */
export const Icon: React.FC<IconProps> = (props) => (
    <i className="material-icons align-middle">{props.type}</i>
)
