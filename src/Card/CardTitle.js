import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';
import { StyledCardTitle } from './Card-styled';

const CardTitle = withRefs(({ children, forwardedRef, ...other }) => {
  return (
    <StyledCardTitle ref={forwardedRef} {...other}>
      {children}
    </StyledCardTitle>
  );
});

CardTitle.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

CardTitle.defaultProps = {};

CardTitle.displayName = 'CardTitle';

export default CardTitle;
