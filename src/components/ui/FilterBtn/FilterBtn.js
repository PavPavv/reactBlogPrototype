import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './FilterBtn.module.scss';


Array.prototype.sortOn = function (key) {
  this.sort(function (a, b) {
    if (a[key] < b[key]) {
      return -1;
    } else if (a[key] > b[key]) {
      return 1;
    }
    return 0;
  });
}

const FilterBtn = ({ item, initialDt, mainData, filterData }) => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    //console.log(mainData)

  }, [])

  const handleFilter = () => {
    setActive(!active);

    if (active) {
      let filteredData = mainData.filter(elem => {
        return elem.userId !== item;
      });
      filterData(filteredData);
    } else {
      let filteredData = initialDt.filter(elem => {
        return elem.userId === item;
      });
      let merged = [...mainData, ...filteredData];
      filterData(merged.sort((a, b) => a.userId - b.userId));
    }
  };

  return (
    <div className={active ? styles.BtnActive : styles.Btn} onClick={handleFilter}>
      Фильтр {item}
    </div>
  )
};

FilterBtn.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  filterData: PropTypes.func,
  mainData: PropTypes.arrayOf(PropTypes.object).isRequired,
  initialDt: PropTypes.arrayOf(PropTypes.object).isRequired,
}


export default FilterBtn;
