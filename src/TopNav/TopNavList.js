import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';
import { StyledTopNavList } from './TopNav-styled';

const TopNavList = ({ children, forwardedRef, ...other }) => {
  return (
    <StyledTopNavList ref={forwardedRef} {...other}>
      {children}
    </StyledTopNavList>
  );
};

TopNavList.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

TopNavList.defaultProps = {};

export default withRefs(TopNavList);
