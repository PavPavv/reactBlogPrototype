import React from 'react';

const styles = {
  display: 'flex',
}

const Row = ({ children }) => {
  return (
    <div style={styles}>
      {children}
    </div>
  )
};

export default Row;
