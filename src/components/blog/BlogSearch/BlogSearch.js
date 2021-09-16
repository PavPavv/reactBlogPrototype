import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SearchList from './BlogSearchList/BlogSearchList';

import styles from './BlogSearch.module.scss';

const BlogSearch = ({ details }) => {
  const [searchField, setSearchField] = useState('');
  let filteredItems = details.filter(
    item => {
      return (
        item.userId.toString().toLowerCase().includes(searchField.toLowerCase()) ||
        item.title.toString().toLowerCase().includes(searchField.toLowerCase()) ||
        item.body.toString().toLowerCase().includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div className={styles.Search}>
      <input
        type="text"
        placeholder="Печатать, чтобы найти"
        onChange={handleChange}
      />
      <SearchList filtered={filteredItems} />
    </div>
  )
}

BlogSearch.propTypes = {
  details: PropTypes.arrayOf(PropTypes.object),
}

export default BlogSearch;
