import React from 'react';
import PropTypes from 'prop-types';

import styles from './BlogCard.module.scss';

const BlogCard = ({ tag, title, text }) => {
  return (
    <div className={styles.Card}>
      <div className={styles.Tag}>{tag}</div>
      <div className={styles.Title}>{title}</div>
      <div className={styles.Text}>{text}</div>
    </div>
  )
}

BlogCard.propTypes = {
  tag: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default BlogCard;
