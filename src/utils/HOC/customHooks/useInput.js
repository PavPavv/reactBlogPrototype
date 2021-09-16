import React, { useState } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = e => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
  }
}

export default useInput;
