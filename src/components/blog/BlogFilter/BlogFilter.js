import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import FilterBtn from '../../ui/FilterBtn/FilterBtn';

import styles from './BlogFilter.module.scss';

const BlogFilter = ({ initials, mainData, filterData }) => {
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    // get unique data.userId values [1,2,3,4,5,6,7,8...] to create dynamically 
    // filter buttons
    const uniques = [...
      new Set(initials.map(
        (obj) => {
          return obj.userId
        })
      )];
    setFilters(uniques)
  }, [initials]);

  const handleFilter = () => {
    console.log('filter')
  };

  return (
    <div className={styles.Wrapper}>
      {filters.map(item => {
        return (
          <FilterBtn
            key={item}
            item={item}
            filterData={filterData}
            mainData={mainData}
            initialDt={initials}
          />
        );
      })}
    </div>
  )
};

BlogFilter.propTypes = {
  initials: PropTypes.arrayOf(PropTypes.object).isRequired,
  mainData: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterData: PropTypes.func,
}

export default BlogFilter;
