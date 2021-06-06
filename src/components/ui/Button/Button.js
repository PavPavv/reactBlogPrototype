import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({ children, disabled, clicked, t }) => {
  return (
    <button
      className={styles.Button}
      type={t}
      onClick={clicked}
      disabled={disabled}
    >
      {children}
    </button>
  )
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  clicked: PropTypes.func,
  t: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
}

export default Button;