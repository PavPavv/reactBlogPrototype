import React from 'react';
import { useHistory } from "react-router-dom";

import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  const history = useHistory();
  const handleBack = () => {
    history.push('/');
  };

  return (
    <div className={styles.NotFound}>
      <div className={styles.Secret}></div>
      <h2>404</h2>
      <p>Эта страница нам неизвестна... Может, на <span onClick={handleBack}>главную</span>?</p>
    </div>
  );
};

export default NotFoundPage;
