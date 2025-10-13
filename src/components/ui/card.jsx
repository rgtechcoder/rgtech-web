import React from 'react';

const Card = ({ children, ...props }) => (
  <div {...props} className={props.className || 'border rounded-lg bg-white shadow'}>
    {children}
  </div>
);

const CardContent = ({ children, ...props }) => (
  <div {...props} className={props.className || ''}>
    {children}
  </div>
);

const CardHeader = ({ children, ...props }) => (
  <div {...props} className={props.className || ''}>
    {children}
  </div>
);

const CardTitle = ({ children, ...props }) => (
  <h3 {...props} className={props.className || 'font-bold text-lg'}>
    {children}
  </h3>
);

const CardDescription = ({ children, ...props }) => (
  <p {...props} className={props.className || 'text-gray-600'}>
    {children}
  </p>
);

export { Card, CardContent, CardHeader, CardTitle, CardDescription };
export default Card;
