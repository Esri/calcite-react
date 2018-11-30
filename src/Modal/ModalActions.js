import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';

import { StyledModalActions } from './Modal-styled';

const ModalActions = withRefs(({ children, forwardedRef, ...other }) => {
  return (
    <StyledModalActions ref={forwardedRef} {...other}>
      {children}
    </StyledModalActions>
  );
});

ModalActions.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

ModalActions.defaultProps = {};

ModalActions.displayName = 'ModalActions';

export default ModalActions;
