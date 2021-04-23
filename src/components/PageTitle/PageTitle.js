import React from 'react';

import styles from './PageTitle.module.scss';

const PageTitle = ({ title }) => {
  return (
    <h1 className={styles.PageTitle}>{title ? title : 'Page title'}</h1>
  )
}

export default PageTitle;
