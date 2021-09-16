import React, { useRef, useEffect } from 'react';

const useList = (parentRef, childRef, callback) => {
  const observer = useRef();

  useEffect(() => {
    const options = {
      root: parentRef.current,
      rootMargin: '0px',
      threshold: 0

    };
    observer.current = new IntersectionObserver(([target]) => {
      if (target.isIntersecting) {
        console.log('inter');
        callback();
      }
    }, options);

    if (childRef.current) {
      observer.current.observe(childRef.current);
    }

    return function () {
      if (childRef.current) {
        observer.current.unobserve(childRef.current);
      }
    };
  }, [callback]);
};

export default useList;