import React, { useEffect } from 'react';

import Header from '../../components/Header/Header';
import PageTitle from '../../components/PageTitle/PageTitle';
import Footer from '../../components/Footer/Footer';

const Blog = ({ history }) => {
  const token = localStorage.getItem('fakeToken');

  useEffect(() => {
    if (!token) {
      history.push('/auth');
    }
  }, [history, token])

  return (
    <>
      <Header />
      <div className="wrapper">
        <main>
          <PageTitle title="Blog" />
          <div>search</div>
          <div>filters</div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Blog;
