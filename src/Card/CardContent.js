import PropTypes from 'prop-types';
import React from 'react';
import { StyledCardContent } from './Card-styled';

import { CardContext } from './Card';

const CardContent = ({ children, ...other }) => {
  return (
    <CardContext.Consumer>
      {({ cardContext }) => (
        <StyledCardContent {...cardContext} {...other}>
          {children}
        </StyledCardContent>
      )}
    </CardContext.Consumer>
  );
};

CardContent.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  wide: PropTypes.bool,
  /** Description TBD */
  shaped: PropTypes.bool
};

CardContent.defaultProps = {};

CardContent.displayName = 'CardContent';

export default CardContent;
