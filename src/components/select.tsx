import classNames from 'classnames';
import { FC, OptionHTMLAttributes, SelectHTMLAttributes } from 'react';
import { SizeProps, VariantProps } from '../types/props';

/**
 * Select form component props.
 */
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>, VariantProps, SizeProps {}

/**
 * Select form component.
 */
export const Select: FC<SelectProps> = ({ className, variant, componentSize, defaultValue, children, ...props }) => (
  <select className={classNames(
    className,
    'appearance-none',
    { 'h-6 text-sm': componentSize === 'sm' }, { 'h-12 text-lg': componentSize === 'lg' },
    'px-2 py-1',
    'rounded-sm',
    'outline-none',
    `ring-4 ring-${variant}-dark ring-opacity-0 focus:ring-opacity-100`,
    'bg-white dark:bg-gray-900',
    'text-black dark:text-white placeholder-gray-500',
    'transition-all duration-200'
  )} {...props}>
    {children}
  </select>
);

Select.defaultProps = {
  variant: 'primary',
  componentSize: 'md'
}

export interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {}

export const Option: FC<OptionProps> = ({ className, children, ...props }) => (
  <option className={classNames(
    className,
    'h-20'
  )} {...props}>
    {children}
  </option>
);
