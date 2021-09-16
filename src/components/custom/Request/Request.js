import React from 'react'
import axios from 'axios';

import useRequest from '../../../utils/HOC/customHooks/useRequest';

const Request = () => {
  const [todos, loading, error] = useRequest(searchTodos);

  async function searchTodos() {
    return axios.get(`https://jsonplaceholder.typicode.com/todos`);
  };

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Ошибка при загрузке данных с помощью хука в компоненте Request :(</div>
  }

  return (
    <div>
      {todos && todos.filter(todo => todo.id < 10).map(todo => (
        <div key={todo.id} style={{ border: '3px solid black', marginBottom: '10px', padding: '5px 10px' }}>
          <span style={{ marginRight: '10px' }}><b>{todo.id}</b></span>
          <span>{todo.title}</span>
        </div>
      ))}
    </div>
  )
}

export default Request
