import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';

import { StyledSubNavTitle } from './SubNav-styled';

import { SubNavContext } from './SubNav';

const SubNavTitle = ({ children, forwardedRef, ...other }) => {
  return (
    <SubNavContext.Consumer>
      {({ subNavContext }) => (
        <StyledSubNavTitle
          ref={forwardedRef}
          blue={subNavContext.blue}
          {...other}
        >
          {children}
        </StyledSubNavTitle>
      )}
    </SubNavContext.Consumer>
  );
};

SubNavTitle.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  blue: PropTypes.bool
};

SubNavTitle.defaultProps = {};

export default withRefs(SubNavTitle);
