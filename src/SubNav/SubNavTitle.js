import PropTypes from 'prop-types';
import React from 'react';
import { StyledSubNavTitle } from './SubNav-styled';

import { SubNavContext } from './SubNav';

const SubNavTitle = ({ children, ...other }) => {
  return (
    <SubNavContext.Consumer>
      {({ subNavContext }) => (
        <StyledSubNavTitle blue={subNavContext.blue} {...other}>
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

export default SubNavTitle;
