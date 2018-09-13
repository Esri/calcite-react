import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';

import {
  StyledSwitch,
  StyledSwitchInput,
  StyledSwitchTrack,
  StyledSwitchLabel
} from './Switch-styled';

const Switch = ({
  children,
  labelPosition,
  destructive,
  forwardedRef,
  checked,
  field,
  form,
  value,
  success = false,
  error = false,
  disabled = false,
  onChange,
  ...other
}) => {
  let name, fieldValue, touched, errors, isSubmitting, setFieldValue;
  if (field) {
    name = field.name;
    fieldValue = field.fieldValue;
    touched = form.touched;
    errors = form.errors;
    isSubmitting = form.isSubmitting;
    setFieldValue = form.setFieldValue;
  }

  const getSwitchLabel = children => {
    if (children) {
      return <StyledSwitchLabel>{children}</StyledSwitchLabel>;
    }
  };

  const handleChange = e => {
    if (setFieldValue) {
      setFieldValue(name, e.target.checked);
    } else {
      onChange(e);
    }
  };

  const isChecked = () => {
    if (field) {
      return fieldValue;
    }

    return checked;
  };

  const isSuccess = () => {
    if (touched) {
      return touched[name] && !errors[name] ? true : false;
    }
    return success;
  };

  const isError = () => {
    if (touched) {
      return touched[name] && errors[name] ? true : false;
    }
    return error;
  };

  const isDisabled = () => {
    return isSubmitting || disabled;
  };

  return (
    <StyledSwitch>
      {labelPosition === 'before' ? getSwitchLabel(children) : null}
      <StyledSwitchInput
        ref={forwardedRef}
        onChange={handleChange}
        checked={isChecked()}
        success={isSuccess()}
        error={isError()}
        disabled={isDisabled()}
        {...other}
        type="checkbox"
      />
      <StyledSwitchTrack destructive={destructive} />
      {labelPosition === 'after' ? getSwitchLabel(children) : null}
    </StyledSwitch>
  );
};

Switch.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** The name to be shared among checkboxes in a group */
  name: PropTypes.string,
  /** Whether the checkbox is currently checked */
  checked: PropTypes.bool,
  /** Event called when the checkbox value should be toggled */
  onChange: PropTypes.func,
  /** Should use a red highlight color */
  destructive: PropTypes.bool,
  /** Position of the label text in relation to the input */
  labelPosition: PropTypes.oneOf(['before', 'after'])
};

Switch.defaultProps = {
  labelPosition: 'after'
};

export default withRefs(Switch);
