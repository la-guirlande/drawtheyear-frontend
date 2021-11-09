import classNames from 'classnames';
import { FC } from 'react';
import { Link as BrowserLink, LinkProps as BrowserLinkProps } from 'react-router-dom';
import { SizeProps, VariantProps } from '../types/props';

/**
 * Link props.
 */
export interface LinkProps extends BrowserLinkProps, VariantProps, SizeProps {}

/**
 * Link component. 
 */
export const Link: FC<LinkProps> = ({ className, variant, componentSize, children, ...props }) => {
  return (
    <BrowserLink className={classNames(
      className,
      'px-4', { 'py-1 text-sm': componentSize === 'sm' }, { 'py-2': componentSize === 'md' }, { 'py-3 text-lg': componentSize === 'lg' },
      `hover:text-${variant} focus:text-${variant}`,
      'transition-colors duration-200'
    )} {...props} >{children}</BrowserLink>
  );
}

Link.defaultProps = {
  variant: 'primary',
  componentSize: 'md'
}