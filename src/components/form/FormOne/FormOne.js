import React from 'react';
import PropTypes from 'prop-types';

import Box from '../../ui/Box/Box';
import Input from '../../ui/Input/Input';

const FormOne = props => {

  return (
    <div>
      <Input
        lbl={props.fields.name.label}
        name="name"
        plc={props.fields.name.place}
      />
    </div>
  )
}

FormOne.propTypes = {
  fields: PropTypes.object,
};

export default FormOne;
