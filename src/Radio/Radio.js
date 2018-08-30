import PropTypes from 'prop-types';
import React from 'react';
import {
  StyledRadio,
  StyledRadioLabel,
  StyledRadioGroup
} from './Radio-styled';

import { FieldsetContext } from '../Form/Fieldset';

const Radio = ({ children, value, checked, onChange, ...other }) => {
  let radioLabel;
  if (children) {
    radioLabel = <StyledRadioLabel>{children}</StyledRadioLabel>;
  }

  return (
    <FieldsetContext.Consumer>
      {({ fieldsetContext }) => (
        <StyledRadioGroup>
          <StyledRadio
            value={value}
            name={fieldsetContext.name}
            checked={checked}
            onChange={onChange}
            type="radio"
            {...other}
          />
          {radioLabel}
        </StyledRadioGroup>
      )}
    </FieldsetContext.Consumer>
  );
};

Radio.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** The form value for this checkbox */
  value: PropTypes.string,
  /** The name to be shared among checkboxes in a group */
  name: PropTypes.string,
  /** Whether the checkbox is currently checked */
  checked: PropTypes.bool,
  /** Event called when the checkbox value should be toggled */
  onChange: PropTypes.func
};

Radio.defaultProps = {};

export default Radio;
