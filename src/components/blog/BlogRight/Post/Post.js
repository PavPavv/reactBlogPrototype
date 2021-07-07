import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import * as actions from '../../../../store/post/actions';

import styles from './Post.module.scss';

const Post = () => {
  const dispatch = useDispatch();
  let postData = useSelector(state => state.post);
  const date = new Date(Date.now() - 24 * 3600 * 1000);
  const [img, setImg] = useState('');
  let post = <div className={styles.NoPosts}>Ничего не выбрано</div>;

  useEffect(() => {
    if (postData.post) {
      axios(`https://jsonplaceholder.typicode.com/photos?id=${postData.post.id}`)
        .then(res => {
          setImg(res.data[0].url);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }, [postData]);

  const handleClose = () => {
    dispatch(actions.postRemove());
  };

  if (postData.post) {
    post = (
      <>
        <div className={styles.Header}>
          <div>
            <div className={styles.Tag}>{`#тэг ${postData.post.userId}`}</div>
            <div className={styles.Id}>{`${postData.post.id}`}</div>
          </div>
          <div className={styles.Close} onClick={handleClose} ></div>
        </div>
        <div className={styles.Title}>{`${postData.post.title}`}</div>
        <div className={styles.Text}>{postData.post.body}</div>
        <div className={styles.Image}>
          <img src={img} />
        </div>
        <div className={styles.Footer}>
          <div className={styles.Time}>
            {date.toLocaleString('ru-RU')}
          </div>
        </div>
      </>
    );
  }

  return (
    <div className={styles.Post}>{post}</div>
  )
}

export default Post;
