import React from 'react';
import PropTypes from 'prop-types'

import styles from './InputError.module.scss';

const InputError = ({ children }) => {
  return (
    <div className={styles.InputError}>
      {children}
    </div>
  )
}

InputError.propTypes = {
  children: PropTypes.node.isRequired,
}

export default InputError;
