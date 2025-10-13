import React from 'react';

const Textarea = (props) => <textarea {...props} className={props.className || 'border rounded px-3 py-2'} />;

export { Textarea };
export default Textarea;
