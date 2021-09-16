import React, { useState, useEffect } from 'react';

const useHover = (ref) => {
  const [isHover, setIsHover] = useState(false);

  const on = () => setIsHover(true);
  const off = () => setIsHover(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const node = ref.current;

    node.addEventListener('mouseenter', on);
    node.addEventListener('mousemove', on);
    node.addEventListener('mouseleave', off);

    return () => {
      node.removeEventListener('mouseenter', on);
      node.removeEventListener('mousemove', on);
      node.removeEventListener('mouseleave', off);
    }
  }, []);

  return isHover;
}

export default useHover;
