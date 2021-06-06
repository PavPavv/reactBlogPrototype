import React from 'react';
import PropTypes from 'prop-types';

import Box from '../../ui/Box/Box';
import Input from '../../ui/Input/Input';

const FormFour = props => {
  return (
    <div>
      <Input
        lbl={props.fields.present.label}
        name="present"
        plc={props.fields.present.place}
      />
    </div>
  )
};

FormFour.propTypes = {
  fields: PropTypes.object,
};

export default FormFour;
