import React from 'react';
import PropTypes from 'prop-types';
import { StyledTabSection } from './Tab-styled';

const TabSection = ({
  children,
  gray,
  transparent,
  translucent,
  dark,
  ...other
}) => {
  const tabSection = (
    <StyledTabSection
      gray={gray}
      transparent={transparent}
      translucent={translucent}
      dark={dark}
      {...other}
    >
      {children}
    </StyledTabSection>
  );

  return tabSection;
};

TabSection.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  gray: PropTypes.bool,
  transparent: PropTypes.bool,
  translucent: PropTypes.bool,
  dark: PropTypes.bool
};

export default TabSection;
