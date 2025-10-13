import React from 'react';

const Button = ({ children, ...props }) => (
  <button {...props} className={props.className || ''}>
    {children}
  </button>
);

export { Button };
export default Button;
