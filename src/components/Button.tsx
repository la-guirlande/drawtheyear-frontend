import classNames from 'classnames';
import { ButtonHTMLAttributes, FC } from 'react';
import { OutlineProps, SizeProps, VariantProps } from '../types/props';

/**
 * Button props.
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps, OutlineProps, SizeProps {}

/**
 * Button component. 
 */
export const Button: FC<ButtonProps> = ({ className, variant, outline, componentSize, children, ...props }) => (
  <button className={classNames(
    className,
    'px-4', { 'py-1': componentSize === 'sm' }, { 'py-2': componentSize === 'md' }, { 'py-3': componentSize === 'lg' },
    'rounded-sm',
    `ring-4 ring-${variant}-dark ring-opacity-0 focus:ring-opacity-100`,
    { [`ring-offset-1 ring-offset-${variant}-dark dark:ring-offset-${variant}-light focus:ring-offset-white`]: outline },
    { [`bg-${variant}-dark`]: !outline }, { [`bg-${variant}-dark bg-opacity-0`]: outline }, 'hover:bg-opacity-75 focus:bg-opacity-75',
    { 'text-white': !outline }, { [`text-${variant}-dark dark:text-${variant}-light hover:text-white focus:text-white`]: outline },
    'transition-all duration-200'
  )} {...props}>{children}</button>
);

Button.defaultProps = {
  variant: 'primary',
  outline: false,
  componentSize: 'md'
}
