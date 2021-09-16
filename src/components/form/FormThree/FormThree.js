import React from 'react';
import PropTypes from 'prop-types';

import Box from '../../ui/Box/Box';
import Input from '../../ui/Input/Input';

const FormThree = props => {
  return (
    <div>
      <Input
        lbl={props.fields.movie.label}
        name="movie"
        plc={props.fields.movie.place}
      />
    </div>
  )
}

FormThree.propTypes = {
  fields: PropTypes.object,
};

export default FormThree;
