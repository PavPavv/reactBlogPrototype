import React, { useState } from 'react';
import PropTypes from 'prop-types';

import BlogCard from '../../BlogCard/BlogCard';

import styles from './BlogSearchList.module.scss';

const BlogSearchList = ({ filtered }) => {
  const [currentId, setCurrentId] = useState(0);

  const filteredItem = filtered.map((item) => {
    const active = currentId === item.id;
    return (
      <BlogCard key={item.id}
        tag={item.userId}
        title={item.title}
        text={item.body}
        id={item.id}
        setCurrentId={setCurrentId}
        activeStatus={active}
      />
    );
  });
  return (
    <div className={styles.Posts}>
      {filteredItem.length > 0 ? filteredItem : <div>Нет совпадений</div>}
    </div>
  )
};

BlogSearchList.propTypes = {
  filtered: PropTypes.arrayOf(PropTypes.object),
}


export default BlogSearchList;
