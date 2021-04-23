import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.scss';

const Input = ({ id, name, type, onChange, onBlur, value }) => {
  return (
    <input
      className={styles.Input}
      id={id}
      name={name}
      type={type}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      autoComplete="off"
    />
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default Input;
