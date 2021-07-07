import React from 'react';

import Post from './Post/Post';

import styles from './BlogRight.module.scss';

const BlogRight = () => {
  return (
    <div className={styles.Wrapper}>
      <Post />
    </div>
  )
}

export default BlogRight;
