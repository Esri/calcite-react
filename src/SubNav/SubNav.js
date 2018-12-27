import PropTypes from 'prop-types';
import React, { Children, createContext } from 'react';

import { StyledSubNav, StyledSubNavLeftContent } from './SubNav-styled';

import { getChildType } from '../utils/helpers';

const SubNavContext = createContext({
  subNavContext: {
    blue: undefined
  }
});

const SubNav = ({ children, blue, ...other }) => {
  const subNavContext = {
    blue
  };

  const getLeftContent = function() {
    return Children.toArray(children).filter(child => {
      return (
        getChildType(child) === 'SubNavTitle' ||
        getChildType(child) === 'SubNavList'
      );
    });
  };

  const getSubNavActions = function() {
    return Children.toArray(children).filter(child => {
      return getChildType(child) === 'SubNavActions';
    });
  };

  return (
    <SubNavContext.Provider value={{ subNavContext }}>
      <StyledSubNav blue={blue} {...other}>
        <StyledSubNavLeftContent>{getLeftContent()}</StyledSubNavLeftContent>
        {getSubNavActions()}
      </StyledSubNav>
    </SubNavContext.Provider>
  );
};

SubNav.propTypes = {
  /** The content of the component. */
  children: PropTypes.node,
  /** A style prop to render the SubNav with a blue background. */
  blue: PropTypes.bool,
  /** The background image src. */
  backgroundImage: PropTypes.node,
  /** If true, the gradient is applied on top of the image. */
  overlayGradient: PropTypes.bool,
  /** The gradient overlay color to start from the left of the SubNav. */
  gradientFromColor: PropTypes.string,
  /** The gradient overlay color to end on the right of the SubNav. */
  gradientToColor: PropTypes.string
};

SubNav.defaultProps = {
  overlayGradient: true
};

SubNav.displayName = 'SubNav';

export { SubNav as default, SubNavContext };
