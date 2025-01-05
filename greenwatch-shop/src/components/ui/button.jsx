import React from 'react';

export const Button = ({ className, variant = 'default', children, ...props }) => {
  const baseStyles = 'px-4 py-2 rounded-md font-medium transition-colors';
  const variants = {
    default: 'bg-green-600 text-white hover:bg-green-700',
    outline: 'border border-gray-300 hover:bg-gray-50',
    ghost: 'hover:bg-gray-100',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}; 