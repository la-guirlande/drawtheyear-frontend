import React from 'react';

/**
 * Icon type.
 */
export type IconType
  = 'cloud'
  | 'dehaze'
  | 'close';

/**
 * Icon component props.
 */
interface IconProps {
  type: IconType;
}

/**
 * Icon component.
 * 
 * @param type Icon type
 */
export const Icon: React.FC<IconProps> = (props) => (
  <i className="material-icons align-middle">{props.type}</i>
)
