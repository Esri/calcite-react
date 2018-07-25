import PropTypes from 'prop-types';
import React from 'react';
import { StyledMenu } from './Menu-styled';

const Menu = ({ children, ...other }) => {
  // const childArray = React.Children.toArray(children);
  // const childrenWithProps = childArray.map((child, i) => {
  //   switch (getChildType(child)) {
  //     case MenuItem:
  //       return React.cloneElement(child, {});
  //     default:
  //       return child;
  //   }
  // });

  return <StyledMenu {...other}>{children}</StyledMenu>;
};

Menu.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

Menu.defaultProps = {};

export default Menu;
