import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../../store/post/actions';

import styles from './BlogCard.module.scss';

const BlogCard = ({ id, tag, title, text, setCurrentId, activeStatus }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(actions.post(id));
    setCurrentId(id);
  };

  return (
    <div className={activeStatus? styles.CardActive : styles.Card} onClick={handleClick}>
      <div className={styles.Tag}>{tag}</div>
      <div className={styles.Title}>{title}</div>
      <div className={styles.Text}>{text}</div>
    </div>
  )
}

BlogCard.propTypes = {
  id: PropTypes.number.isRequired,
  tag: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default BlogCard;
