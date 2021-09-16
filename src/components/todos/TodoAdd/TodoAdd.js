import React, { useState } from 'react';

import InputForm from '../../ui/Form/InputForm/InputForm';

import styles from './TodoAdd.module.scss';

const TodoAdd = () => {
  const [todo, setTodo] = useState('');

  const handleChange = e => {
    e.preventDefault()
    let { value } = e.target;
    setTodo(value);
  };

  const handleClick = () => {
    console.log('add todo', todo);
    setTodo('');
  };

  return (
    <div className={styles.TodoAdd}>
      <input placeholder="Введите дело" value={todo} onChange={handleChange} />
      <button onClick={handleClick}>Добавить</button>
    </div>
  )
}

export default TodoAdd;
