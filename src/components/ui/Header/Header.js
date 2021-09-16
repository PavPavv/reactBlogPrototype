import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import * as actions from '../../../store/auth/actions';
import NavMenu from '../NavMenu/NavMenu';

import styles from './Header.module.scss';
import logo from '../../../assets/logo.png';

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
        <Link to="/">
          <img alt="Лого" src={logo} className={styles.Logo} />
        </Link>
        <NavMenu />
      </div>
      <div className={styles.Right}>
        <div className={styles.Logout} onClick={logout}></div>
      </div>
    </header>
  )
}

export default Header;
