import React from 'react';
import PropTypes from 'prop-types';
import { StyledTabSection } from './Tab-styled';

const TabSection = ({
  children,
  gray,
  transparent,
  translucent,
  dark,
  ...props
}) => {
  const tabSection = (
    <StyledTabSection
      gray={gray}
      transparent={transparent}
      translucent={translucent}
      dark={dark}
      {...props}
    >
      {children}
    </StyledTabSection>
  );

  return tabSection;
};

TabSection.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

export default TabSection;
