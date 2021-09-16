import React, { useState, useEffect } from 'react';
import axios from 'axios';

import BlogFilter from '../../components/blog/BlogFilter/BlogFilter';
import BlogSearch from '../../components/blog/BlogSearch/BlogSearch';
import PageTitle from '../../components/ui/PageTitle/PageTitle';
import BlogRight from '../../components/blog/BlogRight/BlogRight';
import Loader from '../../components/ui/Loader/Loader';
import Box from '../../components/ui/Box/Box';

import styles from './BlogPage.module.scss'

const BlogPage = ({ history }) => {
  const [initialData, setInitialData] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem('fakeToken');

  useEffect(() => {
    if (!token) {
      history.push('/auth');
    }
  }, [history, token]);

  useEffect(() => {
    setLoading(true);
    axios('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setData(res.data);
        setLoading(false);
        setInitialData(res.data);
      })
      .catch(err => {
        setLoading(false);
        console.log('Whoops, fetch error', err);
      })
  }, [])

  return (
    <>
      <PageTitle title="Блог" />
      <div className={styles.BlogWrapper}>
        <div className={styles.Left}>
          <Box pb={50}>
            <BlogFilter
              initials={initialData}
              filterData={setData}
              mainData={data}
            />
          </Box>
          <Box>
            <BlogSearch details={data} />
          </Box>
        </div>
        <div className={styles.Right}>
          <BlogRight />
        </div>
      </div>
      {loading && <Loader />}
    </>
  )
}

export default BlogPage;
