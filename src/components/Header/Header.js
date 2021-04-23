import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styles from './Header.module.scss';

import * as actions from '../../store/auth/actions';

const Header = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const logout = () => {
    dispatch(actions.logout());
    history.push('/auth');
  };

  return (
    <div className={styles.Header}>
      <div className={styles.Logo}>Logo</div>
      <div className={styles.Logout} onClick={logout}></div>
    </div>
  )
}

export default Header;
