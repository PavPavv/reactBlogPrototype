import React from 'react';

import styles from './InputError.module.scss';

const InputError = ({ children }) => {
  return (
    <div className={styles.InputError}>
      {children}
    </div>
  )
}

export default InputError;
