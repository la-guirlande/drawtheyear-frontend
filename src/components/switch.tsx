import classNames from 'classnames';
import { ChangeEvent, FC, InputHTMLAttributes, useState } from 'react';
import { OutlineProps, SizeProps, VariantProps } from '../types/props';

/**
 * Switch (checkbox) form component props.
 */
export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps, OutlineProps, SizeProps {
  label?: string;
}

/**
 * Switch (checkbox) form component.
 */
export const Switch: FC<SwitchProps> = ({ id, className, variant, outline, componentSize, checked: inputChecked, label, ...props }) => {
  const [checked, setChecked] = useState<boolean>(inputChecked);

  const handleToggleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  }
  
  return (
    <>
      <input type="checkbox" id={id} {...props} checked={checked} onChange={handleToggleCheck} hidden />
      <label htmlFor={id}>
        <div className="flex flex-row space-x-2">
          <div className={classNames(
            className,
            { 'w-10 h-5': componentSize === 'sm' }, { 'w-12 h-6': componentSize === 'md' }, { 'w-14 h-7': componentSize === 'lg' },
            'p-0.5',
            'rounded-full',
            { 'ring-2': outline }, { [`ring-${variant}-dark`]: outline && checked }, { 'ring-gray-800': outline && !checked },
            { [`bg-${variant}-dark`]: !outline && checked }, { 'bg-gray-800': !outline && !checked },
            'cursor-pointer'
          )}>
            <div className={classNames(
              'w-1/2 h-full',
              'rounded-full',
              'bg-white',
              'transform', { 'translate-x-full': checked }, { 'translate-x-0': !checked },
              'transition-transform'
            )}></div>
          </div>
          {label && <div>{label}</div>}
        </div>
      </label>
    </>
  );
}

Switch.defaultProps = {
  variant: 'primary',
  outline: false,
  componentSize: 'md',
  label: null
}
