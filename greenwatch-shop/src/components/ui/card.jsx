import React from 'react';

export const Card = ({ className, children, ...props }) => (
  <div className={`bg-white rounded-lg shadow ${className}`} {...props}>
    {children}
  </div>
);

export const CardHeader = ({ className, children, ...props }) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ className, children, ...props }) => (
  <h3 className={`text-xl font-semibold ${className}`} {...props}>
    {children}
  </h3>
);

export const CardDescription = ({ className, children, ...props }) => (
  <p className={`text-gray-600 mt-2 ${className}`} {...props}>
    {children}
  </p>
);

export const CardContent = ({ className, children, ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

export const CardFooter = ({ className, children, ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
); 