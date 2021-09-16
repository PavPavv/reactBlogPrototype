import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

import styles from './Input.module.scss';

const Input = props => {
  const [field, meta] = useField(props);

  return (
    <div className={styles.InputWrap}>
      <input
        className={styles.Input}
        type="text"
        placeholder={props.plc}
        autoComplete="off"
        {...field}
      />
      <label className={styles.Label}>{props.lbl}</label>
      {meta.touched && meta.error ? (
        <div className={styles.Error}>{meta.error}</div>
      ) : null}
    </div>
  )
};

Input.propTypes = {
  lbl: PropTypes.string.isRequired,
  plc: PropTypes.string,
}

export default Input;


// <input
//         className={styles.Input}
//         name={props.nm}
//         type="text"
//         placeholder={props.plc}
//         autoComplete="off"
//       />