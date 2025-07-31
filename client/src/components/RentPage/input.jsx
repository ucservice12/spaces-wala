import { useState } from 'react';

const Input = ({ ...props }) => {
  const [value, setValue] = useState('');

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
    />
  );
};

export default Input;
