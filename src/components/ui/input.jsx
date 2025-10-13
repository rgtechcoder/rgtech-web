import React from 'react';

const Input = (props) => <input {...props} className={props.className || 'border rounded px-3 py-2'} />;

export { Input };
export default Input;
