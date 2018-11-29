import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';

import { StyledTopNavActions } from './TopNav-styled';

const TopNavActionsList = withRefs(({ children, forwardedRef, ...other }) => {
  return (
    <StyledTopNavActions ref={forwardedRef} {...other}>
      {children}
    </StyledTopNavActions>
  );
});

TopNavActionsList.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

TopNavActionsList.defaultProps = {};

TopNavActionsList.displayName = 'TopNavActionsList';

export default TopNavActionsList;
