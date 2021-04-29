import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavMenu.module.scss';

const NavMenu = () => {
  return (
    <ul className={styles.NavMenuUl}>
      <li>
        <NavLink activeClassName="active-a" exact to="/">Блог</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active-a" exact to="/todos">Список дел</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active-a" exact to="/smth-else">Что-то ещё</NavLink>
      </li>
    </ul>
  )
}

export default NavMenu;
