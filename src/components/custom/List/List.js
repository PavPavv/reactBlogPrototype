import React, { useState, useEffect, useRef } from 'react';

import Box from '../../ui/Box/Box';
import useList from '../../../utils/HOC/customHooks/useList';

const List = () => {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;
  const parentRef = useRef();
  const childRef = useRef();
  const intersected = useList(parentRef, childRef, () => fetchTodos(page, limit));

  async function fetchTodos(page, limit) {
    try {
      const data = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`);
      const json = await data.json();
      setTodos(prev => [...prev, ...json]);
      setPage(prev => prev + 1);
    } catch (err) {
      console.log(err.message)
    }
  };

  // useEffect(() => {
  //   fetchTodos(page, limit);
  // }, []);

  return (
    <Box pt={50}>
      <div ref={parentRef} style={{ height: '400px', overflow: 'auto' }}>
        {todos.map(todo => (
          <div key={todo.id} style={{ border: '3px solid black', marginBottom: '10px', padding: '5px 10px' }}>
            <span style={{ marginRight: '10px' }}><b>{todo.id}</b></span>
            <span>{todo.title}</span>
          </div>
        ))}

        <div ref={childRef} style={{ height: '20px', background: 'green' }}></div>
      </div>

    </Box>
  )
}

export default List;
