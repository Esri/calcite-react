import PropTypes from 'prop-types';
import React, { createContext } from 'react';
import { getChildType } from '../utils/helpers';
import withRefs from '../utils/withRefs';

import { StyledSubNav, StyledSubNavLeftContent } from './SubNav-styled';

import { SubNavTitle, SubNavList, SubNavActions } from './';

const SubNavContext = createContext({
  subNavContext: {
    blue: undefined
  }
});

const SubNav = ({ children, blue, forwardedRef, ...other }) => {
  const subNavContext = {
    blue
  };

  const getLeftContent = function() {
    return children.filter(child => {
      return (
        getChildType(child) === SubNavTitle ||
        getChildType(child) === SubNavList
      );
    });
  };

  const getSubNavActions = function() {
    return children.filter(child => {
      return getChildType(child) === SubNavActions;
    });
  };

  return (
    <SubNavContext.Provider value={{ subNavContext }}>
      <StyledSubNav ref={forwardedRef} blue={blue} {...other}>
        <StyledSubNavLeftContent>{getLeftContent()}</StyledSubNavLeftContent>
        {getSubNavActions()}
      </StyledSubNav>
    </SubNavContext.Provider>
  );
};

SubNav.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  blue: PropTypes.bool,
  /** If true, the gradient is applied on top of the image */
  overlayGradient: PropTypes.bool
};

SubNav.defaultProps = {
  overlayGradient: true
};

const SubNavWithRefs = withRefs(SubNav);

export { SubNavWithRefs as default, SubNavContext };
