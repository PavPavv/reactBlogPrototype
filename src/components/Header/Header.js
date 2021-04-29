import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styles from './Header.module.scss';

import * as actions from '../../store/auth/actions';
import NavMenu from '../NavMenu/NavMenu';

const Header = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const logout = () => {
    dispatch(actions.logout());
    history.push('/auth');
  };

  return (
    <header className={styles.Header}>
      <div className={styles.Left}>
        <div className={styles.Logo}>Лого</div>
        <NavMenu />
      </div>
      <div className={styles.Right}>
        <div className={styles.Logout} onClick={logout}></div>
      </div>
    </header>
  )
}

export default Header;
