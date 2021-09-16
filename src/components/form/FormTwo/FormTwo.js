import React from 'react';
import PropTypes from 'prop-types';

import Box from '../../ui/Box/Box';
import Input from '../../ui/Input/Input';

const FormTwo = props => {
  return (
    <div>
      <Input
        lbl={props.fields.food.label}
        name="food"
        plc={props.fields.food.place}
      />
    </div>
  )
}

FormTwo.propTypes = {
  fields: PropTypes.object,
};

export default FormTwo;
