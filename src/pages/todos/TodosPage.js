import React from 'react';

import PageTitle from '../../components/ui/PageTitle/PageTitle';
import Todo from '../../components/todos/Todo/Todo';
import TodoAdd from '../../components/todos/TodoAdd/TodoAdd';

import styles from './TodosPage.module.scss';

const data = [
  {
    id: 1,
    date: new Date().toLocaleDateString(),
    todo: 'IndexedDB – это встроенная база данных, более мощная, чем localStorage.',
    done: false,
  },
  {
    id: 2,
    date: new Date().toLocaleDateString(),
    todo: 'Хранилище ключей/значений: доступны несколько типов ключей, а значения могут быть (почти) любыми.',
    done: false,
  },
  {
    id: 3,
    date: new Date().toLocaleDateString(),
    todo: 'Поддерживает транзакции для надёжности.',
    done: true,
  },
  {
    id: 4,
    date: new Date().toLocaleDateString(),
    todo: 'Поддерживает запросы в диапазоне ключей и индексы.',
    done: true,
  },
  {
    id: 5,
    date: new Date().toLocaleDateString(),
    todo: 'Позволяет хранить больше данных, чем localStorage.',
    done: false,
  },
];

const TodosPage = () => {
  return (
    <>
      <PageTitle title="Список дел" />
      <section className={styles.Wrapper}>
        <TodoAdd />
        {data ? data.map(todo => (
          <Todo
            key={todo.id}
            date={todo.date}
            text={todo.todo}
            done={todo.done}
          />
        )) : <div>Задач нет</div>}
      </section>
    </>
  )
}

export default TodosPage;
