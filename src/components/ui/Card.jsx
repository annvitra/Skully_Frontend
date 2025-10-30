import React from 'react';

/**
 * @typedef {object} CardProps
 * @property {React.ReactNode} children
 * @property {string} [className='']
 * @property {boolean} [hover=true]
 */

/**
 * @param {CardProps} props
 */
const Card = ({
  children,
  className = '',
  hover = true
}) => {
  const hoverClasses = hover ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30' : '';
  return <div className={`bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden ${hoverClasses} ${className}`}>
      {children}
    </div>;
};
/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className='']
 */
export const CardHeader = ({
  children,
  className = ''
}) => {
  return <div className={`p-4 border-b border-gray-100 ${className}`}>
      {children}
    </div>;
};

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className='']
 */
export const CardContent = ({
  children,
  className = ''
}) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className='']
 */
export const CardFooter = ({
  children,
  className = ''
}) => {
  return <div className={`p-4 border-t border-gray-100 bg-gray-50 ${className}`}>
      {children}
    </div>;
};
export default Card;