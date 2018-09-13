import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';
import { StyledLegend } from './Form-styled';

import { FormControlContext } from './FormControl';

const Legend = ({ children, forwardedRef, ...other }) => {
  return (
    <FormControlContext.Consumer>
      {({ formControlContext }) => (
        <StyledLegend
          ref={forwardedRef}
          horizontal={formControlContext.horizontal}
          {...other}
        >
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

export default withRefs(Legend);
