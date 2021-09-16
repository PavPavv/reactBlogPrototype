import React, { useState } from 'react';
import useDebounce from '../../../utils/HOC/customHooks/useDebounce';

const Search = () => {
  const [value, setValue] = useState('');
  const debouncedCallback = useDebounce(searchTodos, 500);

  async function searchTodos(query) {
    try {
      const data = await fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`);
      const json = await data.json();
    } catch (err) {
      console.log(err.message)
    }
  };

  const handleChange = e => {
    setValue(e.target.value);
    debouncedCallback(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default Search;
