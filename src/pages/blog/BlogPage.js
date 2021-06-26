import React, { useState, useEffect } from 'react';
import axios from 'axios';

import BlogFilter from '../../components/blog/BlogFilter/BlogFilter';
import BlogSearch from '../../components/blog/BlogSearch/BlogSearch';
import PageTitle from '../../components/ui/PageTitle/PageTitle';
import Loader from '../../components/ui/Loader/Loader';

import styles from './BlogPage.module.scss'

const BlogPage = ({ history }) => {
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
      })
      .catch(err => {
        setLoading(false);
        console.log('Whoops, fetch error', err);
      })
  }, [])

  return (
    <>
      <PageTitle title="Блог" />
      <BlogFilter details={data} />
      <BlogSearch details={data} />
      {loading && <Loader />}
    </>
  )
}

export default BlogPage;
