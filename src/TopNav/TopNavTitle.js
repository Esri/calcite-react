import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';

import { StyledTopNavTitle } from './TopNav-styled';

const TopNavTitle = ({ children, forwardedRef, ...other }) => {
  return (
    <StyledTopNavTitle ref={forwardedRef} {...other}>
      {children}
    </StyledTopNavTitle>
  );
};

TopNavTitle.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  href: PropTypes.string
};

TopNavTitle.defaultProps = {};

export default withRefs(TopNavTitle);
