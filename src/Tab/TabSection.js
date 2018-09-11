import React from 'react';
import PropTypes from 'prop-types';
import withRefs from '../utils/withRefs';

import { StyledTabSection } from './Tab-styled';

const TabSection = ({ children, forwardedRef, ...other }) => {
  return (
    <StyledTabSection ref={forwardedRef} {...other}>
      {children}
    </StyledTabSection>
  );
};

TabSection.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Gray style TabSection */
  gray: PropTypes.bool,
  /** Transparent style TabSection */
  transparent: PropTypes.bool,
  /** Translucent style TabSection */
  translucent: PropTypes.bool,
  /** Dark style TabSection */
  dark: PropTypes.bool
};

export default withRefs(TabSection);
