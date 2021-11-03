import classNames from 'classnames';
import { ButtonHTMLAttributes, FC } from 'react';
import { VariantProps } from '../types/variants';

/**
 * Button props.
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps {
  outline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Button component. 
 */
export const Button: FC<ButtonProps> = ({ className, variant, outline, size, children, ...props }) => (
  <button className={classNames(
    className,
    'px-4', { 'py-1': size === 'sm' }, { 'py-2': size === 'md' }, { 'py-3': size === 'lg' },
    'font-quicksand-book',
    'rounded-sm',
    `ring-4 ring-offset-1 ring-${variant}-dark ring-opacity-0 focus:ring-opacity-100`,
    { [`ring-offset-${variant}-dark dark:ring-offset-${variant}-light focus:ring-offset-white`]: outline },
    { [`bg-${variant}-dark`]: !outline }, { [`bg-${variant}-dark bg-opacity-0`]: outline }, 'hover:bg-opacity-75 focus:bg-opacity-75',
    { 'text-white': !outline }, { [`text-${variant}-dark dark:text-${variant}-light hover:text-white focus:text-white`]: outline },
    'transition-all duration-200'
  )} {...props}>{children}</button>
);

Button.defaultProps = {
  variant: 'primary',
  outline: false,
  size: 'md'
}
