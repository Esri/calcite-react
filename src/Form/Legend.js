import PropTypes from 'prop-types';
import React from 'react';
import { StyledLegend } from './Form-styled';

import { FormControlContext } from './FormControl';

const Legend = ({ children, ...other }) => {
  return (
    <FormControlContext.Consumer>
      {({ formControlContext }) => (
        <StyledLegend horizontal={formControlContext.horizontal} {...other}>
          {children}
        </StyledLegend>
      )}
    </FormControlContext.Consumer>
  );
};

Legend.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Display prop to make this element align items horizontally instead of vertically */
  horizontal: PropTypes.bool
};

Legend.defaultProps = {};

Legend.displayName = 'Legend';

export default Legend;
