import React from 'react';
import PropTypes from 'prop-types';

const Box = ({ children, pt, pr, pb, pl }) => {
  return (
    <div style={{
      paddingTop: `${pt}px`,
      paddingRight: `${pr}px`,
      paddingBottom: `${pb}px`,
      paddingLeft: `${pl}px`,
    }}>
      {children}
    </div>
  )
}

export default Box;

Box.propTypes = {
  children: PropTypes.node,
  pt: PropTypes.number,
  pr: PropTypes.number,
  pb: PropTypes.number,
  pl: PropTypes.number,
}