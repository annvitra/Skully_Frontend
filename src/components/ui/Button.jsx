import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @typedef {object} ButtonProps
 * @property {React.ReactNode} children
 * @property {'primary' | 'accent' | 'outline' | 'ghost'} [variant='primary']
 * @property {'sm' | 'md' | 'lg'} [size='md']
 * @property {string} [to]
 * @property {() => void} [onClick]
 * @property {string} [className='']
 * @property {boolean} [fullWidth=false]
 * @property {'button' | 'submit' | 'reset'} [type='button']
 * @property {boolean} [disabled=false]
 */

/**
 * @param {ButtonProps} props
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  onClick,
  className = '',
  fullWidth = false,
  type = 'button',
  disabled = false
}) => {
  const baseStyles = 'font-roboto font-medium rounded-md transition-all duration-200 flex items-center justify-center';
  const variantStyles = {
    primary: 'bg-primary hover:bg-primary-dark text-white',
    accent: 'bg-accent hover:bg-accent-dark text-white',
    outline: 'bg-transparent border border-primary text-primary hover:bg-primary/10',
    ghost: 'bg-transparent text-primary hover:bg-primary/10'
  };
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'px-4 py-2',
    lg: 'text-lg px-6 py-3'
  };
  const widthStyle = fullWidth ? 'w-full' : '';
  const disabledStyle = disabled ? 'opacity-60 cursor-not-allowed' : '';
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${disabledStyle} ${className}`;
  if (to) {
    return <Link to={to} className={buttonClasses}>
        {children}
      </Link>;
  }
  return <button type={type} className={buttonClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>;
};
export default Button;