import PropTypes from 'prop-types';
import React, { createContext } from 'react';
import { getChildType } from '../utils/helpers';
import { StyledSubNav, StyledSubNavLeftContent } from './SubNav-styled';

import { SubNavTitle, SubNavList, SubNavActions } from './';

const SubNavContext = createContext();

const SubNav = ({ children, blue, overlayGradient, ...other }) => {
  const subNavContext = {
    blue
  };
  // const childArray = React.Children.toArray(children);
  // const childrenWithProps = childArray.map((child, i) => {
  //   switch (getChildType(child)) {
  //     case SubNavTitle:
  //       return React.cloneElement(child, {
  //         blue
  //       });
  //     default:
  //       return child;
  //   }
  // });

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
      <StyledSubNav blue={blue} overlayGradient={overlayGradient} {...other}>
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

export { SubNav as default, SubNavContext };
