import PropTypes from 'prop-types';
import React from 'react';
import { StyledSubNavTitle } from './SubNav-styled';

const SubNavTitle = ({ children, blue, ...other }) => {
  const subNavTitle = (
    <StyledSubNavTitle blue={blue} {...other}>
      {children}
    </StyledSubNavTitle>
  );

  return subNavTitle;
};

SubNavTitle.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  blue: PropTypes.bool
};

SubNavTitle.defaultProps = {
  blue: undefined
};

export default SubNavTitle;
