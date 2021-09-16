import React from 'react';

import styles from './Todo.module.scss';

const Todo = ({ date, text, done }) => {
  return (
    <div className={styles.Todo}>

      <div className={styles.Left}>
        <div className={styles.Date}>{date}</div>
        <div className={styles.Text}>{text}</div>
      </div>
      <div className={styles.Right}>
        <div className={styles.Done}>Done</div>
        <div className={styles.Edit}>Edit</div>
        <div className={styles.Remove}>X</div>
      </div>

    </div>
  )
}

export default Todo;
