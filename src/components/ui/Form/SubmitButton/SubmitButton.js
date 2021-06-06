import React from 'react';
import PropTypes from 'prop-types';

import styles from './SubmitButton.module.scss';

const SubmitButton = ({ children, disabled }) => {
  return (
    <button
      className={styles.SubmitButton}
      type="submit"
      disabled={disabled}
    >
      {children}
    </button>
  );
}

SubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
}

export default SubmitButton;
