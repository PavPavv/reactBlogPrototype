import React from 'react';
import PropTypes from 'prop-types'

import styles from './PageTitle.module.scss';

const PageTitle = ({ title }) => {
  return (
    <h1 className={styles.PageTitle}>{title ? title : 'Page title'}</h1>
  )
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PageTitle;
