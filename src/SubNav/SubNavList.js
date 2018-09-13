import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';

import { StyledSubNavList } from './SubNav-styled';

const SubNavList = ({ children, forwardedRef, ...other }) => {
  return (
    <StyledSubNavList ref={forwardedRef} {...other}>
      {children}
    </StyledSubNavList>
  );
};

SubNavList.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

SubNavList.defaultProps = {};

export default withRefs(SubNavList);
