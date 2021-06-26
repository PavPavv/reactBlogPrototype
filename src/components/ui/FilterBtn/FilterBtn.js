import React, { useState } from 'react';

import styles from './FilterBtn.module.scss';

const FilterBtn = ({ item }) => {
  const [active, setActive] = useState(true);

  const handleFilter = () => {
    setActive(!active);
  };

  return (
    <div className={active ? styles.BtnActive : styles.Btn} onClick={handleFilter}>
      Фильтр {item}
    </div>
  )
}

export default FilterBtn;
