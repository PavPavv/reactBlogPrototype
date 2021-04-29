import React, { useState, useEffect } from 'react';

import PageTitle from '../../components/PageTitle/PageTitle';

const BlogPage = ({ history }) => {
  const token = localStorage.getItem('fakeToken');

  useEffect(() => {
    if (!token) {
      history.push('/auth');
    }
  }, [history, token]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, [])

  return (
    <>
      <PageTitle title="Блог" />
      <div>поиск</div>
      <div>фильтры</div>
    </>
  )
}

export default BlogPage;
