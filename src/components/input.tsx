import classNames from 'classnames';
import { FC, InputHTMLAttributes } from 'react';
import { SizeProps, VariantProps } from '../types/props';

/**
 * Input form component props.
 */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps, SizeProps {}

/**
 * Input form component.
 */
export const Input: FC<InputProps> = ({ className, variant, componentSize, ...props }) => (
  <input className={classNames(
    className,
    'max-w-md',
    { 'h-6 text-sm': componentSize === 'sm' }, { 'h-12 text-lg': componentSize === 'lg' },
    'px-2 py-1',
    'rounded-sm',
    'outline-none',
    `ring-4 ring-${variant}-dark ring-opacity-0 focus:ring-opacity-100`,
    'bg-white dark:bg-gray-800',
    'text-black dark:text-white placeholder-gray-500',
    'transition-all duration-200'
  )} {...props} />
);

Input.defaultProps = {
  variant: 'primary',
  componentSize: 'md'
}
