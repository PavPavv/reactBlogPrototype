import React, { useRef } from 'react';

import Box from '../../ui/Box/Box';
import useHover from '../../../utils/HOC/customHooks/useHover';

import styles from './Hover.module.scss';

const Hover = () => {
  const ref = useRef();
  const isHovering = useHover(ref);

  const handleClick = () => {
    console.log(ref);
    console.log(ref.current);
    console.log(ref.current.hidden);
  };

  return (
    <Box pt={50}>
      <div className={isHovering ? `${styles.Planet} ${styles.Hover}` : styles.Planet} ref={ref}>
        <div className={styles.Satellite} onClick={handleClick}></div>
      </div>
    </Box>
  )
}

export default Hover;
