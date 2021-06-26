import React, { useState, useEffect } from 'react';

import FilterBtn from '../../ui/FilterBtn/FilterBtn';

import styles from './BlogFilter.module.scss';

const BlogFilter = ({ details }) => {
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    //let uniqueKeys = Object.keys(Object.assign({}, ...details));
    const uniques = [...
      new Set(details.map(
        (obj) => {
          return obj.userId
        })
      )];
    setFilters(uniques)
  }, [details]);

  const handleFilter = () => {
    console.log('filter')
  };

  return (
    <div className={styles.Wrapper}>
      {filters.map(item => {
        return (
          <FilterBtn key={item} item={item} />
        );
      })}
    </div>
  )
}

export default BlogFilter;
